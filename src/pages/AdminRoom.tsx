// import { useState } from 'react';
import { useParams } from 'react-router';
// import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { Question } from '../components/Question';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { database } from '../services/firebase';
import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';
import '../styles/room.scss';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  // const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if(window.confirm('Você tem certeza que deseja excluir a questão?')){
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask logo" />
          <div>
            <RoomCode code={roomId}/>
            <Button isOutlined>Encerrar Sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          { questions.length > 0 
            && 
            <span>{questions.length} {questions.length === 1 ? 'pergunta' : 'peguntas'}</span> 
          }
        </div>

        <div className="questions-list">
          {questions.map(question => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <button
                  className="delete-button"
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Deletar esta pergunta" />
                </button>
              </Question>
            )
          })}
        </div>
      </main>
    </div>
  );
}