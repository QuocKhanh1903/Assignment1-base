import { Button } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const ButtonComponent = (props) => {
  const { size, textButton } = props;
  return (
    <Button size={size} icon={<SearchOutlined />}>
      {textButton}
    </Button>
  );
};

export default ButtonComponent;
