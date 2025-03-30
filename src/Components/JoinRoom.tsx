import { useContext, useState } from "react";
import { SocketContext } from "../Context/SocketContext";

const JoinRoom: React.FC = () => {
    const { socket } = useContext(SocketContext);
    const [roomId, setroomId] = useState('');

    const join = () => {
        socket.emit("join-room", { roomId });
    }

    return (
        <div className="flex gap-5">
            <input id="roomId" type="text" className=" rounded-md px-2 bg-black text-gray-300 text-center border-gray-500 border" placeholder="Enter Meeting Code" value={roomId} onChange={(e)=>{
                setroomId(e.target.value);
            }}/>

            <button 
                type="button"
                onClick={join}
                className="bg-indigo-500 text-lg rounded-md p-3 active:scale-105 transition-all"
            >
                Join a Meeting
            </button>
        </div>
    )
}

export default JoinRoom;