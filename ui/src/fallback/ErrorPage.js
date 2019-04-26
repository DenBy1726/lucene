import React from "react"
import "./ErrorPage.css"
import Image from "../component/Common/Image";

const ErrorPage = ({image, code, text, children}) => {
    return (
        <div className="notFound">
            <div style={{
                width: "100%",
                display: "flex"
            }}>
                <Image defaultSrc="/img/notFound.png" src={image} size={250} style={{margin: "0 auto"}}/>
            </div>
            <div className="message-box">
                <h1>{code}</h1>
                <p>{text}</p>
                {children}
            </div>
        </div>
    )
};

export default ErrorPage
