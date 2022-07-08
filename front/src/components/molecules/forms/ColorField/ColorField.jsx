import { Label } from "components/atoms/forms";
import { Stack } from "components/atoms/grouping";
import React from "react";
import { ErrorText } from "components/molecules/forms";
import ColorFieldStyle from "./ColorField.style";
import { ChromePicker } from "react-color";

/**
 *
 * @param {String} label The label displayed by the Label component
 * @param {String} color (hexadecimal) - The color state from the parent
 * @param {Function} setColor The function to set the color state in the parent
 * @param {String} error The error text displayed under the input
 */
const ColorField = ({ label, color, setColor, error }) => {
  const handleChange = (e) => {
    setColor(e.hex);
  };

  /**
   *
   * @returns White color by default, if no color is provided
   */
  const handleColor = () => {
    if (!color) {
      return "#FFFFFF";
    }
    return color;
  };

  return (
    <ColorFieldStyle>
      <Stack>
        <Label>{label}</Label>
        <ChromePicker
          color={handleColor()}
          onChangeComplete={handleChange}
          disableAlpha
        />
        <ErrorText error={error} />
      </Stack>
    </ColorFieldStyle>
  );
};

export default ColorField;
