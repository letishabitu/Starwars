import React from "react";

function Score (props) {
    const test = props.arrayOfScoreDate;
    console.log(test);
    const scoreDateJSX= test.map(scoreDate => {
      
        return (
          <div>
            <li>
             <h3> Score and Date</h3>
            <h3>{scoreDate.score}</h3>
            <h3>{scoreDate.date}</h3>
            </li>
          </div>
        )
      })

    return (
  
        <div>
          
          <h2> student score and date goes here</h2>
          <ul>
          <h3>{scoreDateJSX}</h3>
          </ul>     
          </div>
  
    )
  }
  
  export default Score;