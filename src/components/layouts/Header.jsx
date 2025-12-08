import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #0e011d;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 80%;
  max-width: 90%;
`;

const Logo = styled.h2`
  background: linear-gradient(to right, #8b5cf6, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Nav = styled.div`
  display: flex;
  gap: 20px;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  padding: 8px 16px;
  color: ${(props) => (props.$active ? "white" : "#9a9898")};
  background: ${(props) =>
    props.$active
      ? "linear-gradient(to right, #8b5cf6, #3b82f6)"
      : "transparent"};
  border-radius: 24px;
  font-weight: 600;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    color: white;
    transform: scale(1.07);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo>MyPortfolio</Logo>
        <Nav>
          <LinkButton to="/" $active={location.pathname === "/"}>
            Home
          </LinkButton>
          <LinkButton
            to="/tachStack"
            $active={location.pathname === "/tachStack"}
          >
            Skills
          </LinkButton>
          <LinkButton to="/project" $active={location.pathname === "/project"}>
            Projects
          </LinkButton>
          <LinkButton
            to="/experience"
            $active={location.pathname === "/experience"}
          >
            Experience
          </LinkButton>
          <LinkButton
            to="/strengths"
            $active={location.pathname === "/strengths"}
          >
            Strengths
          </LinkButton>
          <LinkButton to="/contact" $active={location.pathname === "/contact"}>
            Contact
          </LinkButton>
        </Nav>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
