// https://mingmeng030.tistory.com/226

import { Link } from "react-router-dom";
import styles from './Nav.module.css'; 


function Nav(){     
  return (
    <div className={styles.nav}>     
      <ul className={styles.menu}>
        <li><Link to='/generate'>generate</Link></li>
        <li><Link to='/modify'>modify</Link></li>
        <li><Link to='/refine'>refine</Link></li>  
      </ul>
    </div>
  );     
}

export default Nav; 