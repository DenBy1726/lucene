import React from "react"
import MediaQuery from "react-responsive";
import {Menu} from "antd"

const MenuItemGroup = Menu.ItemGroup;

export const ResponsiveMenu = ({menu, width, onClick}) => (
    <MediaQuery maxWidth={width}>
        {(matches) => {
            if (matches) {
                return <Menu onClick={onClick} mode="horizontal" defaultOpenKeys={['sub1']}>
                    <MenuItemGroup title="Система" key="sub1">
                        {[...menu]}
                    </MenuItemGroup>
                </Menu>;
            } else {
                return <Menu onClick={onClick} mode="horizontal">
                    {[...menu]}
                </Menu>;
            }
        }}
    </MediaQuery>
);