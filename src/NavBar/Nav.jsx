import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=>navigate("/")}>Home</button>
        <button onClick={()=>navigate("/transactions")}>Trans</button>
      
    </div>
  )
}

export default Nav
