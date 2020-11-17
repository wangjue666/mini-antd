import React from 'react';
import Button, {ButtonType,ButtonSize} from "./Components/button/Button"
function App() {
  return (
    <div className="App">
      <Button btnType={ButtonType.Danger} disabled={true}>123</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>123</Button>
      <Button btnType={ButtonType.Link} href="www.baidu.com">123</Button>
      <Button >hello disal</Button>
    </div>
  );
}

export default App;
