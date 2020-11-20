import React from "react"
import {render, fireEvent} from "@testing-library/react"
import Button, {ButtonType, ButtonSize, ButtonProps} from "./Button"

const defaultProps = {
    onClick: jest.fn()
}

const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'my-btn'
}

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}

describe("test button components",()=>{
    it('should render the correct default button',()=>{
        const wrapper = render(<Button {...defaultProps} >Nice</Button>)
        const element = wrapper.getByText("Nice") as HTMLButtonElement
        expect(element).toBeTruthy()
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
        expect(element.disabled).toBeFalsy()
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    it('should render the correct component based on different props',()=>{
        const wrapper = render(<Button {...testProps} >Nice</Button>)
        const element = wrapper.getByText("Nice")
        expect(element).toBeTruthy()
        expect(element).toHaveClass('btn-primary btn-lg my-btn')
    })
    it('should render a link when btnType equals link and href is provided',()=>{
        const wrapper = render(<Button btnType={ButtonType.Link} href="http://www.baidu.com">Link</Button>)
        const element = wrapper.getByText("Link")
        expect(element).toBeTruthy()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
    })
    it('should render disabled button when disabled set to true',()=>{
        const wrapper = render(<Button {...disabledProps} >disabled</Button>)
        const element = wrapper.getByText("disabled") as HTMLButtonElement
        expect(element).toBeTruthy()
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(defaultProps.onClick).not.toHaveBeenCalled()
    })
})