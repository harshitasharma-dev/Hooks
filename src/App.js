import React, {useState} from 'react';
import './App.css';

function App() {

  // people and finalPeopleList is a state variable and useState is a hook. 
  // To understand this more, you can refer Hook repository
  const [people, setFields] = useState([{name:""}])
  const [finalPeopleList, setPeople] = useState([{name:null}])

  //this function will be called whenever you will click on "Click to Add" button.
  //In this, first I am creating a new array assigning it the previous "people" array value 
  //and then pushing the new value to it and then again passing it to people array
  function addingParamter(){
    const newValue = [...people]
    newValue.push({name:null})
    setFields(newValue)
  }
  
 useEffect(()=>{
    document.title=`Count ${count}`
  },[count])

  //this function is just to capture the event target value, which user is entering it
  //and then passing it to particular key of people object
  function settingValue(index, event){
    const newValue = [...people]
    newValue[index].name = event.target.value
    setFields(newValue)
  }


  //this function is to particularly remove that object belonging to index from people array
  function removeParameter(index){
    if (index>0) {
      const newValue = [...people]
      newValue.splice(index, 1)
      setFields(newValue)
    }
    //this alert will come if user will try to remove all the values
    else{
      alert("Sorry! you can not remove it. Minimum one field required to submit.")
    }
  }

  function submitList (){
    setPeople(people)
  }

  return (
    <div className="App">
      <h1>DEMONSTRATION OF DYNAMIC FORM</h1>
      <button onClick={()=>addingParamter()}>Click to Add</button>
      {people.map((value, index)=>{
        return(
          <div>
            <input
              type="text"
              placeholder="Enter First Name"
              value={value.name || ""}
              onChange= {event => settingValue(index, event)}
            />
            <button onClick={()=>removeParameter(index)}>
              X
            </button>
            {/* <h3>{value.name}</h3> */}
          </div>
        )
      })}
      <button onClick={()=>submitList()}>SUBMIT</button>


      {finalPeopleList.map((value, index)=>{
        return(
          <div>
            {value.name}
          </div>
        )
      })
      }
    </div>
  );
}

export default App;
