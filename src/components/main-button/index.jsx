import { memo } from 'react';
import { Button } from './index.styled';

const MainButton = ({ handleModalOpen }) => {
  return (
    <Button onClick={handleModalOpen}>
      <span>Налоговый вычет</span>
    </Button>
  );
};
export default memo(MainButton);
