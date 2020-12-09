import React from "react";
import "./AmericaDisplay.scss";
import NumberFormat from 'react-number-format';


const AmericaDisplay = ({ data }) => {

  
  return (
    // display the data on the front page
    <div className="AmericaDisplay">
      <h1>Nationwide COVID-19 Data</h1>
      {data ? (
        <div>
          <p>
            <label>Total Test Results:</label>
            {/* The numberFormat will show commas in the number */}
            <NumberFormat value={data.totalTestResults} displayType={'text'} thousandSeparator={true}/>         
          </p>
          <p>
            <label>Total Positive:</label>
               {/* The numberFormat will show commas in the number */}
            <NumberFormat value={data.positive} displayType={'text'} thousandSeparator={true}/>           
          </p>
          <p>
            <label>Total Negative:</label>
               {/* The numberFormat will show commas in the number */}
            <NumberFormat value={data.negative} displayType={'text'} thousandSeparator={true}/>            
          </p>
          <p>
            <label>Total Hospitalized:</label>
               {/* The numberFormat will show commas in the number */}
            <NumberFormat value={data.hospitalized} displayType={'text'} thousandSeparator={true}/>            
          </p>
          <p>
            <label>Total Deaths:</label>
               {/* The numberFormat will show commas in the number */}
            <NumberFormat value= {data.death} displayType={'text'} thousandSeparator={true} />           
          </p>
          <p>

       {/*    <form>
              <div className="radio">
                <label>
                  <input type="radio" value="yes" checked={true} />
                  Yes
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="no" />
                  No
                </label>
              </div>
         </form> */}
            
          </p>
         
        </div>
      ) : (
        /* Display error if the data cannot be shown */
        <h1>Unable to get COVID-19 data.</h1>
      )}


      
    </div>
  );
};

export default AmericaDisplay;
