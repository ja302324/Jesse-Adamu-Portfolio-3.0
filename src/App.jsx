import Home from "./Home/Home";
import GlitterWarp from "./Home/Glitterwarp";



const App = () => {

    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
{/*             <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
                <GlitterWarp
                    width="100vw"
                    height="100vh"
                    speed={2}
                    starSize={0.6}
                    color="white"
                    density={8}
                    brightness={1}
                    focalDepth={0.1}
                    turbulence={0.0}
                />
            </div> */}
            <section style={{ position: "relative", zIndex: 1 }}>
                <Home />
            </section> 
        </div>
    );
    
}

export default App;
