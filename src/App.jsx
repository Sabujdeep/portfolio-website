import { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';
import './App.css'
import Animation from './components/Animation'
import NavBar from './components/NavBar'


function App() {
  
  const [isShown, setIsShown] = useState(true);
  const [display, setMain] = useState(false)

  useEffect(() => {
    console.log("i am clicked")
  }, [])

  const handleChange = () =>{
    setIsShown(false)
    setMain(prev => !prev)
  }

  return (
    <div>
      <CSSTransition in={isShown} timeout={1000} classNames="fade" unmountOnExit>
        <Animation display={display} animate={isShown} handleChange={handleChange} />
      </CSSTransition>
      
      {display && <NavBar />}

    </div>
  );
}

export default App
