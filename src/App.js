import React from 'react';
import './App.scss';
import Buscador from './Components/Buscador/Buscador';
import Gallery from './Components/Gallery/Gallery';

//Contextos
export const ThemeContext = React.createContext();

const themes = {
  light: {
    name: "Light",
    background: "#FFF",
    fontColor: "#000",
  },
  rainbow: {
    name: "Rainbow",
    background: `linear-gradient(
        45deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
    )`,
    fontColor: "#FFF",
  }
}

function App() {

  //Estados
  const [themeState, setThemeState] = React.useState(themes.light);
  const [info, setInfo] = React.useState();

  return (
    <div className="App">
      <div className='header'>
        <Buscador 
          setInfo={setInfo}
        />
        <button 
          onClick={() => setThemeState(themeState === themes.light ? themes.rainbow : themes.light)}>
            Change theme
        </button>
        <ThemeContext.Provider value={themeState}>
          <Gallery
            info={info}
          />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;