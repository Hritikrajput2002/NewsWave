import React  from 'react'
import loading from './spinner.gif'

const Spinner=()=>{
    return (
      <div>
           <img src={loading} alt="loading" style={{width:"50px"}}></img>
      </div>
    )
  }
  export default Spinner;

