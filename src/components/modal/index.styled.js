import styled from 'styled-components';

export const ModalLayout = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  width: 100%;
  height: 100%;
  ${(props) => !props.mobile && 'padding-top: 60px'};
  ${(props) => !props.mobile && 'padding-bottom: 60px'};
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  transition: 0.4s;
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  padding > div {
    transition: 0.4s;
    transform: translateY(${({ active }) => (active ? '0' : '-100vh')});
    ${(props) => props.mobile && 'padding-bottom: 140px '};
  }
`;
export const Modal = styled.div`
  background-color: #ffffff;
  width: 100%;
  margin: auto;
  max-width: ${(props) => (props.mobile ? 'none' : '453px')};
  border-radius: ${(props) => (props.mobile ? 'none' : '30px')};
  ${(props) => props.mobile && 'height: 100%'};
  position: relative;
  padding: ${(props) => (props.mobile ? '16px' : '32px')};
`;
export const ModalCloseButton = styled.button`
  position: absolute;
  top: ${(props) => (props.mobile ? '22px' : '27px')};
  right: ${(props) => (props.mobile ? '22px' : '23px')};
  width: 18px;
  height: 18px;
  background-color: #ffffff;
  svg {
    width: 100%;
    height: 100%;
  }
`;
