import { Header } from '../../components/Header'
import { InputCity } from '../../components/InputCity';
import * as C from './styles'

export const Home = () => {

    const date = new Date();
    const day = date.getDay();
    let newDay = ''
    
    switch(day) {
        case 0: newDay = 'Domingo' 
        break;
        case 1: newDay = 'Segunda-feira'
        break;
        case 2: newDay = 'Terça-feira'
        break;
        case 3: newDay = 'Quarta-feira'
        break;
        case 4: newDay = 'Quinta-feira'
        break;
        case 5: newDay = 'Sexta-feira'
        break;
        case 7: newDay = 'Sábado'
    }


    return (
        <C.Container>
            <Header />
            <C.HomeWrapper>
                <h4>Hoje, { newDay }</h4>
                <h1>Previsão do tempo</h1>
                <InputCity />
            </C.HomeWrapper>
        </C.Container>
    )
}