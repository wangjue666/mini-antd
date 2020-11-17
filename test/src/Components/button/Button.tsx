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

type NativeButtonProps = BaseButtonType & React.ButtonHTMLAttributes<HTMLElement> 
type AnchorButtonProps = BaseButtonType & React.AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props)=>{
    const {btnType, disabled, size, children, className, href, ...restProps} = props
    const classes = classnames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': disabled
    })
    if(btnType === ButtonType.Link && href){
        return (
        <a 
            className={classes}
            href={href}
            {...restProps}
        >{children}</a>
        )
    }else{
        return (
        <button
            className={classes}
            disabled={disabled}
            {...restProps}
        >{children}</button>
        )
    }
}


Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}


export default Button