import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "h2 h2"
    "taste images"
    "taste images";
  height: 100%;
  gap: 15px;
`;

export const Taste = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: taste;
`;

export const Images = styled.div`
  display: grid;
  grid-area: images;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  padding: 10px;
  gap: 15px;
`;

export const Room = styled.img`
  width: 100%;
  height: 100%;
`;
export const Hole = styled.img`
  width: 100%;
  height: 100%;
`;
export const Kitchen = styled.img`
  width: 100%;
  height: 100%;
`;
export const Bedroom = styled.img`
  width: 100%;
  height: 100%;
`;
