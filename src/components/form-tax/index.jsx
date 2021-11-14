import { memo, useState, useEffect } from 'react';
import FormTaxLayout from './index.layout';
import { TYPE_DECREASE, MAX_SUM } from '../../constants/tax';
import useWindowSize from '../../utils/hooks/use-window-size';

const FormTax = () => {
  const [isDisplayCalculation, setIsDisplayCalculation] = useState(false);
  const [typeDecrease, setTypeDecrease] = useState(TYPE_DECREASE.PAYMENT);
  const [salary, setSalary] = useState('');
  const [payments, setPayments] = useState([]);
  const [isInvalidData, setIsInvalidData] = useState(false);

  const { width } = useWindowSize();

  const handleInvalidData = (value) => setIsInvalidData(value);

  const hadnleSalary = (e) => setSalary(e.target.value);

  const handleTypeDecrease = (value) => setTypeDecrease(value);

  const handleDisplayCalculation = () => setIsDisplayCalculation(true);

  useEffect(() => {
    if (salary && salary < 12792) handleInvalidData('МРОТ - 12 792р');
    else if (!salary) handleInvalidData('Поле обязательно для заполнения');
    else if (salary && salary.match(/^[0-9]+$/) === null)
      handleInvalidData('Неверный формат');
    else handleInvalidData(false);
    setPayments([]);
  }, [salary]);

  const calculatePayments = () => {
    const taxDeduction = +salary * 12 * 0.13;
    const counterPayments = Math.floor(MAX_SUM / taxDeduction);
    const remainder = Math.floor(MAX_SUM - counterPayments * taxDeduction);

    for (let i = 0; i < counterPayments; i++) {
      payments.push({ taxDeduction: taxDeduction });
    }

    setPayments([...payments, { taxDeduction: remainder }]);
  };

  const handleEndSentences = (year) => {
    const lastNum = year.toString();
    switch (
      lastNum.length == 1
        ? lastNum[lastNum.length - 1]
        : lastNum[lastNum.length - 1] + lastNum[lastNum.length - 2]
    ) {
      case '2':
        return 'ой';
      case '3':
        return 'ий';
      case '6':
        return 'ой';
      case '7':
        return 'ой';
      case '8':
        return 'ой';
      case '12':
        return 'ый';
      case '13':
        return 'ый';
      case '16':
        return 'ый';
      case '17':
        return 'ый';
      case '18':
        return 'ый';
      default:
        return 'ый';
    }
  };

  return (
    <FormTaxLayout
      isDisplayCalculation={isDisplayCalculation}
      handleDisplayCalculation={handleDisplayCalculation}
      salary={salary}
      hadnleSalary={hadnleSalary}
      typeDecrease={typeDecrease}
      handleTypeDecrease={handleTypeDecrease}
      calculatePayments={calculatePayments}
      payments={payments}
      isInvalidData={isInvalidData}
      handleInvalidData={handleInvalidData}
      widthWindow={width}
      handleEndSentences={handleEndSentences}
    />
  );
};

export default memo(FormTax);
