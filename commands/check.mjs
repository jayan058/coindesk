import operation from './../lib/checkmanager.mjs'
const priceandcurrency = () => {
    operation.priceofcoin();
  };

  const percent_change = () => {
    operation.percent_change();
  };

  const checkidandsymbol = () => {
    operation.checkidandsymbol();
  };

  

  const rank = () => {
    operation.ranks();
  };

  const URL = (URL) => {
    console.log(URL);
  };








export default {priceandcurrency,percent_change,rank,checkidandsymbol};