import Abi from "../assets/img/ivimg.jpeg";

function Home() {
  return (
    <div className="flex items-center justify-center h-[100vh] ">
      <div className="flex bg-gray-100 p-6 rounded-xl w-3/4 shadow-lg">
        <div className="flex-1 w-1/2 px-6">
          <h1 className="text-4xl font-bold py-6">Hii.. I am Abinaya</h1>
          <p className="text-black-500 text-justify mt-4">
            I have successfully completed my Full Stack development journey, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). Through this, I gained expertise in building end-to-end web applications, from creating responsive user interfaces with React to managing databases and APIs using MongoDB and Express. My projects include implementing user authentication, real-time features, and deploying applications on cloud platforms like Heroku. This experience has equipped me with a deep understanding of front-end and back-end development, as well as problem-solving, collaboration, and security best practices.
          </p>
        </div>
        <div className="flex-shrink-0 w-1/2 flex justify-center items-center">
          <img src={Abi} alt="Abinaya's Profile" className="w-[40vw%] h-[40vh] rounded-full shadow-blue-500 shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
