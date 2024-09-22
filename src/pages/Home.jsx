import Abi from "../assets/img/ivimg.jpeg";
import html from "../assets/img/html.png";
import github from "../assets/img/github.png"
import java from "../assets/img/java.png";
import js from "../assets/img/js.png";
import lin from "../assets/img/linkedin.png";
import mon from "../assets/img/mongo.png";
import my from "../assets/img/mysql.png";
import p from "../assets/img/react.png";
function Home() {
  return (<>
    <div className="flex items-center justify-center h-[100vh] ">
      <div className="flex bg-gray-100 p-6 rounded-xl w-3/4 shadow-lg">
        <div className="flex-1 w-1/2 px-6">
          <h1 className="text-4xl font-bold py-6">Hii.. I am Abinaya</h1>
          <p className="text-black-500 text-justify mt-4">
            I have successfully completed my Full Stack development journey, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). Through this, I gained expertise in building end-to-end web applications, from creating responsive user interfaces with React to managing databases and APIs using MongoDB and Express. My projects include implementing user authentication, real-time features, and deploying applications on cloud platforms like Heroku. This experience has equipped me with a deep understanding of front-end and back-end development, as well as problem-solving, collaboration, and security best practices.
          </p>
        </div>
        <div className="flex-shrink-0 w-1/2 flex justify-center items-center">
          <img src={Abi} alt="Abinaya's Profile" className="w-[40vw%] h-[40vh] rounded-full shadow-blue-500 shadow-lg border-black" />
        </div>
      </div>
    </div>
      <ul className="flex justify-center flex-row gap-7 py-10">
        <li><img src={html} alt="html" /></li>
        <li><img src={github} alt="github" /></li>
        <li><img src={java} alt="java" /></li>
        <li><img src={js} alt="javascript" /></li>
        <li><img src={lin} alt="linkedin" /></li>
        <li><img src={mon} alt="mongodb" /></li>
        <li><img src={my} alt="mysql" /></li>
        <li><img src={p} alt="react" /></li>

      </ul>

      </>);
}

export default Home;
