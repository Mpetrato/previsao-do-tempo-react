import { BsWind, BsSunrise, BsSunset } from 'react-icons/bs'
import { WiHumidity } from 'react-icons/wi'

import * as C from './styles'
import { useNavigate, useNavigationType, useParams } from "react-router-dom"
import { Header } from '../../components/Header';
import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { TCityInfo } from '../../types/TcityInfo';


export const CityForecast = () => {


    const [cityInfo, setCityInfo] = useState<TCityInfo | null>(null)
    const [error, setError] = useState(false);

    const { city } = useParams();
    const navigate = useNavigate();

    const actualTemp = (Number(cityInfo?.main.temp) - 273).toFixed(0);
    const maxTemp = (Number(cityInfo?.main.temp_max) - 273).toFixed(0);
    const minTemp = (Number(cityInfo?.main.temp_min) - 273).toFixed(0);
    const windSpeed = Math.floor(Number(cityInfo?.wind.speed) * 2.237)

    let sunrise = Number(cityInfo?.sys.sunrise)
    let sunset = Number(cityInfo?.sys.sunset)

    const sun = (sunTime: number) => {
        let date = new Date(sunTime * 1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();

        
        if(hours < 10) {
            return (`0${hours}:${minutes}`).toString();
        }
        return (`${hours}:${minutes}`).toString();
    }


    useEffect(() => {
        api.searchCity(city!)
        .then((res) => {
            if(res) {
                console.log(res)
                setCityInfo(res)
            } else {
                navigate('/')
            }
        })
    }, [])


    return (
    <>
      <C.Container>
            <Header />

            <C.ForecastWrapper>
            {cityInfo && 
                <>
                    <C.Header>
                        <h3>Hoje, tal dia</h3>
                        <h1>{cityInfo?.name}</h1>
                    </C.Header>
                    <C.InfoWrapper>
                        <C.Infos>
                            <C.Info>
                                <BsSunset />
                                <span>Temperatura atual</span>
                                <span>{actualTemp}°c</span>
                            </C.Info>
                            <C.Info>
                                <BsWind />
                                <span>Vento</span>
                                <span>{windSpeed} km/h</span>
                            </C.Info>
                            <C.Info>
                                <WiHumidity />
                                <span>Humidade</span>
                                <span>{cityInfo.main.humidity}%</span>
                            </C.Info>
                            <C.Info>
                                <BsSunset />
                                <span>Temperatura máxima</span>
                                <span>{maxTemp}°c</span>
                            </C.Info>
                            <C.Info>
                                <BsSunrise />
                                <span>Nascer do Sol</span>
                                <span>{sun(sunrise)}</span>
                            </C.Info>
                            <C.Info>
                                <BsSunset />
                                <span>Pôr do Sol</span>
                                <span>{sun(sunset)}</span>
                            </C.Info>
                            <C.Info>
                                <BsSunset />
                                <span>Temperatura mínima</span>
                                <span>{minTemp}°c</span>
                            </C.Info>
                        </C.Infos>
                    </C.InfoWrapper>
                </>
            }
            {!cityInfo && !error && 
                <div>Carregando....</div>
            }
            {error && 
                <div>Cidade não encontrada...</div>
            }
            </C.ForecastWrapper>
            <C.Footer>
                <span>Feito por Matheus Petrato</span>
            </C.Footer>
        </C.Container>
    </>
    )
}