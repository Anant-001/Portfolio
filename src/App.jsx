import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white md:pl-56">
            <Sidebar />
            <main className="p-4 space-y-32">
                <Home />
                <About />

            </main>
        </div>
    );
}

export default App;
