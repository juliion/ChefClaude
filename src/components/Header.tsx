import styled from "styled-components";
import chefIcon from "../assets/ChefClaudeIcon.png";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  padding: 24px 16px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
`;

const HeaderIcon = styled.img`
  width: 43px;
  height: 52px;
`;

const HeaderText = styled.h1`
  font-size: 32px;
  font-weight: 400;
  color: rgba(20, 20, 19, 1);
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderIcon src={chefIcon}></HeaderIcon>
      <HeaderText>Chef Claude</HeaderText>
    </HeaderContainer>
  );
}

export default Header;
