import React from 'react';
import { Spin } from 'antd';

export default function Spinner ({ spinning, children }) {
    return (
        <Spin size="large" spinning={spinning} tip="Загрузка...">
            {children}
        </Spin>
    )
}
