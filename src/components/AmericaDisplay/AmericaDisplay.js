import React from "react";
import "./AmericaDisplay.scss";
import NumberFormat from 'react-number-format';
import ReactTooltip from 'react-tooltip';

const AmericaDisplay = ({ data }) => {
  return (
    <div className="AmericaDisplay">
      <h1>Nationwide COVID-19 Data</h1>
      {data ? (
        <div>
          <p>
            <label class="leftSide">Total Test Results:</label>
            <NumberFormat value={data.totalTestResults} displayType={'text'} thousandSeparator={true}/>         
          </p>
          <p>
            <label class="leftSide">Total Positive:</label>
            <NumberFormat value={data.positive} displayType={'text'} thousandSeparator={true}/>           
          </p>
          <p>
            <label>Total Negative:</label>
            <NumberFormat value={data.negative} displayType={'text'} thousandSeparator={true}/>            
          </p>
          <p>
            <label class="rightSide">Total Hospitalized:</label>
            <NumberFormat value={data.hospitalized} displayType={'text'} thousandSeparator={true}/>            
          </p>
          <p>
            <label class="rightSide">Total Deaths:</label>
            <NumberFormat value= {data.death} displayType={'text'} thousandSeparator={true} />           
          </p>
          <p data-tip="hello world">Tooltip</p>
        </div>
      ) : (
        <h1>Unable to get COVID-19 data.</h1>
      )}
    </div>
  );
};

export default AmericaDisplay;
