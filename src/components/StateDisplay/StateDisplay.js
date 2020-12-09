import React from "react";
import "./StateDisplay.scss";
import states from "../../states";

import NumberFormat from 'react-number-format';


const StateDisplay = ({ stateData }) => {
  /* return the state data and display on the modal */
  return (
    <div className="StateDisplay">
      <h1>{states[stateData.state]} COVID-19 Data</h1>
      <p className="total-tested">
        <span>Total Tested: </span>
         {/* The numberFormat will show commas in the number */}
        <NumberFormat value= {stateData.totalTestResults} displayType={'text'} thousandSeparator={true}/>  
       
      </p>
      <p className="total-positive">
        <span>Positive Tests</span>
         {/* The numberFormat will show commas in the number */}
        <NumberFormat value= {stateData.positive} displayType={'text'} thousandSeparator={true}/>  
        
      </p>
      <p className="total-negative">
        <span>Negative Tests</span>
         {/* The numberFormat will show commas in the number */}
        <NumberFormat value= {stateData.negative} displayType={'text'} thousandSeparator={true}/>  
        
      </p>
      <p className="total-hospitalized">
        <span>Currently Hospitalized: </span>
         {/* The numberFormat will show commas in the number */}
        <NumberFormat value= {stateData.hospitalizedCurrently || "No Data"} displayType={'text'} thousandSeparator={true}/>  
        
      </p>
      <p className="total-recovered">
        <span>Recovered: </span>
         {/* The numberFormat will show commas in the number */}
        <NumberFormat value= {stateData.recovered || "No Data"} displayType={'text'} thousandSeparator={true}/>  
        
      </p>
      <p className="total-deaths">
        <span>Total Deaths: </span>
         {/* The numberFormat will show commas in the number */}
        <NumberFormat value= {stateData.death} displayType={'text'} thousandSeparator={true}/>  
        
      </p>
    </div>
  );
};

export default StateDisplay;
