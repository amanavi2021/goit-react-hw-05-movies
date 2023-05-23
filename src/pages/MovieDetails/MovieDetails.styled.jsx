import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

export const BackLink = styled(Link)`
border: 1px solid black;
padding: 5px 10px;
text-decoration: none;
border-radius: 10px;
display: flex;
width: 90px;
color: black;
margin-bottom: 16px;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover, focus{
    color:rgb(196, 185, 185);
}

`;

export const MovieCard = styled.div`
display:flex;
`;

export const MovieImage = styled.img`
border-radius: 10px;
`;

export const MovieInfo = styled.div`
padding-left: 16px;
display:flex;
flex-direction: column;
gap: 16px;
`;


export const InfoLink = styled(NavLink)`
// padding:  8px 8px;
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

export const MovieNav = styled.ul`
list-style-type: none;
display: flex;
flex-direction: column;
gap: 8px;

`;
