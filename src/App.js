import './App.css';
import Navbar from './components/navbar';
import ReuseReduceRecycle from './components/ReduceReuseRecycle';
import ACMLogo from './components/acmlogo';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between h-[100vh]">
  <Navbar />
  <ReuseReduceRecycle />
  <div className="flex justify-center items-center py-10 bg-green-600 bg-opacity-75">
    {/* Ensure the text and logo are side by side */}
    <div className="flex mx-auto items-center justify-center space-x-4 h-[4vh]">
      <div className="flex mx-auto text-white text-lg font-semibold">
        Join us in our mission to create a sustainable future! 🌍
      </div>
      <div className="flex align-right transform scale-75 overflow-none">
        <a href="https://www.acmvit.in/ ">
        <ACMLogo />
        </a>
      </div>
    </div>
  </div>
</div>

  );
}

export default App;
