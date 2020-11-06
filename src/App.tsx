import React from 'react'
import "./App.scss";
import { Header } from "./components/header";
import { NavigationBar } from "./components/navBar";
import { Title } from "./components/title";
import Search from "./components/search";

const App:React.FC=()=> {
  return (
    <>
      <Header />
      <NavigationBar />
      <Title />
      <Search />
    </>
  );
}

// const ShopApp:React.FC=()=>{
//   return(<BrowserRouter>
//     <Provider store={store}>
//     <App />
//     </Provider>
//     </BrowserRouter>)
// }

export default App;
