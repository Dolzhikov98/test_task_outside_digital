import { memo } from 'react';
import {
  ContentWrapper,
  CalculateContentWrapper,
  ModalTitle,
  SubTitle,
  InputTitle,
  SalaryInput,
  CalculationSalary,
  AddButton,
  DecreaseButton,
  ButtonWrapper,
  ResultCalcItem,
  CheckBox,
  InvalidFormat,
} from './index.styled';
import { TYPE_DECREASE } from '../../constants/tax';

const FormTaxLayout = ({
  isDisplayCalculation,
  handleDisplayCalculation,
  salary,
  hadnleSalary,
  typeDecrease,
  handleTypeDecrease,
  calculatePayments,
  payments,
  isInvalidData,
  handleInvalidData,
  widthWindow,
  handleEndSentences,
}) => (
  <ContentWrapper mobile={widthWindow < 600}>
    <ModalTitle>Налоговый вычет</ModalTitle>
    <SubTitle>
      Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
      налогового вычета составляет не более 13% от своего официального годового
      дохода.
    </SubTitle>
    <InputTitle>Ваша зарплата в месяц</InputTitle>
    <SalaryInput
      placeholder="Введите данные"
      value={salary}
      onChange={hadnleSalary}
      error={isDisplayCalculation}
    />
    {isInvalidData && <InvalidFormat>{isInvalidData}</InvalidFormat>}
    <CalculationSalary
      disabled={isInvalidData || payments.length > 0}
      onClick={() => {
        if (!salary) handleInvalidData('Поле обязательно для заполнения');
        else {
          calculatePayments();
          handleDisplayCalculation();
        }
      }}
    >
      Рассчитать
    </CalculationSalary>
    <ResultCalculation
      display={isDisplayCalculation}
      payments={payments}
      handleEndSentences={handleEndSentences}
    />
    <ButtonWrapper>
      <span>Что уменьшаем?</span>
      <DecreaseButton
        active={typeDecrease === TYPE_DECREASE.PAYMENT}
        payment
        onClick={() => handleTypeDecrease(TYPE_DECREASE.PAYMENT)}
      >
        Платёж
      </DecreaseButton>
      <DecreaseButton
        active={typeDecrease === TYPE_DECREASE.TERM}
        onClick={() => handleTypeDecrease(TYPE_DECREASE.TERM)}
      >
        Срок
      </DecreaseButton>
    </ButtonWrapper>
    <AddButton mobile={widthWindow < 600}>Добавить</AddButton>
  </ContentWrapper>
);

const ResultCalculation = ({ display, payments, handleEndSentences }) => (
  <CalculateContentWrapper display={display}>
    <InputTitle>Итого можете внести в качестве досрочных:</InputTitle>
    {payments &&
      payments.map((item, index) => (
        <ResultCalcItem key={index}>
          <CheckBox type="checkbox" active={true} />
          <span>{`${item.taxDeduction} рублей`}</span>
          <p>{`в ${index + 1}-${handleEndSentences(index + 1)} год`}</p>
        </ResultCalcItem>
      ))}
  </CalculateContentWrapper>
);

export default memo(FormTaxLayout);
