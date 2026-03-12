import { SquarePen, ThumbsUp } from "lucide-react";
import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(20)
  const [username, setUserame] = useState("Usama")
//   const [numbers, setNumbers] = useState([10,20,30])
//   const
  function changeNum() {
    setNum(30)
    setUserame("Usama Rajpoot")
    setNumbers([11,21,31])
  }
  return (
    <div className="mx-100 my-45 text-center flex flex-col gap-5 py-10 justify-center w-sm bg-zinc-800 rounded-2xl shadow-lg ring-1 ring-zinc-300 outline-none">
      <h1 className="text-lg text-gray-200 font-medium">The Value of User is {num}</h1>
      <h1 className="text-lg text-gray-200 font-medium">The Value of a is {username}</h1>
      {/* <h1 className="text-lg text-gray-200 font-medium">The Value of a is {numbers}</h1> */}
      <div className="flex justify-center">
          <button onClick={changeNum} className="text-white text-base gap-2 font-medium bg-zinc-800 focus:outline-none hover:bg-zinc-600 ring-1 ring-zinc-600 hover:ring-zinc-700 transition-all duration-200 flex items-center px-4 py-2 rounded-md shadow-md hover:shadow-lg hover:scale-[1.03] m-2 focus:ring-2 focus:ring-zinc-400">
                <ThumbsUp className="w-5 h-5 opacity-80" />
                Click Me
          </button>
      </div>
    </div>
  );
};

export default App;
