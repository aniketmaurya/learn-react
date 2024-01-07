import './App.css'
import Card from './components/Cards'

function App() {

  let myObj = {
    name: "Aniket",
    org: "Gradsflow"
  }

  return (
    <>
      <h1 className="bg-violet-800 text-black p-4 rounded-xl mb-4">Tailwind test</h1>
      <Card className="mb-4" username="chai-aur-code" btnText="Click me!"/>
      <Card className="mb-4" username="AI with Aniket" />

    </>
  )
}

export default App
