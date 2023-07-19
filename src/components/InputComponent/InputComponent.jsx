import { Input } from "antd";
import React from "react";
const InputComponent = ({ size, placeholder, bordered }) => {
  return <Input size={size} placeholder={placeholder} bordered={bordered} />;
};

export default InputComponent;
