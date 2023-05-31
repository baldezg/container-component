import { SearchIcon } from '../../icons';
import { links } from '../../data/data';
import * as S from './NavbarStyles';


export const Navbar = () => {
   
    return (
        <S.NavbarContainer>
            <S.UlElement>
                <li>
                    <S.Logo>LOGO</S.Logo></li>  
                <li>
                <S.SearchArea>
                    <S.Input></S.Input>
                    <S.Button>
                    <SearchIcon />
                    </S.Button>
                </S.SearchArea>
                </li>
                <S.LinksList>
                    {links.map((link) => {
                        return(
                            <li key={link.url}>
                                <a href={link.url}>{link.text}</a>
                            </li>
                        )
                    })}
                </S.LinksList>

            </S.UlElement>
        </S.NavbarContainer>
    )
}
