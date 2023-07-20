import React from "react";
import {Col, Image, InputNumber, Row} from 'antd'
import imageProduct from '../assets/image/test.webp'
import imageProductSmall from '../assets/image/test2.webp'
import { WrapperStyleImageSmall } from "./style";
import { WrapperStyleColSmall, WrapperStyleNameProduct } from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { WrapperStyleTextSell, WrapperStylePriceProduct, WrapperStylePriceTextProduct } from "./style";
import {WrapperQualityProduct} from "./style"
import ButtonComponent from '../ButtonComponent/ButtonComponent'
const ProductDetail = () => {
  const onChange = () =>{}
  return (
    <Row style={{padding: '16px', background: '#fff'}}>
      <Col span={10}>
        <Image src ={imageProduct} alt="image product" preview={false}/>
        <Row style={{padding: '10px', justifyContent: 'space-between'}}>
          <WrapperStyleColSmall span={6} sty>
          <WrapperStyleImageSmall src ={imageProductSmall} alt="image small" preview="false"/>
          </WrapperStyleColSmall>
          <WrapperStyleColSmall span={6}>
          <WrapperStyleImageSmall src ={imageProductSmall} alt="image small" preview="false"/>
          </WrapperStyleColSmall>
          <WrapperStyleColSmall span={6}>
          <WrapperStyleImageSmall src ={imageProductSmall} alt="image small" preview="false"/>
          </WrapperStyleColSmall>
          <WrapperStyleColSmall span={6}>
          <WrapperStyleImageSmall src ={imageProductSmall} alt="image small" preview="false"/>
          </WrapperStyleColSmall>
    
        </Row>
      </Col>
      <Col span={14}>
        <WrapperStyleNameProduct>Apple iPhone 14 Pro</WrapperStyleNameProduct>
        <div>
          <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216,54)'}}/>
          <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216,54)'}}/>
          <WrapperStyleTextSell>| Da ban 1000+</WrapperStyleTextSell>
        </div>
        <WrapperStylePriceProduct>
          <WrapperStylePriceTextProduct>200.000</WrapperStylePriceTextProduct>
        </WrapperStylePriceProduct>
        <WrapperQualityProduct>
          <div style={{margin: '10px 0 20px'}}></div>
          <div style={{marginBottom: '8px'}}>So Luong</div>
          <div>
            <PlusOutlined style={{color: '#000', fontSize: '20px'}}  />
            <InputNumber  defaultValue={3} onChange={onChange} size="small" />
            <MinusOutlined style={{color: '#000', fontSize: '20px'}} />
          </div>
        </WrapperQualityProduct>
        <div style={{margin: '10px 0 20px'}}></div>
        <div type={{display: 'flex', aliggItems: 'center', gap: '12'}}>
          <ButtonComponent
          bordered={false}
          size={40}
          styleButton={{
            background: 'rgb(255,57,69)',
            height: '48px',
            width: '220px',
            border: 'none',
            borderRadius: '4px'
          }}
          textbutton={'chon mua'}
          styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '700'}}
          >
          </ButtonComponent>

          <ButtonComponent
          
          size={40}
          styleButton={{
            background: '#fff',
            height: '48px',
            width: '220px',
            border: '1px solid rgb(13,92,182)',
            borderRadius: '4px'
          }}
          textbutton={'Mua tra sau'}
          styleTextButton={{color: 'rgb(13,92,182)', fontSize: '15px'}}
          >
          </ButtonComponent>
        </div>
      </Col>
    </Row>
  )
}

export default ProductDetail;
