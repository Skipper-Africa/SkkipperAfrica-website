import { Route, Routes } from 'react-router-dom'
import Skipper from './comp/Skipper'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Skipper/>}></Route>
    </Routes>
  )
}

export default App
