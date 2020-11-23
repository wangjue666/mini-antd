import React from 'react';
import Button, { ButtonType, ButtonSize } from "./Components/button/Button"
import Menu from "./Components/menu/Menu"
import MenuItem from "./Components/menu/MenuItem"
import SubMenu from "./Components/menu/SubMenu"
import Icon from "./Components/icon/Icon"
function App() {
  return (
    <div className="App">
      <Icon theme="danger" size="lg" icon="coffee"></Icon>
      <Icon theme="primary" size="lg" icon="arrow-down"></Icon>
      <Menu mode="vertical" defaultOpenSubMenus={['3']}  onSelect={(index) => console.log(index)} defaultIndex={'0'}>
        <MenuItem>
          Link 0
        </MenuItem>
        <MenuItem disabled>
          Link 1
        </MenuItem>
        <MenuItem>
          Link 2
        </MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>
            dropdown 1
          </MenuItem>
          <MenuItem>
            Link 4
        </MenuItem>
        </SubMenu>

        <SubMenu title="dropdown2">
          <MenuItem>
            dropdown 1
          </MenuItem>
          <MenuItem>
          dropdown 2
        </MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;
