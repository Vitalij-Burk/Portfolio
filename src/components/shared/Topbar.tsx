import { useState } from "react";

const Topbar = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav className="topbar">
      <h1 className="h2-bold">Vitalij Burk</h1>
      <img
        src={
          theme === "light"
            ? "/public/assets/icons/moon.png"
            : "/public/assets/icons/sun.png"
        }
        alt="moon"
        className=" w-9 h-9"
        onClick={changeTheme}
      />
    </nav>
  );
};

export default Topbar;