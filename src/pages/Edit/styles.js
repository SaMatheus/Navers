import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
`;

export const FormStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-end;
  align-items: center;

  gap: 54px 32px;

  width: 860px;

  @media (max-width: 1400px) {
    width: 560px;
  }

  button {
    width: 176px;
    justify-self: end;
  }
`;

export const Back = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;

  color: var(--black-primary);

  margin-bottom: 32px;

  background: none;
  border: none 0;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateX(-10px);
  }

  svg {
    font-size: 42px;
    margin-right: 8px;
  }
  p {
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
  }
`;

export const ButtonStyle = styled.button`
  background: none;
  border: 0 none;

  display: inline;
  justify-content: center;
  align-items: center;

  img {
    height: 20px;
    width: 20px;
  }

  &:nth-child(1) {
    margin-right: 16px;
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;

  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  height: 160px;
  width: 592px;

  padding: 32px;

  background: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;

  position: fixed;
  top: 50%;

  transform: translateY(-50%);

  & > button:nth-child(1) {
    position: absolute;
    top: 21px;
    right: 21px;

    margin: 0;

    z-index: 1;

    img {
      height: 14px;
      width: 14px;
    }
  }
`;
