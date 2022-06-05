import React from "react";
import AddProduct from "./AddProduct"
import Product from "./Product"
import {Pagination} from "./Pagination";


const Products = ({data,setData,checked,setChecked,page,setPage,limit,setLimit,totalpage,Ondelete}) => {

  return (
    <>
   <AddProduct  checked={checked} setChecked={setChecked} data={data} setData={setData}/>
   <div >{
       data.map((elem)=>(
         <div>
           
             <Product elem={elem}/>
             <button style={{color:"white",border:"none",backgroundColor: "red",borderRadius:15}} onClick={()=>Ondelete(elem.id)}>🗑️</button>
         </div>
         
       ))
       }
  </div>
     {/* Pagination */}
     <Pagination totalpage={totalpage} checked={checked} setChecked={setChecked} page={page} setPage={setPage} limit={limit} setLimit={ setLimit}/>
  </>
     
 
  );
};

export default Products;
