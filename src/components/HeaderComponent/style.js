import { Row } from "antd";
import { styled } from "styled-components";
export const WrapperHeader = styled(Row)`
  padding: 10px 120px;
  background-color: rgb(26, 148, 255);
  gap: 16px;
  flex-wrap: nowrap;
`;
export const WrapperTextHeader = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-algin: left;
`;
export const WrapperTextAccount = styled.div`
display:flex,
algin-items: center;
`;
export const WrapperCart = styled.span`
  display: flex;
  white-space: nowrap;
`;
