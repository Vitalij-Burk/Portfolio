import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import "./globals.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </main>
  );
};

export default App;
