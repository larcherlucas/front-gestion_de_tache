
import { AxiosResponse } from 'axios';
import { weatherAxiosInstance } from '../axios/axios';

interface WeatherForecast {
  city: { name: string };
  list: Array<{
    dt_txt: string;
    weather: Array<{ description: string; icon: string }>;
    main: { temp: number };
  }>;
}

const getWeatherForecast = async (latitude: number, longitude: number): Promise<WeatherForecast> => {
  try {
    const response: AxiosResponse<WeatherForecast> =
      await weatherAxiosInstance().get('/forecast', {
        params: {
          lat: latitude,
          lon: longitude,
          appid: '451064b6fbd1f80dcd40778c67c1873f',
          units: 'metric',
        },
      });
    return response.data;
  } catch (error) {
    console.error('Erreur dans la recherche des prévisions météorologiques :', error);
    throw new Error('Impossible de récupérer les données météorologiques');
  }
};

export { WeatherForecast, getWeatherForecast };