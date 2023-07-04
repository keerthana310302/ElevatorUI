import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Transactions.css";

const Transactions = () => {

    const[transaction, setTransaction] = useState([]);

    useEffect(()=>{
        axios.get('https://localhost:7005/api/Transaction').then((response) => {
            setTransaction(response.data);
            console.log(response.data);
      });

    },[])

  return (
    <table>
        <tr>
            <th>Current Floor</th>
            <th>Destination Floor</th>
            <th>Person Count</th>
            <th>Person Weight</th>
            <th>Time</th>
        </tr>
        {
            transaction.map((trs)=> {
                return(
                    <tr key={trs.id}>
                        <td>{trs.currentFloor}</td>
                        <td>{trs.destinationFloor}</td>
                        <td>{trs.personCount}</td>
                        <td>{trs.personWeight}</td>
                        <td>{trs.dateTime}</td>
                    </tr>
                )
            })
        }
        
     </table>
  )
}

export default Transactions
