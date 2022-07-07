import { Label } from "components/atoms/forms";
import { Stack, Text } from "components/atoms/grouping";
import React from "react";
import ColorFieldStyle from "./ColorField.style";

const ColorField = ({ label, onChange }) => {
  return (
    <ColorFieldStyle>
      <Stack>
        <Label>{label}</Label>
        <input type="color" id="color" name="color" onChange={onChange} />
      </Stack>
    </ColorFieldStyle>
  );
};

export default ColorField;
