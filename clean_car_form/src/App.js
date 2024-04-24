import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Form from './components/Form';

function App() {
  return (
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />

          </Routes>
        </div>
        {/* <div>
          <button>
            <Link to="/">HOME</Link>
          </button>
          <button>
            <Link to="/about">ABOUT</Link>
          </button>

        </div> */}
      </div>
  );
}

export default App;
