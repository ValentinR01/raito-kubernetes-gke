import Label from "components/atoms/forms/Label/Label";
import React from "react";
import ColorFieldStyle from "./ColorField.style";
import Stack from "components/atoms/grouping/Stack/Stack";

const ColorField = ({ label }) => {
  return (
    <ColorFieldStyle>
      <Stack>
        <Label>{label}</Label>
        <input type="color" id="color" name="color" />
      </Stack>
    </ColorFieldStyle>
  );
};

export default ColorField;
