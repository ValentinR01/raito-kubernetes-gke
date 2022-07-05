import Card from "components/atoms/grouping/Card/Card";
import Heading from "components/atoms/text/Heading/Heading";
import ColorField from "components/molecules/forms/ColorField/ColorField";
import PageTemplate from "components/templates/PageTemplate";
import React from "react";

const ColorPickerPage = () => {
  return (
    <PageTemplate>
      <Card small>
        <Heading level="h1">Color Picker</Heading>
        <ColorField label="Choisissez la couleur de la lumière" />
      </Card>
    </PageTemplate>
  );
};

export default ColorPickerPage;
