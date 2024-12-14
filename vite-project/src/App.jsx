import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import background from "../assets/discord-background.png"; // Import the image file

function App() {

  const [count, setCount] = useState(0)

  return (
      <div className="App" style={{height: '100vh', width: '100vw', margin: 0, backgroundColor: 'royalblue' }}> 
        <h1 className='bigheader' style={{color: "white", position: 'relative', top: '100px', left: '1px'}}> IMAGINE A PLACE...</h1>
        <p className="textP" style={{color: "white", position: 'relative', top: '300px', left: '60px' }}>...where you can belong to a school club, a gaming group, or a worldwide art community. Whre just you and
          a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often. </p>
        <div className="back" style={{ position: 'absolute', bottom: 0, right: 0}}>
          <img src={background} alt="background" /> 
        </div>
      </div>



  )
}

export default App
