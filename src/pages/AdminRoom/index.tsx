import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useRoom } from '../../hooks/useRoom';
import { Question } from '../../components/Question';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { database } from '../../services/firebase';
import { PageWrapper, Header, HeaderContent, RoomCodeWrapper, Main, RoomTitle, QuestionsList } from './style';
import toast from 'react-hot-toast';
import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';
// import './style.scss';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

  async function handleEndRoom() {
    if(window.confirm('Você tem certeza que deseja encerrar a sala?')){
      await database.ref(`rooms/${roomId}`).update({
        endedAt: new Date(),
      });
      history.push('/');
      toast('Sala encerrada!', { icon: '🚪'});  
    }
  }

  async function handleDeleteQuestion(questionId: string) {
    if(window.confirm('Você tem certeza que deseja excluir a questão?')){
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
      toast('Pergunta deletada', { icon: '🗑️'});
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string){
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    })
  }

  async function handleHighlightQuestion(questionId: string, questionIsHighlighted: boolean){
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: !questionIsHighlighted,
    })
  }

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.get().then(room => {
      if(!room.val()){
        alert('A sala acessada não existe.')
        history.push('/');
      }
    })

    return () => {
      roomRef.off('value');
    }
  }, [history, roomId]);

  return (
    <PageWrapper>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Letmeask logo" />
          <RoomCodeWrapper>
            <RoomCode code={roomId}/>
            <Button onClick={handleEndRoom} isOutlined>Encerrar Sala</Button>
          </RoomCodeWrapper>
        </HeaderContent>
      </Header>

      <Main>
        <RoomTitle>
          <h1>Sala {title}</h1>
          { questions.length > 0 
            && 
            <span>{questions.length} {questions.length === 1 ? 'pergunta' : 'peguntas'}</span> 
          }
        </RoomTitle>

        <QuestionsList>
          {questions.map(question => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && 
                  <>
                    <button
                      className="delete-button"
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img src={checkImg} alt="Marcar pergunta como respondida" />
                    </button>
                    <button
                      className="delete-button"
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id, question.isHighlighted)}
                    >
                      <img src={answerImg} alt="Dar destaque à pergunta" />
                    </button>
                  </>
                }
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
        </QuestionsList>
      </Main>
    </PageWrapper>
  );
}