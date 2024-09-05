/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-700 text-black p-4">Counter App</h1>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://www.leetdesk.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fleetdesk%2Fc5527f47-def9-433c-9cce-23f286dbfea2_Front.jpg%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C374%2C4000%2C2250%26w%3D1920%26h%3D1080&w=1080&q=75" alt="Sarah Dayan" width="384" height="512" />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium" >
              “Tailwind CSS is the only framework that seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>Sarah Dayan</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}

export default App;
