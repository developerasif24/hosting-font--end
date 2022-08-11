import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import { useState } from 'react';
import { darkTheme, lightTheme } from './utils/Theme';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { Footer } from './components/Footer';
import { WebHosting } from './pages/WebHosting';
import { ResellerHosting } from './pages/ResellerHosting';

function App() {
  const [darkMode,setDarkMode] = useState(false);
  

  return (
    <BrowserRouter>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
    <Routes>
      <Route path="/" index element={<Home />}>
        </Route>
      <Route path="/web-hosting" element={<WebHosting/>}> </Route>
      <Route path="/reseller-hosting" element={<ResellerHosting/>}> </Route>
    </Routes>
    <Footer></Footer>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
