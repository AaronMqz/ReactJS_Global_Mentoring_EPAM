import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Modal } from './Modal.styled';

type ModalProps = {
  toogle: () => void;
  children: React.ReactNode;
};

export const useModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toogleModal = () => {
    setShowModal(!showModal);
  };

  return {
    showModal,
    toogleModal,
  };
};

const ModalComponent = ({ children, toogle }: ModalProps) => {
  return ReactDOM.createPortal(
    <Modal.Container>
      <Modal.Content>
        <Modal.IconClose onClick={() => toogle()}>
          <FontAwesomeIcon icon={faXmark} />
        </Modal.IconClose>
        {children}
      </Modal.Content>
    </Modal.Container>,
    document.body
  );
};

export default ModalComponent;
