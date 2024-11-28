import { useState } from 'react';
import './App.css'
import axios from 'axios'
import Weather from './components/Weather';

function App() {

  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");

  const url = `http://api.weatherstack.com/current?access_key=${import.meta.env.VITE_WEATHERSTACK_ACCESS_KEY}&query=${location}`;

  const searchLocation = (event) => {
    if(event.key === "Enter") {
      axios.get(url)
        .then((response) => {
          setData(response.data)
        })
        .catch((error) => console.error(error));
        setLocation("")
    }
  }

  return (
    <div className='w-full h-full relative'>
      <div className='text-center p-4'>
        <p className='text-5xl text-gray-300'>Weather App</p>
        <input type="text" className='py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md mt-20'
          placeholder='Enter location'
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>
      <Weather weatherData = {data}/>
    </div>
  )
}

export default App
