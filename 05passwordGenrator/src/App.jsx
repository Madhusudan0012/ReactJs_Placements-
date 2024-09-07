import React, { useState, useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let Str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (numberAllowed) Str += "0123456789";
    if (charAllowed) Str += "!@#$%^&*()_+";
    
    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * Str.length);
      pass += Str.charAt(charIndex);
    }
    
    setPassword(pass);
  }, [numberAllowed, charAllowed, length]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4'>
      <div className='w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold text-orange-500 mb-4'>Password Generator</h1>
        <div className='mb-4'>
          <label className='block text-gray-200 mb-2'>
            Length:
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              min="1"
              className='ml-2 p-2 border border-gray-600 rounded-md'
            />
          </label>
        </div>
        <div className='mb-4'>
          <label className='flex items-center text-gray-200'>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
              className='mr-2'
            />
            Include numbers
          </label>
        </div>
        <div className='mb-4'>
          <label className='flex items-center text-gray-200'>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(!charAllowed)}
              className='mr-2'
            />
            Include special characters
          </label>
        </div>
        <button 
          onClick={passwordGenerator}
          className='bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600'
        >
          Generate Password
        </button>
        {password && (
          <div className='mt-4 p-2 bg-gray-700 text-gray-200 rounded-lg'>
            <p className='font-medium'>Password:</p>
            <p className='break-all'>{password}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
