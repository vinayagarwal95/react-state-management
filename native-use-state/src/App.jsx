import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(10)

  function addOne(){
    setCount(count+1)
  }
  return (
    <div className='App'>
      <button onClick={addOne}>Count = {count} </button>
    </div>
  )
}

function NameList(){
  const [list,setList] = useState(["Rhotiha","Sakshi","Ankita","Neha"])
  // let name = ''
  const [name, setName] = useState('')

  function addName  () {
    // list.push(name);
    setList([...list,name])
    setName("")
  }

  return (
    <div>
      <ul>
        {list.map((name)=> (<li key={name}>{name}</li>))}</ul>
      <input
      type = "text"
      value={name}
      onChange={(e) => setName(e.target.value)} />
      <button onClick={addName}>Add Name</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
      <NameList />
    </div>
  )
}

export default App
