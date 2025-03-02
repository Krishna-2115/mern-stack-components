import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "./themeSlice";

const DarkModeToggle = () => {
  const darkMode = useSelector(state => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <p>Current Mode: {darkMode ? "Dark" : "Light"}</p>
      <button onClick={() => dispatch(toggleDarkMode())}>Toggle Theme</button>
    </div>
  );
};

export default DarkModeToggle;
