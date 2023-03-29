import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import AppRoutes from "./routes/AppRoutes";

function App() {
    const styles = {
        height: "calc(100vh - 88px)",
    };

    return (
        <>
            <Navigation />
            <div style={styles}>
                <AppRoutes />
            </div>
        </>
    );
}

export default App;
