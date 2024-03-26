import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Contador from "./componentes/Contadro";
import { useState } from "react";


const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const alteraDarkMode = () => {
   setDarkMode(!darkMode);

  }


  return (
    <div  className={darkMode?"modo-negro": ""}>
      <Header />
      <Contador />
      Alterar cor de fundo
      <button onClick={alteraDarkMode}>alterar</button>
      <Footer />
    </div>
  );
};

export default App