import React from "react";
import PropTypes from "prop-types";
import Input from "./Input.styled";

type InputProps = {
  placeholder: string;
};

const InputComponent = ({ placeholder }: InputProps) => {
  return <Input placeholder={placeholder} />;
};

InputComponent.propTypes = {
  placeholder: PropTypes.string,
};

export default InputComponent;
