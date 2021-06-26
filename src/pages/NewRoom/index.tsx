import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/Button';
import { PageWrapper, Aside, Main, MainContent, Form } from './style';
import toast from 'react-hot-toast';
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    
    if(newRoom.trim() === ''){
      toast.remove();
      toast.error('O nome da sala está vazio!');
      return;
    }

    const roomRef = database.ref('rooms');
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`);
    toast.remove();
    toast.success('Sala criada com sucesso!');
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
          <h2>Crie uma nova sala</h2>
          <Form onSubmit={handleCreateRoom}>
            <input 
              type="text"
              placeholder="Nome da sala"
              value={newRoom}
              onChange={event => setNewRoom(event.target.value)}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </Form>
          <p>
            Quer entra em uma sala existente? <Link to="/">Clique aqui!</Link>
          </p>
        </MainContent>
      </Main>
    </PageWrapper>
  );
}