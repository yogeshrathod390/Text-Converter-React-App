import "./App.css";
import NavBar from "./components/NavBar";
import TextBox from "./components/TextBox";

function App() {
  return (
    <div>
      
      <NavBar
        title="TextConverter"
        home="Home"
        link="Link"
        dropdown="Dropdown"
        action="Action"
        Anotheraction="Another Action"
        Somethingelsehere="Something else here"
        search="Search"
       
      />
      <TextBox heading="Text converter box"></TextBox>
    </div>
  );
}

export default App;
