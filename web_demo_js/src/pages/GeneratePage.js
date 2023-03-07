// import PromptForm from "../components/PromptForm";
import Input from "../components/Input";
import styled from "styled-components";
import Button from "../components/Button";
import DropDown from "../components/Dropdown";
import { useState } from "react";

// component이름은 항상 capital로 하기!!!
const Layout = styled.div`
  display: flex;
  justify-cotent: center;
  text-align: center;
`;

function GeneratePage() {
  const [selected, setSelected] = useState("Theme");
  // const menuTitle = "Theme";
  // const MenuTitle = ["Theme", "style group1", "style group2", "style group3"];
  const MenuTitle = {
    Theme: ["theme1", "theme2", "theme3"],
    "style group1": ["group1_1", "group1_2", "group1_3"],
    "style group2": ["group2_1", "group2_2", "group2_3"],
    "style group3": ["group3_1", "group3_2", "group3_3"],
  };
  let keys = Object.keys(MenuTitle);
  // console.log(MenuTitle[keys[1]]);
  console.log(MenuTitle[keys[2]]);

  return (
    <>
      <div>
        <Input round></Input> <Button round>RUN</Button>
      </div>
      <h1>generatepage페이지</h1>
      <Layout>
        <DropDown
          selected={selected}
          setSelected={setSelected}
          MenuTitle={keys[0]}
          options={MenuTitle[keys[0]]}
        ></DropDown>
        <DropDown
          selected={selected}
          setSelected={setSelected}
          MenuTitle={keys[1]}
          options={MenuTitle[keys[1]]}
        ></DropDown>
        <DropDown
          selected={selected}
          setSelected={setSelected}
          MenuTitle={keys[2]}
          options={MenuTitle[keys[2]]}
        ></DropDown>
        <DropDown
          selected={selected}
          setSelected={setSelected}
          MenuTitle={keys[3]}
          options={MenuTitle[keys[3]]}
        ></DropDown>
      </Layout>
    </>
  );
}
export default GeneratePage;
