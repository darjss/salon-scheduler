import { TextInput, TextInputProps, StyleSheet } from "react-native";
import React from "react";

interface InputProps extends TextInputProps {
  style?: any;
}

export const Input = ({ style, ...props }: InputProps) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor="#9ca3af"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    color: "#000",
  },
});
