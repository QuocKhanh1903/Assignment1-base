import React, {useState} from "react";
import Input from "antd/es/input/Input";
import { WrapperInputStyle } from "./style";
const InputForm = (props) => {
    const {valueInput, setValueInput} = useState('')
    const {placeholder='Nhap Text', ...rests} = props
    return (
        
    <WrapperInputStyle placeholder={placeholder} value={props.value} {...rests} />
        
    )
}

export default InputForm