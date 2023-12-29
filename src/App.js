import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { routeslogin } from './component/routes/routeslogin/routesLogin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        {routeslogin.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />))}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
