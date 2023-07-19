import React, { Fragment } from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Row } from "antd";

const TypeProductPage = () => {
  //   const onChange = {};
  return (
    <Fragment style={{ padding: "0 120px", background: "#efefef" }}>
      <Row
        style={{
          padding: "0 120px",
          background: "#efefef",
          flexWrap: "nowrap",
          paddingTop: "10px",
        }}>
        <Col
          span={4}
          style={{
            background: "#fff",
            marginRight: "10px",
            padding: "10px",
            borderRadius: "6px",
          }}>
          <NavbarComponent />
        </Col>
        <Col
          span={20}
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Col>
        {/* <Pagination
          showQuickJumper
          defaultCurrent={2}
          total={500}
          onChange={onChange}
        />{" "} */}
      </Row>
    </Fragment>
  );
};

export default TypeProductPage;
