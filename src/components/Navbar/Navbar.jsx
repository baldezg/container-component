import { useState } from 'react';
import { SearchIcon } from '../../icons';
import { links } from '../../data/data';
import * as S from './NavbarStyles';


export const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
   
    return (
        <S.NavbarContainer>
            <S.Logo src="../../../public\logo.png" alt="Logo"/>
                <S.SearchArea isActive={isActive}>
                    <S.Input
                     type="text"
                     placeholder="Pesquisar"
                     aria-label="Pesquisar"
                     aria-describedby="basic-addon2"
                     onChange={(e) => setIsActive(e.target.value)}
                     onFocus={() => setIsActive(true)}
                     onBlur={() => setIsActive(false)}
                    >
                    </S.Input>
                    <S.Button>
                    <SearchIcon />
                    </S.Button>
                </S.SearchArea>
                <S.LinksList>
                    {links.map((link) => {
                        return(
                            <li key={link.url}>
                                <a href={link.url}>{link.text}</a>
                            </li>
                        )
                    })}
                </S.LinksList>
        </S.NavbarContainer>
    )
}
