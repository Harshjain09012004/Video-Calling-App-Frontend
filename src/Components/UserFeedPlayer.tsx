import { useEffect, useRef } from "react";

const UserFeedPlayer : React.FC<{stream?: MediaStream}> = ({stream})=>{
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(()=>{
        if (videoRef.current && stream instanceof MediaStream) {
            console.warn("valid stream provided:", stream);
            videoRef.current.srcObject = stream;
        } else {
            console.warn("Invalid stream provided:", stream);
        }
    },[stream]);

    return(
        <>
            <video
                ref={videoRef}
                style={{ width: '450px', height: '230px'}}
                muted={true}
                autoPlay={true}
            />
        </>
    )
};

export default UserFeedPlayer;