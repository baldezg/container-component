import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  box-shadow: 0px 0px 10px 1px #000000;
  border-radius: 5px;
`;

export const CardContainer = styled.div`
  overflow: visible;
  width: 190px;
  height: 254px;
  margin:20px;

  &:hover ${Content} {
    transform: rotateY(180deg);
  }
`;

const rotation = keyframes`
0% {
  transform: rotateZ(0deg);
}

0% {
  transform: rotateZ(360deg);
}
`
export const Front = styled.div`
  background-color: #151515;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;

  &::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
    animation: ${rotation} 5000ms infinite linear;
  }
`;

export const FrontContent = styled.div`
  position: absolute;
  width: 99%;
  height: 99%;
  background-color: #151515;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Poster = styled.img`
  height: 100%;
  width: 100%;
`;

export const Back = styled.div`
transform: rotateY(180deg);
color: white;
background-color: #151515;
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
-webkit-backface-visibility: hidden;
border-radius: 5px;
overflow: hidden;
`;

export const Image = styled.div`
position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const floating = keyframes`
0% {
  transform: translateY(0px);
}

50% {
  transform: translateY(10px);
}

100% {
  transform: translateY(0px);
}
`
export const Circle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #ffbb66;
  position: relative;
  filter: blur(15px);
  animation: ${floating} 2600ms infinite linear;
`;

export const RightCircle = styled(Circle)`
background-color: #ff2233;
  left: 160px;
  top: -80px;
  width: 30px;
  height: 30px;
  animation-delay: -1800ms;
`;

export const BottomCircle = styled(Circle)`
background-color: #ff8866;
  left: 50px;
  top: 0px;
  width: 150px;
  height: 150px;
  animation-delay: -800ms;
`;

export const BackContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Badge = styled.button`
background-color: #000000;
padding: 2px 10px;
border-radius: 10px;
backdrop-filter: blur(2px);
display: inline-block;
width:40px;
border: none;
color: #fff;
cursor: pointer;
`;

export const Description = styled.div`
  box-shadow: 0px 0px 10px 5px ${theme.colors.dark};
  width: 100%;
  padding: 10px;
  background-color: ${theme.colors.dark};
  backdrop-filter: blur(5px);
  border-radius: 5px;
`
export const CardTitle = styled.div`
  font-size: 11px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
width: 50%;
`;

export const CardFooter = styled.p`
  color: #ffff88;
  margin-top: 5px;
  font-size: 8px;
`;
