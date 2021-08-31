import React from "react";
import { Text } from "react-native";

import colors from "../../config/colors";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[colors.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
