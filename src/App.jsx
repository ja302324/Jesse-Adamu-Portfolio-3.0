import { Routes, Route } from 'react-router-dom'
import Home from "./Home/Home"
import SportGraphics from "./Projects/SportGraphics"
import PersonalGraphics from "./Projects/PersonalGraphics"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/sport-graphics" element={<SportGraphics />} />
            <Route path="/projects/personal-graphics" element={<PersonalGraphics />} />
        </Routes>
    )
}

export default App;
