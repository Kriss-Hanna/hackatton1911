import Caroussel from "./components/Caroussel";
import Search from "./components/Search";
import Form from "./components/Form";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Caroussel />
      <Search />
      <Form />
    </div>
  );
}

export default App;
