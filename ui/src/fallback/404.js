import React, {Fragment} from "react"
import {Button, Icon} from "antd";
import {withRouter} from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Page404 = ({history}) => {
    return (
        <ErrorPage image="/img/error/404.svg" code="404" text="Страница не найдена">
            <div style={{
                margin: "10px", display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap"
            }}>
                <Button style={{margin: "5px", flexGrow: 1}} type="primary" onClick={() => history.goBack()}>
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

export default withRouter(Page404)
