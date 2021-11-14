import { memo, useEffect } from 'react';
import CustomModalLayout from './index.layout';
import useWindowSize from '../../utils/hooks/use-window-size';

const CustomModal = ({ isModalOpen, handleModalClose }) => {
  const { width } = useWindowSize();

  const closeModalByEsc = (e) => {
    if (e.keyCode === 27) handleModalClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalByEsc);

    return () => {
      window.removeEventListener('keydown', closeModalByEsc);
    };
  }, [isModalOpen]);

  return (
    <CustomModalLayout
      isModalOpen={isModalOpen}
      handleModalClose={handleModalClose}
      width={width}
    />
  );
};

export default memo(CustomModal);
