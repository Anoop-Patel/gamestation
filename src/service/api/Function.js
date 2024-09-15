import makeApiCall from "./BaseApi";
 const  BASE_URL  = "https://dummyjson.com/products";
 
 const fetchAllProduct = async () => {
   const url =`${BASE_URL}`;
   return await makeApiCall( url);
 }
 const fetchProductById = async (id) => {
   const url = `${BASE_URL}/${id}`;
   return await makeApiCall( url);
 }
 const fetchAllCategory = async () => {
   const url = `${BASE_URL}/categories`;
   return await makeApiCall( url);
 }
 const fetchProductByCategory = async (item) => {
   const url = `${BASE_URL}/category/${item}`;
   return await makeApiCall( url);
 }
   export {
   fetchAllProduct,
   fetchProductById,
   fetchAllCategory,
   fetchProductByCategory
   };