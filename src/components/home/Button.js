import React from 'react'
import '../../styles/button.css';

const Button=({children, ...rest})=>{
    return(
        <button className='button' type="button"  {...rest}>{children}</button>
        
    )
}

const ButtonAdd = ({children, ...rest})=>{
    return(
        <button className='button--add' type='submit' {...rest}>{children}</button>
    )
}

const ButtonCancel = ({children, ...rest})=>{
    return(
        <button className='button--cancel' type='button' {...rest}>{children}</button>
    )
}

const ButtonSelect = ({children,...rest})=>{
    return(
        <select className='button__select'{...rest} >{children}</select>
    )
}
export {ButtonAdd};
export {ButtonCancel};
export {ButtonSelect};
export default Button;