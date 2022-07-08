import { Text } from "components/atoms/grouping";
import React from "react";
import ErrorTextStyle from "./ErrorText.style";

/**
 *
 * @param {String} error The error text displayed under the input
 */
const ErrorText = ({ error }) => {
  if (!error) {
    return;
  }
  return (
    <ErrorTextStyle>
      <Text color="error" size="xsmall">
        {error}
      </Text>
    </ErrorTextStyle>
  );
};

export default ErrorText;
