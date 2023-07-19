import { Button } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
const ButtonInput = (props) => {
  const { size, placeholder, textButton, bordered } = props;
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
      />
      <Button size={size} icon={<SearchOutlined />}>
        {textButton}
      </Button>{" "}
    </div>
  );
};

export default ButtonInput;
