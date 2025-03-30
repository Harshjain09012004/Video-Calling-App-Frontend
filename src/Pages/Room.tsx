import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { SocketContext } from '../Context/SocketContext';

const Room: React.FC = () => {
  const { id } = useParams();
  const { socket, user } = useContext(SocketContext);

  useEffect(()=>{
    //Will emit join-room whenver this room page is visited
    if(user) socket.emit("join-room", { roomId: id, peerId: user._id});
  },[user, socket, id]);

  return (
    <div className='bg-black h-[100vh] w-[100vw] text-xl text-white'>
      Room : {id}
    </div>
  )
}

export default Room;