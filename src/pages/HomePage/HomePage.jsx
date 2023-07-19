import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../components/assets/image/slider1.webp";
import slider2 from "../../components/assets/image/slider2.webp";
import slider3 from "../../components/assets/image/slider3.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
const HomePage = () => {
  const arr = ["TV", "Tủ lạnh", "Điều hòa"];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
        <div
          id="container"
          style={{
            background: "#efefef",
            padding: "0 120px",
            height: "1100px",
            width: "100%",
          }}>
          <SliderComponent arrImages={[slider1, slider2, slider3]} />
          <div
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
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}>
            <WrapperButtonMore
              textButton="Xem thêm"
              type="outline"
              styleButton={{
                border: "1 solid rgb(11,116,229)",
                color: "rgb(11,116,229)",
                width: "240px",
                height: "38px",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
