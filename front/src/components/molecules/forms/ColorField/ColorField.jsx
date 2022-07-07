import { Label } from "components/atoms/forms";
import { Stack } from "components/atoms/grouping";
import React from "react";
import { ErrorText } from "components/molecules/forms";
import ColorFieldStyle from "./ColorField.style";

/**
 *
 * @param {String} label The label displayed by the Label component
 * @param {Function} onChange The function triggered by the input's onChange event
 * @param {String} error The error text displayed under the input
 */
const ColorField = ({ label, onChange, error }) => {
  return (
    <ColorFieldStyle>
      <Stack>
        <Label>{label}</Label>
        <input type="color" id="color" name="color" onChange={onChange} />
        <ErrorText error={error} />
      </Stack>
    </ColorFieldStyle>
  );
};

export default ColorField;
