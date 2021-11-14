import { memo, useRef } from 'react';
import useOnClickOutside from '../../utils/hooks/use-on-click-outside';
import { Modal, ModalLayout, ModalCloseButton } from './index.styled';
import IconCloseModal from '../../assets/images/closeModal.svg';
import FormTax from '../form-tax/index';

const CustomModalLayout = ({ handleModalClose, isModalOpen, width }) => {
  const ref = useRef();
  useOnClickOutside(ref, handleModalClose);

  return (
    <ModalLayout active={isModalOpen} mobile={width < 600}>
      <Modal ref={ref} mobile={width < 600}>
        <ModalCloseButton onClick={handleModalClose}>
          <img src={IconCloseModal} alt="close" />
        </ModalCloseButton>
        <FormTax />
      </Modal>
    </ModalLayout>
  );
};

export default memo(CustomModalLayout);
