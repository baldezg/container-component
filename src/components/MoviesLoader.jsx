import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from './Card/Card'
import styled from "styled-components";

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
export const MoviesLoader = ({ 
  resourceUrl,
  posterPath,
}) => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        (async () => {
          const response = await axios(resourceUrl);
          setMovies(response.data.results)
          console.log(response.data)
        })();
      }, [resourceUrl]);

      return (
        <>
         {movies && (
            <MovieList>
                {movies.map((movie) => (
                  <Card key={movie.id} title={movie.title} poster_path={posterPath+movie.poster_path} />
                ))}
            </MovieList>
            )}
        </>
      );
    };