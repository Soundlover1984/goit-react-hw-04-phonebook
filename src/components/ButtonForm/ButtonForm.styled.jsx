import styled from 'styled-components';

export const BtnElement = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 20px;
  font-weight: bold;
  border: #5f5c59 solid 2px;
  background-color: #791e6b9d;
  box-shadow: 0px 12px 8px 4px #cab1b14d;
  transform: scale(1);
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: ${props =>
      props.status === 'add'
        ? 'rgba(45, 196, 4, 0.7)'
        : 'rgba(248, 4, 4, 0.797)'};
    box-shadow: 0px 14px 6px 4px #cab1b98c;
  }
  &:active {
    transform: scale(1.2);
  }
  & > svg {
    margin-right: 8px;
  }
`;
