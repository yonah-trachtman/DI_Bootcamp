
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './componants/Greeting'
import StateComponant from './componants/StateComponant'
import UserCard from './componants/UserCard'
import EffectHookComponant from './componants/EffectHookComponant'

function App() {


  return (
    <>
    <Greeting name='DI checker'/>
    <StateComponant/>
    <UserCard name='Garrard' age={27}/>
    <UserCard name='Squee'/>
    <UserCard/>
    <EffectHookComponant/>
    </>
  )
}

export default App
