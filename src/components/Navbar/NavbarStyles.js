import styled from 'styled-components';
import theme from '../../styles/theme';

export const NavbarContainer = styled.nav`
background-color: ${theme.colors.secondary};
padding: 1.1rem;
display: flex;
align-items: center;
`
export const Logo = styled.label`
margin-left: 4rem;
`
export const UlElement = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
width:100%;
`

export const SearchArea = styled.div`
height:3.5rem;
display: flex;
align-items: center;
width:30rem;
`
export const Input = styled.input`
background: linear-gradient(to bottom, #000000, #2f2f2f);
border: none;
border-radius: 10px 0 0 10px;
color:#fff;
font-size:1.3rem;
height:100%;
width: 100%;
`
export const Button = styled.button`
background: linear-gradient(to bottom, #000000, #2f2f2f);
border-radius: 0 10px 10px 0;
color: ${theme.colors.secondary};
cursor:pointer;
height:100%;
width:50px;
`
export const LinksList = styled.ul`
display: flex;
align-items: center;
justify-content: space-evenly;
width:25%;

li a {
    color: ${theme.colors.dark};
    font-size: 1.2rem;
}
`