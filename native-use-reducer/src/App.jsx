import { useReducer } from 'react'


function UserForm(){
  const [state, dispatch] = useReducer((state, action) => ({
    ...state,
    ...action
  }),{
    firstName: '',
    lastName: '',
    
  });
  return (
    <div>
      <input 
       type="text"
       value={state.firstName}
       onChange={(e)=> dispatch({firstName: e.target.value})}
       ></input>
       <input
        type="text"
        value={state.lastName}
        onChange={(e)=> dispatch({lastName: e.target.value})}
        ></input>
      <div>FirstName: {state.firstName}</div>
      <div>FirstName: {state.lastName}</div>
    </div>
    
  );
}


function NameList() {
const [state, dispatch] = useReducer(
  (state, action) => {
    switch (action.type) {
      case "SET_NAME":
        console.log("1. action",action)
        console.log("1. state",state)
        return {...state, name: action.payload};
      case "ADD_NAME":{
        console.log("2. action",action)
        console.log("2. state",state)
        return {
          ...state,
          names: [...state.names, state.name],
          name:''
        }
      }
    }},
    { names: [], name: ""}
)


return (
  <div className="App">
    <div>
      {state.names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
    </div>
    <input
      type="text"
      value={state.name}
      onChange={(e) =>
       { dispatch({ type: "SET_NAME", payload: e.target.value })
       // we can use any key as reference. We can see here we have used 'type' and 'payload' as keys which can be anything but it is a conventional practice
        console.log("onchange - ",e)}
      }
    />
    <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>
  </div>
);
}


function App(){
  return (
    <div>
      <NameList />
      <UserForm />
    </div>

  );
}

export default App;

