import Login from './Components/login'
import Profile from './Components/profile'
import UserContextProvider from './Context/USerContextProvider'

function App() {
  return (
    <UserContextProvider>
      <h1> React with Chai and Share is Important </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
