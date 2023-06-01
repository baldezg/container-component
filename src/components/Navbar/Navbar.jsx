import { SearchIcon } from '../../icons';
import { links } from '../../data/data';
import * as S from './NavbarStyles';


export const Navbar = () => {
   
    return (
        <S.NavbarContainer>
            <S.Logo src="../../../public\logo.png" alt="Logo"/>
                <S.SearchArea>
                    <S.Input></S.Input>
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
