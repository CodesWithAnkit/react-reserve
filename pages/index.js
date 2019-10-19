import React, { useEffect } from 'react';
import axios from 'axios';

function Home({ products }) {
  console.log(products);
  // useEffect(() => {
  //   getProducts();
  // }, []);

  // async function getProducts() {
  //   const url = 'http://localhost:3000/api/products';
  //   const response = await axios.get(url);
  //   console.log(response.data);
  // }
  return <>home</>;
}

Home.getInitialProps = async () => {
  // Fetch data on server
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);
  return { products: response.data };
  // return response data as aa object
  // note: this obeject will merge with the exixting props
};
export default Home;
