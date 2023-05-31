import {useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton  from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const StyledSkeleton = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;

> * {
  margin: 20px;
}
`;
export const DataLoader = ({
    resourceName,
    itemComponent: ItemComponent,
    resourceUrl,
    containerStyle
}) => {
    const [items, setItems] = useState(null);
    const Container = containerStyle;

    useEffect(() => {
        (async () => {
          const response = await axios(resourceUrl);
          setItems(response.data.results)
          console.log(response.data)
        })();
      }, [resourceUrl]);

    return (
        <Container>
        {items === null && (
          <StyledSkeleton>
            <Skeleton count={3} style={{ margin: '20px' }} height={254} width={190} color="#333333" highlightColor='#555555'  />
            <Skeleton count={3} style={{ margin: '20px' }} height={254} width={190} color="#333333" highlightColor='#555555'  />
            <Skeleton count={3} style={{ margin: '20px' }} height={254} width={190} color="#333333" highlightColor='#555555'  />
            <Skeleton count={3} style={{ margin: '20px' }} height={254} width={190} color="#333333" highlightColor='#555555'  />
          </StyledSkeleton>
        )}
        {items && (
            <>
            {items.map(item => <ItemComponent key={item.id} {...{ [resourceName]: item}} />)}
            </>
          )}
        </Container>
    )
}
