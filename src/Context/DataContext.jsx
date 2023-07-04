import axios from 'axios';
import React, {useState, createContext, useEffect  } from 'react'

const DataContext =   createContext({});

export const DataProvider = ({children}) => {

    const [current, setCurrent] = useState(10);
    const [destination, setDestination] = useState(448);
    const [floor,setFloor] = useState(4);
    const [isOpen, setIsOpen] = useState(false);
    const [toggle, setToggle] =  useState(false);
    const [person, setPerson] = useState(0);
    const [CFloor, setCFloor] = useState(0);
    const [DFloor, setDFloor] = useState(0);

    useEffect(()=>{
        axios.get('https://localhost:7005/api/Transaction').then((response) => {
         console.log(response.data);
      });
    },[])

    function postTransaction() {

    //     axios.post('https://localhost:7005/api/Transaction', {
    //         currentFloor:current,
    //         destinationFloor:floor,
    //         personCount:person
    //     }).then((response) => {
    //      console.log(response.data);
    //   });
    var d;

    if (destination > 448) {
        d = 4;
      } else if (destination > 350) {
        d = 3;
        
      } else if (destination > 210) {
        d = 2;
        
      } else if (destination > 130) {
        d = 1;
        
      } else {
        d = 0;
      }
        console.log(CFloor, d);
    }

    function test() {
        console.log(destination);
      }


    return (
        <DataContext.Provider value={{
            current, setCurrent, 
            destination, setDestination,
            floor,setFloor,
            isOpen,setIsOpen,
            toggle, setToggle,
            person, setPerson,
            CFloor,setCFloor,
            DFloor, setDFloor,
            postTransaction,test

        }}>{children}</DataContext.Provider>
      )
}

export default DataContext;