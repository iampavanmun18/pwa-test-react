import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const styles = {
  width:'100px',
  height:'50px',
  textAlign: 'center',
  position: 'absolute',
  top:0,
  left:0,
  transform: 'translate(50%,50%)'
}

const App = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
          console.log('in use')// I see in the console
      const handler = (e) => {
          console.log('in handler')
          setSupportsPWA(true);// I do not see in the console
          // e.preventDefault();
          setPromptInstall(e);
      };
      window.addEventListener("beforeinstallprompt", handler(), false)
      return () => window.removeEventListener("transitionend", handler);
      });
      const onClick = e => {
          alert('click')
          // e.preventDefault();
          console.log('promptInstall',promptInstall)
          if (promptInstall) {
              promptInstall.prompt();
          }else{
                  return;
          };
      };

      return (
          supportsPWA && (<button style={styles} onClick={(e) => onClick(e)}>Install</button>)
      )
};

export default App;
