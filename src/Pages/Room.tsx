import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { SocketContext } from '../Context/SocketContext';
import UserFeedPlayer from '../Components/UserFeedPlayer';

const Room: React.FC = () => {
  const { id } = useParams();
  const { socket, user, stream, peers} = useContext(SocketContext);

  useEffect(()=>{
    //Will emit join-room whenver this room page is visited
    if(user) socket.emit("join-room", { roomId: id, peerId: user._id});
  },[user, socket, id]);

  return (
    <div className='bg-black h-[100vh] w-[100vw] text-xl text-white'>
      Room : {id}
      Your Own Feed
      <UserFeedPlayer stream={stream}/>

      <div>
        Others Feed
        {Object.keys(peers).map((peerId)=>(
            <UserFeedPlayer key={peerId} stream={peers[peerId].stream}/>
        ))}
      </div>
    </div>
  )
}

export default Room;