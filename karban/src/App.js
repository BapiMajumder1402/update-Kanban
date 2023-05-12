import "./App.css";

import Layout from "./components/layout/Layout";
// import ToDo from './components/toDo/toDo';
import Details from "./components/details/Details";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={":cardId"} element={<Details />} />
        </Route>
      </Routes>

      {/* <ToDo /> */}
    </div>
  );
}

export default App;
