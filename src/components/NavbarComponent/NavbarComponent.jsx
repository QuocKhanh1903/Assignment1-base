import React from "react";
import { WrapperLabelText, WrapperlContent, WrapperlTextValue } from "./style";
import { Checkbox, Rate } from "antd";

const NavbarComponent = () => {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperlTextValue>{option}</WrapperlTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}>
            {options.map((option) => {
              return <Checkbox value={option.value}>{option.label}</Checkbox>;
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => {
          console.log("check", option);
          return (
            <div style={{ display: "flex", gap: "4px" }}>
              <Rate disabled defaultValue={option} />
              <span>{`Từ ${option} sao`}</span>
            </div>
          );
        });
      case "price":
        return options.map((option) => {
          return (
            <div
              style={{
                padding: "4px",
                color: "rgb(56,56,61)",
                borderRadius: "10px",
                backgroundColor: "rgb(238,238,238)",
                width: "fit-content",
              }}>
              {option}
            </div>
          );
        });
      default:
        return {};
    }
  };
  return (
    <div>
      <WrapperLabelText>Lable</WrapperLabelText>
      <WrapperlContent>
        {renderContent("text", [
          "Không giới hạn",
          "Sản phẩm mới",
          "Chính sách bảo hành",
        ])}
      </WrapperlContent>
    </div>
  );
};

export default NavbarComponent;
