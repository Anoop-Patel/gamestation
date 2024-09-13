import axios from "axios";
 
 const makeApiCall = async ( url) => {
  
   try {
     let result = await axios.get(url);
     return result;
   } catch (err) {
     console.log(err,"Api callerror")
   }
 };
 
 export default makeApiCall;