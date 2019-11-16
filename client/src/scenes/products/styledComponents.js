import styled from 'styled-components';

export const Container = styled.View`
  background-color: #f4f4f4;
  flex: 1;
`;

export const ProductContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 10px 10px;
  border-radius: 8px
`;

export const DescriptionContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ProductImage = styled.Image`
  width: 130;
  height: 180;
  border-radius: 8px;
`
export const DescriptionTitle = styled.Text`
  font-size: 20px;
  margin-left: 10px;
`

export const DescriptionText = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`