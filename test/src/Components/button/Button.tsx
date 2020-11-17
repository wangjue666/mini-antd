import React from 'react'
import classnames from "classnames"

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonType {
    className?: string
    disabled?: boolean
    size?: ButtonSize
    btnType?: ButtonType
    children: React.ReactNode
    href?: string
}


const Button: React.FC<BaseButtonType> = (props)=>{
    const {btnType, disabled, size, children, className, href} = props
    const classes = classnames('btn', {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': disabled
    })
    if(btnType === ButtonType.Link && href){
        return (
        <a 
            className={classes}
            href={href}
        >{children}</a>
        )
    }else{
        return (
        <button
            className={classes}
            disabled={disabled}
        >{children}</button>
        )
    }
}


Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}


export default Button