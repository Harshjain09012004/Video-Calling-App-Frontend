import CreateRoom from "../Components/CreateRoom"
import JoinRoom from "../Components/JoinRoom";

const Home: React.FC = () => {
    return (
        <div className="bg-black h-[100vh] w-[100vw] flex place-items-center justify-center gap-40">
            <CreateRoom/>
            <JoinRoom/>
        </div>
    )
}

export default Home;