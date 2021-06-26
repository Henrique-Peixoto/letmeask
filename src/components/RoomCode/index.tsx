import toast from 'react-hot-toast';
import copyImg from '../../assets/images/copy.svg';
import './style.scss';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {

  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
    toast('Código da sala copiado!', { icon: '📋'});
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>
      <span>{props.code}</span>
    </button>
  );
}