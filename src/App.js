import { useState } from 'react';
import './global.css';
import { MainWrapper } from './index.styled';
import MainButton from './components/main-button/index';
import CustomModal from './components/modal/index';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <MainWrapper>
      <MainButton handleModalOpen={handleModalOpen} />
      <CustomModal
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
      />
    </MainWrapper>
  );
};

export default App;
