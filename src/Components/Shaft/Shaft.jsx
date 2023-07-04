import React from 'react';
import "./Shaft.css"
import Car from '../Car/Car';
import Controls from '../Controls/Controls';

const Shaft = () => {

  return (
    <>
        <div className='shaft-main'>
            <div className='floor'>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
            </div>
            <Car/>
        </div>
        {/* <Controls/> */}
    </>
  )
}

export default Shaft
