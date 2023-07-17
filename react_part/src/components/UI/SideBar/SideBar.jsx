import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function MySideBar() {
  const [EnableSidebar, setEnableSidebar] = useState(false);

  return (
    <Sidebar collapsed={EnableSidebar}>
      <button onClick={() => {setEnableSidebar(!(EnableSidebar || false))}}>Click me</button>
  <Menu>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>
  );
}

export default MySideBar;