import { useContext } from "react";
import { SocketContext } from "../Context/SocketContext";

const CreateRoom: React.FC = () => {

    const { socket } = useContext(SocketContext);

    const initRoom = () => {
        console.log("Initialising a req to create a room", socket)
        socket.emit("create-room");
    }

    return (
        <button 
            type="button"
            onClick={initRoom}
            className="bg-indigo-500 rounded-md p-2 active:scale-105 transition-all"
        >
            Start a new meeting
        </button>
    )
}

export default CreateRoom;