// paranet.tsx 이고 Nav가 children.tsx
// 부모 component에서  자식 component에 props 전달시 자식이 받게될 interface를 정의해야 한ㄷ
// https://limunosekai.github.io/typescript/2021/08/30/rts-day-01/
import Nav from '../components/Nav'
import styles from './App.module.css';



function App({children}:any){
    return (   
      <>
        <Nav className={styles.nav} />    
        <div className={styles.body}>{children}</div>    
      </>  
    );  
}

export default App; 