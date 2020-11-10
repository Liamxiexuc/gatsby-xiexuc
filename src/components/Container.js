import React from "react"
import containerStyles from "./container.module.scss"

const Container = props => {
    return (
        <div className={containerStyles.container}>
            {props.children}
        </div>
    )
}

export default Container