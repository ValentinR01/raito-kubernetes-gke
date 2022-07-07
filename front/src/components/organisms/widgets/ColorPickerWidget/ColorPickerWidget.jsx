import Card from "components/atoms/grouping/Card/Card";
import Heading from "components/atoms/text/Heading/Heading";
import { ColorField } from "components/molecules/forms";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import React from "react";
import ColorEntity from "services/Entities/ColorEntity";

const ColorPickerWidget = () => {
  const postColor = async (e) => {
    try {
      const data = {
        colorHexadecimal: e.target.value,
      };
      const response = await ColorEntity.postColor(data);
      console.log(response.data);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <PageTemplate>
      <Card small>
        <Heading level="h1">Color Picker</Heading>
        <ColorField
          label="Choisissez la couleur de la lumière"
          onChange={(e) => postColor(e)}
        />
      </Card>
    </PageTemplate>
  );
};

export default ColorPickerWidget;
