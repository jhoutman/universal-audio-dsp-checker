import React from "react";
import styled from "styled-components";
import UALogo from "./UALogo";

const Header = () => (
  <HeaderBar>
    <LogoBar>
      <UALogo style={{ fill: "white", height: "4rem", width: "auto" }} />
      <h1 style={{ marginTop: '1rem', fontSize: "1.4rem" }}>Universal Audio Plugin Instance checker</h1>
    </LogoBar>
  </HeaderBar>
);

const HeaderBar = styled.header`
  background: black;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 1rem;
  color: white;
`;

const LogoBar = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export default Header;
