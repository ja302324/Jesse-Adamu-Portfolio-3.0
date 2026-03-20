import { Routes, Route } from 'react-router-dom'
import Home from "./Home/Home"
import SportGraphics from "./Projects/SportGraphics"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/sport-graphics" element={<SportGraphics />} />
        </Routes>
    )
}

export default App;
