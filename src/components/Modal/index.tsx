import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

import './styles.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  confirmText: string;
  icon: string;
  title: string;
  subTitle: string;
}

export function Modal({
  isOpen,
  onClose,
  onConfirm,
  confirmText,
  icon,
  title,
  subTitle,
}: ModalProps) {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={onClose}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#f0f0f5',
          color: '#000',
          borderRadius: '8px',
          width: '590px',
          border: 'none',
        },
        /* stylelint-disable-line */
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      <div id="modal-content">
        <img src={icon} alt={title} />

        <h1>{title}</h1>

        <p>{subTitle}</p>

        <footer>
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
          <button type="button" className="confirm-button" onClick={onConfirm}>
            {confirmText}
          </button>
        </footer>
      </div>
    </ReactModal>
  );
}
