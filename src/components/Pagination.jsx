
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
const Pagination = ({page,setPage,checked,setChecked,totalpage,limit,setLimit}) => {


  return (
    <div  >
    <ButtonGroup>
      <Button 
       disabled={page <=1}
       onClick={()=>{
           setPage(1);
           setChecked(!checked)
       }}
      >First</Button>

      <Button 
       disabled={page <=1}
       onClick={()=>{
         if(page > 1){
           setPage(page - 1);
         }
       }}>Prev</Button>

      <Select   onChange={(e) => setLimit(Number(e.target.value))}>
        <option value={3}>3</option>
        <option value={6}>6</option>
        <option value={9}>9</option>
      </Select>

      <Button data-cy="pagination-next-button" 
      disabled={totalpage < (page) * limit}
           onClick={()=>{setPage(page + 1) 
           }}>Next</Button>

      <Button data-cy="pagination-last-button"
       disabled={page <=1}
       onClick={()=>{
        setPage(Math.ceil(totalpage/limit)
  )}}>Last</Button>
    </ButtonGroup>
    
    </div>
  );
  
};

export {Pagination} ;
