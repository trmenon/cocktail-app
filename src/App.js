import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Menu,Cocktail} from './pages';
import { Layout } from './layout/layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = {'/'} element={<Layout/>}>
            <Route index element={<Menu/>}/>
            <Route path={':id'} element={<Cocktail/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
