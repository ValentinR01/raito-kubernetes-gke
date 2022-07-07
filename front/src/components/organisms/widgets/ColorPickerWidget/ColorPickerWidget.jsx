import Card from "components/atoms/grouping/Card/Card";
import Heading from "components/atoms/text/Heading/Heading";
import { ColorField } from "components/molecules/forms";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import React, { useState } from "react";
import ColorEntity from "services/Entities/ColorEntity";

const ColorPickerWidget = () => {
  const [errors, setErrors] = useState(null);

  const postColor = async (e) => {
    try {
      const data = {
        colorHexadecimal: e.target.value,
      };
      const response = await ColorEntity.postColor(data);
      console.log(response.data);
    } catch (err) {
      // setErrors(err);
      setErrors("An error occured with the request");
    }
  };

  return (
    <PageTemplate>
      <Card small>
        <Heading level="h1">Color Picker</Heading>
        <ColorField
          label="Choisissez la couleur de la lumière"
          onChange={(e) => postColor(e)}
          error={errors}
        />
      </Card>
    </PageTemplate>
  );
};

export default ColorPickerWidget;
