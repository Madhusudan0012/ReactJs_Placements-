 
import UserContextProvider from './Context/USerContextProvider'

function App() {
  return (
    <UserContextProvider>
      <h1> React with Chai and Share is Important </h1>
      <login/>
      <profile/>
    </UserContextProvider>
  )
}

export default App
