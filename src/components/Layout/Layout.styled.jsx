import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Main =styled.div`
// max-width: 960px;
margin: 0 auto;
padding: 0 16px;
`

export const Header = styled.header`
margin-bottom: 16px;
padding: 16px;
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Nav = styled.nav`
display:flex;
gap: 8px;
`;

export const Link = styled(NavLink)`
padding:  8px 8px;
text-decoration: none;
font-weight: 500;
color: black;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&.active
{
    color: rgb(255, 0, 111);
};

&:hover, focus{
    color:rgb(196, 185, 185);
}
`;