// import { Box, Heading, Stack, Tag, TagLabel } from "@chakra-ui/react";
import React from "react";
import style from "../pagination.module.css"
const Product = ({elem}) => {
console.log(elem)
  return (
  <div className={style.grid}>
      <div key ={elem.id}>
    
      <h2 data-cy="product-title">{elem.title}</h2>
  
    </div>
  </div>
  );
};

export default Product;
