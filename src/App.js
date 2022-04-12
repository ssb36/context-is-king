import { Routes, Route } from 'react-router-dom';
import {Home} from "./components/Home"
import './App.css';
import {Form1} from "./components/Form1"
import {Form2} from "./components/Form2"
import { Users } from './components/Users';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration/one" element={<Form1 />} />
        <Route path="registration/two" element={<Form2 />} />
        <Route path="users" element={<Users />} />

      </Routes>

    </div>
  );
}

export default App;
