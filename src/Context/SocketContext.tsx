import SocketIoClient from "socket.io-client";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Peer from "peerjs";
import { v4 as UUIDv4 } from "uuid";

const WS_Server = "http://localhost:5500";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SocketContext = createContext<any | null>(null);

const socket = SocketIoClient(WS_Server, {
    withCredentials: false,
    transports: ["polling", "websocket"]
});

interface Props {
    children: React.ReactNode
}

export const SocketProvider: React.FC<Props> = ({ children }) => {
    const navigate = useNavigate();
    const [user, setuser] = useState<Peer>();//Peer user
    const [stream, setstream] = useState<MediaStream>();

    const fetchUserFeed = async ()=>{
        const userStream = await navigator.mediaDevices.getUserMedia({video:true, audio:true});
        setstream(userStream);
    }

    const fetchParticipants = ({roomId, participants}: {roomId: string, participants: string[]})=>{
        console.log("Fetching room and its participants");
        console.log(roomId, participants);
    };

    useEffect(()=>{
        const userId = UUIDv4();
        const newPeer = new Peer(userId, {
            host: 'localhost',
            port: 9000,
            path: '/myapp'
        });
        setuser(newPeer);

        const enterRoom = ({roomId}: {roomId: string})=>{
            //For performing navigation programatically
            navigate(`/room/${roomId}`);
        };
        fetchUserFeed();

        socket.on("room-created", enterRoom);
        socket.on("get-users", fetchParticipants);
    },[]);

    return (
        <SocketContext.Provider value={{ socket, user, stream}}>
            {children}
        </SocketContext.Provider>
    );
}