/* Get the api data STATE DATA*/

export const getCovidStatesData = () => {
  return fetch("https://api.covidtracking.com/v1/states/current.json")
    .then((res) => res.json())
    .catch(() => {
      throw "Unable to fetch COVID-19 data.";
    });
};


/* Get the api data  ALL DATA*/
export const getCovidUSData = () => {
  return fetch("https://api.covidtracking.com/v1/us/current.json")
    .then((res) => res.json())
    .then((data) => data[0])
    .catch(() => {
      throw "Unable to fetch COVID-19 data.";
    });
};
