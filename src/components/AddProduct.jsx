import React from "react";

const AddProduct = ({data,setData,trig,setTrig}) => {

  let [visibleForm,setVisibleForm]=React.useState(false)
  let [formdata,setFormdata]=React.useState({title:"",category:"",gender:"",price:""})
  let productsHandle=({data,setData,trig,setTrig})=>{
    setVisibleForm(!visibleForm)
  }
  let productsHandleChange=(e)=>{
      setFormdata({...formdata,
        [e.target.name]:e.target.value
      })}
  let handlesubmit=(e)=>{
    e.preventDefault()
    if(

    formdata.title !== "")
    {
      
      fetch(`  http://localhost:8080/products`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formdata)}).then((resp)=>(resp.json())).then((resp)=>{
          setData([...data,resp])
          setTrig(!trig)
        })
    }
    else{
      alert("empty")
    }
    setVisibleForm(!visibleForm)
  
  }

  return (
    
    <>
<button onClick={productsHandle} >Add Your Todos</button>
      { visibleForm ? <div>
              <form onSubmit={handlesubmit}>
        
        <input onChange={productsHandleChange} name="title" value={formdata.title} placeholder="Write tour todos"  />
     

        
        <button >Save</button>
      
    </form>
      </div>: <></>
      }
    </>
  );
};

export default AddProduct;
