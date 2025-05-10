import "./App.css";
import BearWithFlowers from "../public/cute-love-bear-roses.gif";
import BearsKissing from "../public/bear-kiss-bear-kisses.gif";
import { useState } from "react";

function App() {
  const [saidYes, setSaidYes] = useState(false);

  return (
    <>
      {saidYes ? (
        <>
          <img
            src={BearsKissing}
            alt="Brown bear kissing white bear"
            className="mx-auto mb-[1rem]"
          />
          <p className="text-4xl font-medium select-none text-center">
            Yayy thank you! I <span className="text-red-500">love</span> you!
          </p>
        </>
      ) : (
        <>
          <img
            src={BearWithFlowers}
            alt="Bear jumping with flowers in hand"
            className="mx-auto"
          />
          <p className="text-4xl font-medium select-none text-center">
            Will you be my <span className="text-red-500">Valentines</span>?
          </p>
          <div className="flex flex-row items-center justify-center space-x-4 mt-2">
            <div className="select-none bg-black text-white px-6 py-2 rounded-xl cursor-pointer text-xl">
              No
            </div>
            <div
              className="select-none bg-red-500 text-white rounded-xl cursor-pointer transition-all text-xl px-6 py-2"
              onClick={() => setSaidYes(true)}
            >
              Yes
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
