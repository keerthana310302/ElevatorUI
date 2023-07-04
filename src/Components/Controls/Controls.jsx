import React,{useContext, useEffect} from 'react'
import "./Controls.css";
import DataContext from '../../Context/DataContext';
import { useNavigate } from 'react-router-dom';
const Controls = () => {

  const {setDestination, setIsOpen, person, setPerson, postTransaction, floor, setCFloor, setDFloor, test} = useContext(DataContext);
  const navigate = useNavigate();

  function change() {
    postTransaction();
    setTimeout(() => {
      navigate("/movement");
    }, 4000);
  }



  useEffect(()=>{
    if(person>5)
    {
      alert("over Load")
    }
    
  },[person])

  const handleClick=(v, f)=>{
    setDestination(v);
    setDFloor(f);
    // setCFloor();

    
    setIsOpen(false)

    change();
  }

  return (
    <div className='main-controller'>
      <div className='person-count'>
         <div className='person' onClick={()=>setPerson(person-1)}> - </div>
         <div className='count'>{person}</div>
         <div className='person' onClick={()=>setPerson(person+1)}> + </div>
         <button onClick={test}>test</button>
      </div>
      <div className='control-container'>
          <button onClick={() => handleClick(458, 0)}>0</button>
          <button onClick={() => handleClick(346, 1)}>1</button>
          <button onClick={() => handleClick(230, 2)}>2</button>
          <button onClick={() => handleClick(121, 3)}>3</button>
          <button onClick={() => handleClick(10, 4)}>4</button>
      </div>
    </div>
    
  )
}

export default Controls


const FloorValue ={
  458:4,
  346:3,
  230:2,
  121:1,
  10:0
}