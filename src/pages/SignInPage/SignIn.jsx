import React from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from '../../components/assets/image/logo-login.jpg'
import { Image } from "antd";

const SingnIn = () => {
    return(
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
        <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
            <WrapperContainerLeft>
                <h1>Xin Chao</h1>
                <p>Dang nhap va tao tai khoan</p>
            <InputForm style={{marginBottom: '10px'}} placeholder="abc@gmail.com" />
            <InputForm  placeholder="Nhập mật khẩu" />
            <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
                background: 'rgb(255,57,69)',
                height: '48px',
                width: '100%',
                border: 'none',
                borderRadius: '4px',
                margin: '26px 0 10px'
            }}
            textbutton={'Dang Nhap'}
            styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '700'}}
            >
            </ButtonComponent>
            <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
            <p>Chưa có tài khoản <WrapperTextLight>Tạo tài khoản</WrapperTextLight></p>
            </WrapperContainerLeft>
            <WrapperContainerRight>
            <Image src={imageLogo} preview={false} alt="iamge-logo" height="300px" width="300px" />
            <h4>Mua Sam Tai Day</h4>
            </WrapperContainerRight>
        </div>
        </div>
    )
}

export default SingnIn