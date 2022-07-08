import React from "react";
import Input from "components/atoms/forms/Input/Input";
import ConnexionButton from "components/molecules/clickable/ConnexionButton/ConnexionButton";
import InscriptionButton from "components/molecules/clickable/InscriptionButton/InscriptionButton";
import { useState } from "react";
import { useEffect } from "react";
import { ErrorText } from "components/molecules/forms";
import BasicButtonStyle from "components/molecules/clickable/BasicButton/BasicButton.style";
import { Stack } from "components/atoms/grouping";

const LoginForm = () => {
  const [data, setData] = useState({});

  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
  };

  /**
   * @description API call to login
   */
  const login = async () => {
    const encodedData = btoa(`${data.email}:${data.password}`);
    const headers = new Headers({
      Authorization: `Basic ${encodedData}`,
      //   "Content-Type": "application/x-www-form-urlencoded",
    });
    console.log(headers);
    try {
      const response = await fetch("http://localhost:2345/login", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: headers,
      });
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        console.log(data);
      } else throw new Error(response.statusText);
    } catch (err) {
      setErrors("La requête n'a pas fonctionné");
      console.warn(err);
    }
  };

  const register = async () => {
    const encodedData = btoa(`${data.email}:${data.password}`);
    const headers = new Headers({
      Authorization: `Basic ${encodedData}`,
      //   "Content-Type": "application/x-www-form-urlencoded",
    });
    console.log(headers);
    try {
      const response = await fetch("http://localhost:2345/register", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: headers,
      });
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        console.log(data);
      } else throw new Error(response.statusText);
    } catch (err) {
      setErrors("La requête n'a pas fonctionné");
      console.warn(err);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <p>Email</p>
      <Input
        type="email"
        placeholder="email"
        name="email"
        onChange={(e) => handleChange(e)}
      />

      <p>Mot de passe</p>
      <Input
        name="password"
        type="password"
        placeholder="password"
        onChange={(e) => handleChange(e)}
      />
      <ErrorText error={errors} />
      <Stack>
        <BasicButtonStyle primary onClick={() => login()}>
          Se Connecter
        </BasicButtonStyle>
        <BasicButtonStyle primary onClick={() => register()}>
          S'inscrire
        </BasicButtonStyle>
      </Stack>
    </div>
  );
};

export default LoginForm;
