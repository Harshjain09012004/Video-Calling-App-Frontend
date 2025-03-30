import { useContext } from "react";
import { SocketContext } from "../Context/SocketContext";
import { redirect } from "react-router-dom";

const CreateRoom: React.FC = () => {

    const { socket } = useContext(SocketContext);

    socket.on('room-created', ({roomId}: {roomId : string})=>{
        console.log("Details : ", roomId); redirect(`/room/${roomId}`);
    })

    const initRoom = () => {
        console.log("Initialising a req to create a room", socket)
        socket.emit("create-room");
    }

    return (
        <button 
            type="button"
            onClick={initRoom}
            className="bg-indigo-500 text-xl rounded-md p-3 font-semibold active:scale-105 transition-all"
        >
            Start a new meeting
        </button>
    )
}

export default CreateRoom;