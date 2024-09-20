import Abi from "../assets/img/ivimg.jpeg"
function Home() {
  return (
    <div class="flex items-center justify-center h-screen">
    <div class="flex items-center bg-gray-100 p-3 ">
  <div class="flex-1">
    <h1 class="text-4xl font-bold py-6">Hii.. I am Abinaya</h1>
    <p class="text-gray-500 mt-2">
    I have successfully completed my Full Stack development journey, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). 
    Through this, I gained expertise in building end-to-end web applications, from creating responsive user interfaces with React to managing
     databases and APIs using MongoDB and Express. My projects include implementing user authentication, real-time features, and deploying 
     applications on cloud platforms like Heroku. This experience has equipped me with a deep understanding of front-end and back-end development, 
     as well as problem-solving, collaboration, and security best practices.    </p>
  </div>
  <div class="flex-shrink-0 ml-4">
    <img src={Abi} alt="Image" class="w-40 h-30 rounded-full shadow-blue-500 shadow-lg" />
  </div>
</div> </div>
);}

export default Home;