import { Card } from "antd";
import React from "react";
import { WrapperStyleTextSell } from "../ProductDetailComponent/style";
import {
  StyleNameProduct,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
} from "./style";
import { StarOutlined } from "@ant-design/icons";
const CardComponent = () => {
  return (
    <Card
      hoverable
      bodyStyle={{ padding: "10px" }}
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }>
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span>
          <span>4.95</span>{" "}
          <StarOutlined style={{ fontSize: "10px", color: "yellow" }} />
        </span>
        <WrapperStyleTextSell>| Đã bán 3000+</WrapperStyleTextSell>
      </WrapperReportText>
      <WrapperPriceText>
        1.000.000đ
        <span>
          <WrapperDiscountText>-25%</WrapperDiscountText>
        </span>
      </WrapperPriceText>
    </Card>
  );
};

export default CardComponent;
