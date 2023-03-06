import Button from "./Button";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';  
const ButtonGroup = styled.div`
  ${Button} {   
    margin: 10px;
}
`; 


function Nav(){     
  return (
    <ButtonGroup>
    <div className={styles.nav}>     
      <ul className={styles.menu}>
        <li><Link to='/generate'><h2>generate</h2></Link></li>
        <li><Link to='/modify'><h2>modify</h2></Link></li>
        <li><Link to='/refine'><h2>refine</h2></Link></li>       
          <Button round color>Contact us</Button>
          <Button round color>Join us</Button>           
      </ul>      
    </div>
    </ButtonGroup> 

  );     
}

export default Nav; 