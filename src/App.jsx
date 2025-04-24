import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="border min-h-screen w-full lg:max-w-7xl mx-auto space-y-2">
      <div>
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
