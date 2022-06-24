import { KeyboardEvent, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import * as C from './styles'

export const InputCity = () => {

    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState('');

    const searchCity = (e: KeyboardEvent) => {
        if(e.code === 'Enter') {
            navigate(`/${inputValue}`)
        }
    }

    return (
        <C.Container>
            <div className='inputWrapper'>
                <AiOutlineSearch />
                <input 
                    type="text" 
                    placeholder='Pesquise o clima da sua cidade'
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyUp={searchCity}
                />
            </div>
        </C.Container>
    )
}