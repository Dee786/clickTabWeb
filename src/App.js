import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import Nopage from "./Components/Nopage";
import styled from 'styled-components'

const Container = styled.footer`
 min-height:30px;
 background-color:#a5db8a;
 text-align:center;
`;

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
      <Container>©Copyright - 2022</Container>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);