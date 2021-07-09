import { useParams } from 'react-router-dom';

import answerImg from '../../assets/images/answer.svg';
import checkImg from '../../assets/images/check.svg';
import logoImg from '../../assets/images/logo.svg';
import { DeleteQuestion } from '../../components/DeleteQuestion';
import { EndRoom } from '../../components/EndRoom';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
// import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import './styles.scss';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const { id: roomId } = useParams<RoomParams>();

  // const { user } = useAuth();

  const { title, questions } = useRoom(roomId);

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />

          <div>
            <RoomCode code={roomId} />

            <EndRoom roomId={roomId} />
          </div>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>

          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map(question => (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
              isAnswered={question.isAnswered}
              isHighlighted={question.isHighlighted}
            >
              {!question.isAnswered && (
                <>
                  <button
                    type="button"
                    onClick={() => handleCheckQuestionAsAnswered(question.id)}
                  >
                    <img src={checkImg} alt="Marcar pergunta como respondida" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleHighlightQuestion(question.id)}
                  >
                    <img src={answerImg} alt="Dar destaque à pergunta" />
                  </button>
                </>
              )}

              <DeleteQuestion questionId={question.id} roomId={roomId} />
            </Question>
          ))}
        </div>
      </main>
    </div>
  );
}
