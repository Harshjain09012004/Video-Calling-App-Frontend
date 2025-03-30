import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { SocketContext } from '../Context/SocketContext';

const Room: React.FC = () => {
  const { id } = useParams();
  const { socket } = useContext(SocketContext);

  
  useEffect(() => {
    socket.emit('joined-room', {roomId : id});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className='bg-black h-[100vh] w-[100vw] text-xl text-white'>
        Room : {id}
    </div>
  )
}

export default Room;