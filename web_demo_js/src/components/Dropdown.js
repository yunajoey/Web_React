import styled from "styled-components";
import { useState } from "react";

const DropdownTemplate = styled.div`
  width: 200px;
  margin-left: 80px;
`;

const DropdownButtonTemplate = styled.div`
  padding: 15px 20px;
  background: #606060;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// .dropdown .dropdown-btn {
//   padding: 15px 20px;
//   background: withTheme;
//   box-shadow: 3px 3px 10px 6px
//   font-weight: getByPlaceholderText;
//   color: black;
//   display: flex;
//   align-items: center
//   justify-content: space-between;
// }
function Dropdown({ selected, setSelected, MenuTitle, options }) {
  const [isActive, setIsActive] = useState(false);
  // const options = ["option1", "option2", "option3"];

  return (
    <DropdownTemplate>
      <div className="dropdown">
        <DropdownButtonTemplate>
          <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            {MenuTitle}
            <span className="fas fa-caret-down"></span>
          </div>
        </DropdownButtonTemplate>
        <contentTemplate>
          {isActive && (
            <div className="dropdown-content">
              {options.map((option) => (
                <div
                  onClick={(e) => {
                    setSelected(option);
                    setIsActive(false);
                  }}
                  className="dropdown-item"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </contentTemplate>
      </div>
    </DropdownTemplate>
  );
}

export default Dropdown;
