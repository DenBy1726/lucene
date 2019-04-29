import React, {Fragment} from "react"
import {Button, Icon} from "antd";
import ErrorPage from "./ErrorPage";
import { goBack } from 'connected-react-router'
import {connect} from "react-redux";

const Page404 = ({goBack}) => {
    return (
        <ErrorPage image="/img/error/404.svg" code="404" text="Страница не найдена">
            <div style={{
                margin: "10px", display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap"
            }}>
                <Button style={{margin: "5px", flexGrow: 1}} type="primary" onClick={() =>goBack()}>
                    <Icon type="left"/>Назад
                </Button>
                <Button style={{margin: "5px", flexGrow: 2}} type="primary"
                        onClick={() => window.location.replace("/")}>
                    <Icon type="home"/> На главную страницу
                </Button>
            </div>
            <div style={{margin: "12px"}}>
                Возникли проблемы? Попробуйте
                <a onClick={() => {
                    window.location.replace("/");
                }}> перезайти </a>
                в приложение!
            </div>
        </ErrorPage>
    )
};


export default connect(null, { goBack })(Page404);