import React from 'react';
import Button, {ButtonType,ButtonSize} from "./Components/button/Button"
import Menu from "./Components/menu/Menu"
import MenuItem from "./Components/menu/MenuItem"
function App() {
  return (
    <div className="App">
      <Button className="my-btn" btnType={ButtonType.Danger} disabled={true}>123</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>123</Button>
      <Button  btnType={ButtonType.Link} href="www.baidu.com">123</Button>
      <Button autoFocus>hello disal</Button>

      <Menu defaultIndex={1}>
        <MenuItem>
          Link 0
        </MenuItem>
        <MenuItem>
          Link 1
        </MenuItem>
        <MenuItem>
          Link 2
        </MenuItem>
      </Menu>
    </div>
  );
}

export default App;
