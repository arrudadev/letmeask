import { useState } from 'react';

import deleteQuestionModal from '../../assets/images/delete-question-modal.svg';
import deleteSVG from '../../assets/images/delete.svg';
import { database } from '../../services/firebase';
import { Modal } from '../Modal';

type DeleteQuestionProps = {
  roomId: string;
  questionId: string;
};

export function DeleteQuestion({ roomId, questionId }: DeleteQuestionProps) {
  const [isModalDeleteQuestionOpen, setIsModalDeleteQuestionOpen] =
    useState(false);

  async function handleDeleteQuestion() {
    setIsModalDeleteQuestionOpen(true);
  }

  async function deleteQuestion() {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
  }

  return (
    <>
      <button type="button" onClick={handleDeleteQuestion}>
        <img src={deleteSVG} alt="Remover pergunta" />
      </button>

      <Modal
        isOpen={isModalDeleteQuestionOpen}
        onClose={() => setIsModalDeleteQuestionOpen(false)}
        onConfirm={deleteQuestion}
        confirmText="Sim, excluir"
        title="Excluir pergunta"
        subTitle="Tem certeza que você deseja excluir esta pergunta?"
        icon={deleteQuestionModal}
      />
    </>
  );
}
