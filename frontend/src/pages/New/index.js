import React, { useState } from 'react';
import { setState } from 'expect/build/jestMatchersObject';
import camera from '../../assets/camera.svg'
//import './styles.css';

export default function New() {
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    
    function handleSubmit() {

    }


    return (
        <form onSubmit={handleSubmit}>
            <label id="thumbnail">
                <input type="file" />
                <img src={camera} alt="Select img" />
            </label>

            <label htmlFor="company">EMPRESA*</label>
            <input
                id="company"
                placeholder="Sua empresa incrível"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />


            <label htmlFor="company">TECNOLOGIAS* <span>(separadas por vírgula)</span></label>
            <input
                id="techs"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="company">VALOR DA DIARIA* <span>(em branco para GRATUITO)</span></label>
            <input
                id="price"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />

            <button type="submit" className="btn">Cadastrar</button>

        </form>
    )
}