import Card from "components/atoms/grouping/Card/Card";
import Heading from "components/atoms/text/Heading/Heading";
import { ColorField } from "components/molecules/forms";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import React, { useEffect, useState } from "react";
import ColorEntity from "services/Entities/ColorEntity";

const ColorPickerWidget = () => {
  const [errors, setErrors] = useState(null);
  const [color, setColor] = useState(null);

  /**
   * @definition Calls the API to change the color of the lamp
   */
  const postColor = async () => {
    try {
      const data = {
        colorHexadecimal: color,
      };
      const response = await ColorEntity.postColor(data);
      console.log(response.data);
      setErrors(null);
    } catch (err) {
      setErrors("An error occured with the request");
      console.warn(err);
    }
  };

  /**
   * @description Trigger the API call when the color changes
   */
  useEffect(() => {
    if (!color) {
      return;
    }
    postColor();
  }, [color]);

  return (
    <PageTemplate>
      <Card small>
        <Heading level="h1">Color Picker</Heading>
        <ColorField
          label="Choisissez la couleur de la lumière"
          color={color}
          setColor={setColor}
          error={errors}
        />
      </Card>
    </PageTemplate>
  );
};

export default ColorPickerWidget;
