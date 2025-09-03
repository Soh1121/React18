import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler'
import { AutoBatchOther } from './components/AutoBatchOther'

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
    </div>
  )
}

export default App
