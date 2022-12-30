import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextBox from "./components/TextBox";
import Alert from "./components/Alert"; 
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500)

  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode hass been enable", "success");
      document.title = "Textutils-Dark mode"
    } else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode hass been enable", "success");
      document.title = "Textutils-Light mode"
    }
  };

  return (
    <>
      {/* <Router> */}
      <NavBar
        mode={mode}
        toggleMode={toggleMode}
        title="Textutils"
        home="Home"
        about="About"
        dropdown="Dropdown"
        action="Action"
        Anotheraction="Another Action"
        Somethingelsehere="Something else here"
        search="Search"
      />
      <Alert alert={alert}></Alert>
      <div className="container my-3">
     {/* <Routes>
        <Route each path="/about" element={<About></About>} />
        <Route each path="/" element= {<TextBox showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"></TextBox>} />
      </Routes> */}
      <TextBox showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"></TextBox>}
      </div>
     {/* </Router> */}
      </>
  );
}

export default App;
