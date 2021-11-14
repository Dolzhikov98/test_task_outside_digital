import styled from 'styled-components';

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  ${(props) => props.mobile && 'padding-bottom: 100px'}
`;

export const CalculateContentWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: ${(props) => (props.display ? 'flex' : 'none')};
  flex-direction: column;
  overflow-y: auto;
`;

export const SubTitle = styled.span`
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #808080;
  margin-top: 16px;
`;

export const ModalTitle = styled.h2`
  color: #000000;
  font-weight: bold;
  font-size: 28px;
  line-height: 40px;
  display: flex;
  align-items: center;
`;

export const InputTitle = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  margin-top: 24px;
`;

export const SalaryInput = styled.input`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #dfe3e6;
  box-sizing: border-box;
  border-radius: 3px;
  margin-top: 8px;

  color: #000000;
  font-size: 14px;
  line-height: 24px;
  font-family: Lab Grotesque;
  font-style: normal;
  font-weight: normal;
  ::placeholder {
    color: #bec5cc;
  }
`;

export const CalculationSalary = styled.button`
  max-width: 76px;
  width: 100%;
  margin-top: 8px;
  background-color: #ffffff;
  border: none;
  outline: none;
  color: #ea0029;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  :hover {
    color: #f53a31;
  }
`;

export const AddButton = styled.button`
  width: ${(props) => (props.mobile ? 'calc(100% - 32px)' : '100%')};
  padding: 16px 0px;
  margin-top: 40px;
  ${(props) => props.mobile && 'position:absolute'};
  ${(props) => props.mobile && 'bottom:32px'};
  background: linear-gradient(
      255.35deg,
      #dc3131 0.83%,
      rgba(255, 79, 79, 0) 108.93%
    ),
    #ff5e56;
  box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
  border-radius: 6px;
  text-align: center;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  :hover {
    background-color: #ea0029;
  }
`;

export const DecreaseButton = styled.button`
  padding: 6px 12px;
  border-radius: 50px;
  ${(props) => props.payment && 'margin-right: 16px'};
  background: ${(props) => (props.active ? '#FF5E56' : '#EEF0F2')};
  color: ${(props) => (props.active ? '#FFFFFF' : '#000000')};

  :hover {
    background: ${(props) => (props.active ? '#EA0029' : '#DFE3E6')};
    color: ${(props) => (props.active ? '#FFFFFF' : '#000000')};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  span {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    margin-right: 32px;
  }
`;

export const ResultCalcItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dfe3e6;
  padding: 16px 0px;
  font-style: normal;
  font-weight: normal;
  span {
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    margin-right: 5px;
  }
  p {
    font-size: 12px;
    line-height: 17px;
    color: #808080;
  }
`;

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: #ff5e56;
  margin-right: 12px;
  border: 1px solid #dfe3e6;
  box-sizing: border-box;
  border-radius: 6px;
  :checked {
    background: #ff5e56;
  }
`;

export const InvalidFormat = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #ea0029;
  margin-top: 4px;
`;
