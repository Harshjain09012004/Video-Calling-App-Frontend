import CreateRoom from "../Components/CreateRoom"

const Home: React.FC = () => {
    return (
        <div className="bg-black h-[100vh] w-[100vw] flex place-items-center justify-center">
            <CreateRoom/>
        </div>
    )
}

export default Home;