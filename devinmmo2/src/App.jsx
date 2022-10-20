
import { RoutesApp } from "./assets/Routes"
import { useState } from "react"
import { useEffect } from "react"
import { ThemeProvider } from "styled-components"
import ThemeContext from "./assets/contexts/Theme"
import { GlobalStyle } from "./assets/styles/GlobalStyle"
const lightTheme = {
  background: '#d2cfcf',
  text: '#333',
  border: '#000000',
  backgroundAlt: '#fdfdfd'
 }
 
 const darkTheme = {
   background: '#595959',
   backgroundAlt: '#333',
   text: '#f2f2f2',
   border: '#f2f2f2',
   shadow: '0 0 5px rgba(255, 255, 255, .75)',
 }
 
function App() {
  const [theme, updateTheme] = useState(lightTheme, darkTheme)

  useEffect(()=>{
    const data = window.localStorage.getItem('tema-salvo')
    if (data!== null) updateTheme(JSON.parse(data))
  }, [])

useEffect(() =>{
  window.localStorage.setItem('tema-salvo', JSON.stringify(theme))

}, [theme])



const handleSwitchTheme = (e) => {

updateTheme(oldTheme => {
  
  
    if (oldTheme.background === '#595959') {
        return lightTheme 
        
    }
    return darkTheme 
   
    
})

}


  return (
    <div className="App">
      <ThemeContext.Provider value={{switchTheme: handleSwitchTheme}}>
      <ThemeProvider theme={theme}>
      <RoutesApp/>
      <GlobalStyle/>
      </ThemeProvider>
      </ThemeContext.Provider>
     
     
    
    </div>
  )
}

export default App
