import styled, { css } from 'styled-components'; 
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  padding: 0px;
  color: #ffffff; 
  background-color: #202023;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), @ 1px 2px rgba(0, 0, 0, 0.06);
`;

export const StyledBody = styled.div`
align-items: center;
justify-content: center;
background-color: #2f8bfd;
width: 100%;
height: 90vh;
`;
export const NavItemLink = styled(Link)`
color: inherit;
width: 100px;
height: 20px;
text-decoration: none;
margin-right: 10px;
${props => props.fill && css`
padding: 8px 16px;
border-radius: 4px;
background-color: #2f8bfd;
transition: background-color 0.25;
&:hover { background-color: #0072ff; }
`};
`;