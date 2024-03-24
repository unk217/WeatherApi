import React, { useEffect, useState } from 'react';
import { getW } from './Api/Weather';
import { Card } from '@tremor/react';
import { CardHero } from './components/CardUi';
import { DialogUsageExample } from './components/Dialog';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function Ld() {
      try {
      
        const response = await getW();
        
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    Ld();
  }, []);
  //console.log(data)
  return (
    <div className='text-white flex justify-center py-10 px-10 font-bold text-3xl'>
      {/* Aquí puedes mostrar los datos */}
      {data && (
        <div >
          <Card>
          <h1>Weather in {data.name}</h1>
          <p>Temperature: {data.main.temp} Celcius</p>
          <p>Feel like: {data.main.feels_like} Celcius</p>
          <p>Clouds: {data.clouds.all} %</p>
          <p>Presión: {data.main.sea_level} hPa</p>
          
          <p>Description: {data.weather[0].description}</p>
          <p>Wind speed {(data.wind.speed*3.6).toFixed(2)} k/m</p>
          </Card>
          <div className='py-4'>
          <DialogUsageExample/>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default App;
