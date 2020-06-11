import React from 'react';

import { Modal as BaseUIModal, ModalHeader, ModalBody, ModalFooter, ModalButton, SIZE, ROLE } from "baseui/modal";
import { KIND as ButtonKind } from "baseui/button";

function RemoveToDoModal(props) {
  const { isOpen, remove, changeOpenStatus } = props;

  function close() {
    changeOpenStatus();
  }

  function removeAndclose() {
    remove();
    changeOpenStatus();
  }

  return (
    <BaseUIModal
      onClose={close} closeable isOpen={isOpen} animate autoFocus
      size={SIZE.default} role={ROLE.dialog}
    >
      <ModalHeader>Você tem certeza disso?</ModalHeader>
      <ModalBody>Você está prestes a excluir permanentemente esta tarefa</ModalBody>
      <ModalFooter>
        <ModalButton onClick={close} kind={ButtonKind.tertiary}>Não, cancelar</ModalButton>
        <ModalButton onClick={removeAndclose}>Sim, excluir</ModalButton>
      </ModalFooter>
    </BaseUIModal>
  );
}

export default RemoveToDoModal;