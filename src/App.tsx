import React from 'react';
import Button, { ButtonType, ButtonSize } from "./Components/button/Button"
import Menu from "./Components/menu/Menu"
import MenuItem from "./Components/menu/MenuItem"
import SubMenu from "./Components/menu/SubMenu"
function App() {
  return (
    <div className="App">
      <Menu defaultOpenSubMenus={['3']} mode="vertical" onSelect={(index) => console.log(index)} defaultIndex={'0'}>
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
