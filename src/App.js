import "./App.css";
import { Header } from "./components/header";
import { NavigationBar } from "./components/navBar";
import { Title } from "./components/title";
import Search from "./components/search";

function App() {
  return (
    <>
      <Header />
      <NavigationBar />
      <Title />
      <Search />
    </>
  );
}

export default App;
