import React from "react";
import { Badge, Col } from "antd";
import {
  WrapperCart,
  WrapperHeader,
  WrapperTextAccount,
  WrapperTextHeader,
} from "./style";
// import Search from "antd/es/input/Search";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInput from "../Buttoninputsearch/ButtonInput";
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>SHOPBANDIENTHOAI</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInput
            size="large"
            textButton="Search"
            placeholder="Tìm kiếm sản phẩm hoặc thiết bị khác"
          />
        </Col>
        <Col span={6} style={{ display: "flex" }}>
          <UserOutlined style={{ fontSize: "30px" }} />
          <WrapperTextAccount>
            <span style={{ fontSize: "15px" }}>Đăng kí/Đăng nhập</span>
            <div>
              <span style={{ fontSize: "15px" }}>Tài khoản</span>
              <CaretDownOutlined />
            </div>
          </WrapperTextAccount>
          <WrapperCart>
            <Badge count={4} size="small">
              <ShoppingCartOutlined style={{ fontSize: "30px" }} />
            </Badge>
            <span style={{ fontSize: "15px" }}>Giỏ hàng</span>
          </WrapperCart>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
