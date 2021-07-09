import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import closeSVG from '../../assets/images/close.svg';
import { database } from '../../services/firebase';
import { Button } from '../Button';
import { Modal } from '../Modal';

type EndRoomProps = {
  roomId: string;
};

export function EndRoom({ roomId }: EndRoomProps) {
  const history = useHistory();

  const [isModalEndRoomOpen, setIsModalEndRoomOpen] = useState(false);

  async function endRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push('/');
  }

  async function handleEndRoom() {
    setIsModalEndRoomOpen(true);
  }

  return (
    <>
      <Button isOutlined onClick={handleEndRoom}>
        Encerrar sala
      </Button>

      <Modal
        isOpen={isModalEndRoomOpen}
        onClose={() => setIsModalEndRoomOpen(false)}
        onConfirm={endRoom}
        confirmText="Sim, encerrar"
        title="Encerrar sala"
        subTitle="Tem certeza que você deseja encerrar esta sala?"
        icon={closeSVG}
      />
    </>
  );
}
