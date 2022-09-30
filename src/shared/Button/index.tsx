import React from "react";
import PropTypes from "prop-types";
import Button from "./Button.styled";

type ButtonProps = {
  text: string;
};

const Primary = ({ text }: ButtonProps) => {
  return <Button.Primary>{text}</Button.Primary>;
};

const Add = ({ text }: ButtonProps) => {
  return <Button.Add>{text}</Button.Add>;
};

Primary.prototype = {
  text: PropTypes.string.isRequired,
};

Add.prototype = {
  text: PropTypes.string.isRequired,
};

export default {
  Primary,
  Add,
};
