import {Col, Image } from "antd"
import styled from "styled-components"
export const WrapperStyleImageSmall = styled(Image)`
    height: 100px;
    width: 100px;
`
export const WrapperStyleColSmall = styled(Col)`
    flex-basis: unset;
    display: flex;
`
export const WrapperStyleNameProduct = styled.h1`
    color: rgb(36, 36, 36);
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    word-break: break-word;
`
export const WrapperStyleTextSell = styled.span`
    color: rgb(120, 120, 120);
    font-size: 15px;
    line-height: 24px;
`
export const WrapperStylePriceProduct = styled.div`
    background: rgb(250,250,250);
    border-radius: 4px;
`
export const WrapperStylePriceTextProduct = styled.div`
    font-size: 32px;
    line-height: 40px;
    margin-right: 8px;
    font-weight: 500;
    padding: 10px;
    margin-top: 10px;
`
export const WrapperQualityProduct = styled.div`
    
`

// export const WrapperInputNumber = styled(InputNumber)`
//     &.ant-input-number.ant-input-number-sm {
//         width: 40px;
//         border-top: none;
//         border-bottom: none;
//         .ant-input-number-handler-wrap {
//             display: none !important;
//         }
//     };
// `