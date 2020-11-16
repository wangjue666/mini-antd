import React from "react"
import ReactDom from "react-dom"
import Modal from "antd-mobile/lib/modal/index"


export default function alert(
    title: React.ReactNode,
    message: React.ReactNode,
    actions = [{text: '知道了'}]
){  
    const div = document.createElement("div")
    document.body.appendChild(div)
    const footer = actions.map(button=>{

    })
    ReactDom.render(
        <Modal visible={true} transparent={true} title={title} closable={false} maskClosable={false} footer={footer} >
            <div>{message}</div>
        </Modal>,
        div,
    )
}