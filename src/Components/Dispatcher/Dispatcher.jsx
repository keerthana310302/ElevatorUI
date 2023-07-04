import React,{useContext, useEffect} from 'react'
import DataContext from "../../Context/DataContext";

const Dispatcher = () => {

  const {
    current,setCurrent,
    destination,setDestination,
    floor,setFloor,
    isOpen,setIsOpen,
    toggle, setToggle,
    CFloor, setCFloor,
    DFloor, setDFloor
  } = useContext(DataContext);

  function check() {
    console.log(destination);
  }


  return (
    <div>
        <button onClick={check}>Check</button>
      
    </div>
  )
}

export default Dispatcher
