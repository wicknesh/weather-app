const Weather = ({weatherData}) => {

    if (!weatherData) {
        return null;
    }
    
    if (!weatherData.location || !weatherData.current) {
        return <p className="text-center text-red-500 mt-4">Invalid location. Please enter a valid location.</p>;
    }

  return (
    <div>
        {weatherData ? (<div className='w-[500px] h-[300px] bg-gray-300 shadow-lg rounded-xl m-auto relative px-6 top-[10%]'>
            <div className="flex justify-between w-full">
                <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
                    <div className="flex flex-col items-start justify-between h-full">
                        <div>
                            <p className="text-xl">
                                {weatherData.location.name},
                                {weatherData.location.country}
                            </p>
                            <p className="text-sm">
                                {weatherData.current.weather_descriptions[0]}
                            </p>
                        </div>
                        <div>
                            <h1 className='text-6xl font-semibold'>
                                {weatherData.current.temperature} °C
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-between items-end">
                    <div className="relative top-[10%]">
                        <img src={weatherData.current.weather_icons} alt="" className="w-[120px]" />
                    </div>
                    <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs mt-10">
                        <div className="flex justify-between gap-x-8">
                            <p>Feels like</p>
                            <p className="font-bold w-20">
                                {weatherData.current.feelslike} °C
                            </p>
                        </div>
                        <div className="flex justify-between gap-x-8">
                            <p>Humidity</p>
                            <p className="font-bold w-20">
                                {weatherData.current.humidity} %
                            </p>
                        </div>
                        <div className="flex justify-between gap-x-8">
                            <p>Wind Speed</p>
                            <p className="font-bold w-20">
                                {weatherData.current.wind_speed} km/h
                            </p>
                        </div>
                        <div className="flex justify-between gap-x-8">
                            <p>Pressure</p>
                            <p className="font-bold w-20">
                                {weatherData.current.pressure} mb
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ):null}
    </div>
  )
}

export default Weather