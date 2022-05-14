import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { EKeyCodes } from '~enums/keyCodes';
import { setPageScroll } from '~utils/setPageScroll';

import { IModalProps } from './types';

import scss from './Modal.module.scss';

import CloseIcon from './images/close.svg';

function Modal(props: IModalProps) {
  const [shouldMount, setShouldMount] = useState(false);

  const modalClass = [scss.modalContainer];

  const handleClose = () => props.onClose();

  const handleKeyDown = useCallback(
    (e) => {
      if (props.isOpen && e.keyCode === EKeyCodes.ESCAPE) {
        props.onClose();
      }
    },
    [props]
  );

  if (props.className) modalClass.push(props.className);

  const ModalComponent = (
    <div
      className={[scss.backgroundOverlay, props.noPortal ? scss.noPortal : ''].join(' ')}
      onClick={handleClose}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div role="dialog" aria-modal className={modalClass.join(' ')}>
        <div onClick={(e) => e.stopPropagation()} onKeyDown={handleKeyDown} role="presentation">
          <CloseIcon className={scss.closeBtn} onClick={handleClose} />
          {props.children}
        </div>
      </div>
    </div>
  );

  const renderModal = () => {
    let modal = null;

    if (shouldMount && !props.noPortal) {
      modal = createPortal(ModalComponent, document.getElementById('drawers-portal')!);
    } else if (shouldMount && props.noPortal) {
      modal = ModalComponent;
    }

    return modal;
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (props.isOpen) {
      setShouldMount(true);
      if (!props.noPortal) setPageScroll(false);
    } else {
      setPageScroll(true);
      setTimeout(() => setShouldMount(false), 100);
    }
  }, [props.isOpen, props.noPortal]);

  return renderModal();
}

export default Modal;
