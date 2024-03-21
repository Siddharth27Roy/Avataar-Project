import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

import useTheme, { ThemeProvider } from './contexts/theme'

function App() {

  // Changing Theme Mode using context api
  const [themeMode, setThemeMode] = useState('dark');

  const themeModeHandler = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");

    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, themeModeHandler}}>
      <Header/>
      <Outlet/>
    </ThemeProvider>

  )
}

export default App
