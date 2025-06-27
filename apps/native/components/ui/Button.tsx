import React from "react";
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  style?: any;
  textStyle?: any;
  loading?: boolean;
}

export const Button = ({
  title,
  style,
  textStyle,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, props.disabled && styles.disabled]}
      activeOpacity={0.8}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
  },
  disabled: {
    opacity: 0.6,
  },
});
