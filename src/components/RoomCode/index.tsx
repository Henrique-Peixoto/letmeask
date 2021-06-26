import toast from 'react-hot-toast';
import { RoomCodeButton } from './style';
import copyImg from '../../assets/images/copy.svg';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {

  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
    toast.remove();
    toast('Código da sala copiado!', { icon: '📋'});
  }

  return (
    <RoomCodeButton className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>
      <span>{props.code}</span>
    </RoomCodeButton>
  );
}