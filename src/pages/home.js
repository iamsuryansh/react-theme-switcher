import React from "react";
import { useTheme } from "../context/theme-context";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`page ${theme}`}>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
};

export default Home;