import React from 'react'; 
import App from './components/App'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import GeneratePage  from "./pages/GeneratePage";
import { ModifyPage } from "./pages/ModifyPage";
import { RefinePage } from "./pages/RefinePage";  
const Main = () => {
  return (
    <>
      <BrowserRouter>   
        <App>
          <Routes>
            <Route path='generate' element={<GeneratePage/>} />
            <Route path='modify' element={<ModifyPage />} />
            <Route path='refine' element={<RefinePage />} />           
          </Routes> 
        </App>    
      </BrowserRouter>  
    </>
  );
}  
export default Main;
