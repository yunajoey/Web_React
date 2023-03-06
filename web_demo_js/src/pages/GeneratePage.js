import PromptForm from '../components/PromptForm';
import Input from '../components/Input'; 
import styled from 'styled-components';
import Button from '../components/Button'; 



function GeneratePage() {  
  return(
    <>
      <div>           
        <Input round></Input> <Button round>RUN</Button>
        {/* <Button round color >Run</Button>    */}
      </div>            
      <h1>generatepage페이지</h1> 
    </>
 
  );
}
export default GeneratePage; 