import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import React from "react";

const SideBar = () => {
  return (
    <ProSidebar collapsed="true" collapsedWidth="50px">
      <Menu iconShape="square">
        <MenuItem >Dashboard</MenuItem>
        <SubMenu title="Components" >
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default SideBar
