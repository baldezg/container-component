import styled from 'styled-components';
import theme from '../../styles/theme';

export const NavbarContainer = styled.nav`
background-color: ${theme.colors.tangerine};
padding: 1.1rem 0 1.1rem 1.1rem;
display: flex;
align-items: center;
`
export const Logo = styled.img`
padding:0 4rem;
`

export const SearchArea = styled.div`
display: flex;
flex: 1;
border-radius: 40px;

${props =>
    props.isActive &&
    `
    box-shadow: 0 0 10px #1f271b;
    transition: box-shadow 0.3s ease-in-out;

  `}
`
export const Input = styled.input`
background: linear-gradient(to bottom, #141414, #2f2f2f);
border: none;
border-radius: 40px 0 0 40px;
color:#fff;
font-size:1.1rem;
flex:1;
padding:1rem;

&:focus {
    outline: none;
}
`
export const Button = styled.button`
background: linear-gradient(to bottom, #141414, #2f2f2f);
border-radius: 0 40px 40px 0;
color: ${theme.colors.tangerine};
cursor:pointer;
width:3rem;
padding-right:1rem;
border:none;
`
export const LinksList = styled.ul`
display: flex;
gap: 1rem;
padding: 1rem;
li a {
    color: ${theme.colors.dark};
    font-size: 1.2rem;

    &:hover {
        background-color: ${theme.colors.dark};
        border-radius: 10px 10px 0 0;
        color:#fff;
        padding:.5rem;
        padding-bottom:100%;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        
    }
}

`