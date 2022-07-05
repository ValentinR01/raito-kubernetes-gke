import ColorField from "components/molecules/forms/ColorField/ColorField";
import PageTemplate from "components/templates/PageTemplate";
import React from "react";

const ColorPickerPage = () => {
  return (
    <PageTemplate>
      <ColorField label="Pick a color" />
    </PageTemplate>
  );
};

export default ColorPickerPage;
