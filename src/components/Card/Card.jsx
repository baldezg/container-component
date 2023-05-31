import * as S from './CardStyles';

import { urls } from '../../../config/apiKey';
import { FavIcon } from '../../icons';

export const MovieInfo = ({movie}) =>{
    const { title, poster_path, vote_average } = movie;
    return (

      <S.CardContainer>
        <S.Content>
          <S.Front>
              <S.FrontContent>
              <S.Poster src={urls.posterBaseUrl+poster_path}/>
              </S.FrontContent>
          </S.Front>

     <S.Back>
      <S.Image>
        <S.Circle></S.Circle>
        <S.RightCircle></S.RightCircle>
        <S.BottomCircle></S.BottomCircle>
      </S.Image>
      <S.BackContent>
        <S.Badge>
          <FavIcon />
        </S.Badge>
        <S.Description>
          <S.CardTitle>
            <S.Title>
              <strong>{title}</strong>
            </S.Title>
          </S.CardTitle>
          <S.CardFooter>{vote_average
} &nbsp; | &nbsp; 1 Serving</S.CardFooter>
        </S.Description>
      </S.BackContent>
      </S.Back>
        </S.Content>
      </S.CardContainer>
    )
}