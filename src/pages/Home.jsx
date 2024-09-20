import Abi from "../assets/img/ivimg.jpeg"
function Home() {
  return (
    <div class="flex items-center justify-center h-screen">
    <div class="flex items-center bg-gray-100 p-3 ">
  <div class="flex-1">
    <h1 class="text-2xl font-bold">My Content</h1>
    <p class="text-gray-500 mt-2">
    I have completed my Full Stack development journey, specializing in MERN stack technologies.
    </p>
  </div>
  <div class="flex-shrink-0 ml-4">
    <img src={Abi} alt="Image" class="w-40 h-30 rounded-full" />
  </div>
</div> </div>
);}

export default Home;