import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import About from './pages/About.jsx'
import Delivery from './pages/Delivery.jsx'
import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"

function App() {
    return (
        <>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />

                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/delivery" element={<Delivery />} />
            </Routes>
            <Footer></Footer>
        </>
    )
}

export default App
