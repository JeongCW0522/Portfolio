import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: black;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <>
        <>
          <Link href="/introduction">Home</Link>
          <Link href="/project">Skills</Link>
          <Link href="/career">Projects</Link>
          <Link href="/contest">Experience</Link>
          <Link href="/contest">Strengths</Link>
          <Link href="/contest">Contact</Link>
        </>
      </>
    </HeaderContainer>
  );
};

export default Header;
