import React from "react";
import { Route,Routes } from "react-router";
import FirstPage from "./FirstPage";
import LoginPage from "./LoginPage";
import Register from "./Register";
import Queues from "./Queues";
import Explore from "./Explore";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FirstPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/queue' element={<Queues/>}/>
        <Route path='/explore' element={<Explore/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
