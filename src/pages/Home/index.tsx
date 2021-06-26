import { useState, FormEvent } from 'react';
import { useHistory  } from 'react-router';
import toast from 'react-hot-toast';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import { Button } from '../../components/Button';
import { PageWrapper, Aside, Main, MainContent, Form, CreateRoomButton, Separator } from './style.js';
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

export function Home() {
  const [roomCode, setRoomCode] = useState('');
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if(!user){
      await signInWithGoogle();
      history.push('/rooms/new');
    }
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if(roomCode.trim() === ''){
      toast.remove();
      toast.error('Digite o nome da sala!');
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();
    if(!roomRef.exists()){
      toast.remove();
      toast.error('Sala não existente!');
      return;
    }

    if(roomRef.val().endedAt){
      toast.remove();
      toast.error('A sala já foi fechada.');
      return;
    }

    history.push(`rooms/${roomCode}`);
  }

  return (
    <PageWrapper>
      <Aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </Aside>
      <Main>
        <MainContent>
          <img src={logoImg} alt="Letmeask logo" />
          <CreateRoomButton onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Ícone do Google" />
            Crie sua sala com o Google
          </CreateRoomButton>
          <Separator>ou entre em uma sala</Separator>
          <Form onSubmit={handleJoinRoom}>
            <input 
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={event => setRoomCode(event.target.value)}
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </Form>
        </MainContent>
      </Main>
    </PageWrapper>
  );
}