import React, { useState, useEffect, useContext } from "react";
import "./Car.css";
import DataContext from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";

const Car = () => {
  const navigate = useNavigate();

  const {
    current,setCurrent,
    destination,setDestination,
    floor,setFloor,
    isOpen,setIsOpen,
    toggle, setToggle,
    CFloor, setCFloor,
    DFloor, setDFloor
  } = useContext(DataContext);



  const [direction, setDirection] = useState("");
  // const floor = [534,401,268,135,0]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => {
        if (prevCurrent === destination) {
          clearInterval(interval);
          
        }
        return prevCurrent < destination ? prevCurrent + 1 : prevCurrent - 1;
      });
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, [destination]);

  function change() {

    setTimeout(() => {
      setToggle(true);
      navigate("/");
    }, 2000);
  }

  useEffect(() => {

    if (current > 438) {
      setCFloor(floor)
      setFloor(0);
    } else if (current > 350) {
      setCFloor(floor)
      setFloor(1);
    } else if (current > 210) {
      setCFloor(floor)
      setFloor(2);
    } else if (current > 150) {
      setCFloor(floor)
      setFloor(3);
    } else {
      setCFloor(floor)
      setFloor(4);
    }
    if(current==destination)
    {
        change();
    }
  }, [current]);

  return (
    <div className="car-container">
      <div className="car" style={{ top: `${current}px` }}>{floor}</div>
    </div>
  );
};

export default Car;

//   useEffect(() => {
//     const floorInterval = setInterval(() => {
//       setFloor((prevFloor) => {
//         if (prevFloor === destination) {
//           clearInterval(floorInterval);
//         }
//         return prevFloor < destination ? prevFloor + 1 : prevFloor - 1;
//       });
//     }, 4000);

//     return () => {
//       clearInterval(floorInterval);
//     }
//   }, [destination]);
