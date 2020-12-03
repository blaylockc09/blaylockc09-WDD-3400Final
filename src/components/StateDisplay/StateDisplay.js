import React from "react";
import "./StateDisplay.scss";
import states from "../../states";
import moment from "moment";
import NumberFormat from 'react-number-format';


const StateDisplay = ({ stateData }) => {
  return (
    <div className="StateDisplay">
      <h1>{states[stateData.state]} COVID-19 Data</h1>
      <p className="last-updated">
        <span>Data last updated: </span>
        {moment(stateData.dateModified).format("MMMM Do YYYY, h:mm:ss a")}
      </p>
      <p className="total-tested">
        <span>Total Tested: </span>
        <NumberFormat value= {stateData.totalTestResults} displayType={'text'} thousandSeparator={true}/>  
       
      </p>
      <p className="total-positive">
        <span>Positive Tests</span>
        <NumberFormat value= {stateData.positive} displayType={'text'} thousandSeparator={true}/>  
        
      </p>
      <p className="total-negative">
        <span>Negative Tests</span>
        <NumberFormat value= {stateData.negative} displayType={'text'} thousandSeparator={true}/>  
        
      </p>
      <p className="total-hospitalized">
        <span>Currently Hospitalized: </span>
        <NumberFormat value= {stateData.hospitalizedCurrently || "No Data"} displayType={'text'} thousandSeparator={true}/>  
        
      </p>
      <p className="total-recovered">
        <span>Recovered: </span>
        <NumberFormat value= {stateData.recovered || "No Data"} displayType={'text'} thousandSeparator={true}/>  
        
      </p>
      <p className="total-deaths">
        <span>Total Deaths: </span>
        <NumberFormat value= {stateData.death} displayType={'text'} thousandSeparator={true}/>  
        
      </p>
      <p className="total-icu">
        <span>In ICU </span>
        <NumberFormat value= {stateData.inIcuCurrently || "No Data"} displayType={'text'} thousandSeparator={true}/>  
        
      </p>
    </div>
  );
};

export default StateDisplay;
