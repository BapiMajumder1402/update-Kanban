import './App.css';


import Layout from './components/layout/Layout';
// import ToDo from './components/toDo/toDo';

import {Routes, Route} from 'react-router'



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path={"/"} element={<Layout />} />
    </Routes>

      {/* <ToDo /> */}

    </div>
  );
}

export default App;
