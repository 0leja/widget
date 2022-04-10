import React from "react";
import WindowRouter from "./components/Winds/WindowRouter";
import styles from './style.css'


function App(props) {

  return (
      <>
          <link rel="stylesheet" href="style.css"/>
          <link rel="preload" as='img' href="https://raw.githubusercontent.com/0leja/widget/main/img"/>
          <link rel="preload" as='img' href="https://github.com/0leja/widget/blob/main/img/decoration/glass-size.png?raw=true"/>

          <div className="widget" >
              <WindowRouter {...props} />
          </div>
      </>

  );

}

export default App;
