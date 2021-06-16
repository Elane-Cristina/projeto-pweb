import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Form() {
    const history = useHistory();

    const [lon, setLon] = useState();
    const [lat, setLat] = useState();
    const [ac, setAc] = useState();
    const [lang, setLang] = useState();
    const [unit, setUnit] = useState();
    const [tzshift, setTzshift] = useState();

    function nextPage(event) {
        event.preventDefault();

        history.push('/forecast', {
            lon,
            lat,
            ac,
            lang,
            unit,
            tzshift
        });
    }

    return (
        <div className="container">
            <div>
                <form onSubmit={nextPage}>
                    <h1>7Timer! - API para previsão do tempo</h1>
                    <input 
                        name="lon" 
                        placeholder="lon"
                        type="float" 
                        onChange={(event) => setLon(event.target.value)}
                        required
                    />
                    <input 
                        name="lat" 
                        placeholder="lat"
                        type="float" 
                        onChange={(event) => setLat(event.target.value)}
                        required 
                    />
                    <input 
                        name="ac" 
                        placeholder="ac"
                        type="number" 
                        onChange={(event) => setAc(event.target.value)}
                        required 
                    />
                    <input 
                        name="lang" 
                        placeholder="lang"
                        onChange={(event) => setLang(event.target.value)}
                        required 
                    />
                    <input 
                        name="unit" 
                        placeholder="unit"
                        onChange={(event) => setUnit(event.target.value)}
                        required 
                    />
                    <input 
                        name="tzshift" 
                        placeholder="tzshift"
                        type="number" 
                        onChange={(event) => setTzshift(event.target.value)}
                        required 
                    />
                    <button type="submit">Chamar API</button>
                </form>
                <div>
                    <h1>Parâmetros</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>lon</td>
                                <td>
                                    <strong>Longitude </strong>
                                    <i>- Exemplo: 113.17</i>
                                </td>
                            </tr>
                            <tr>
                                <td>lat</td>
                                <td>
                                    <strong>Latitude </strong>
                                    <i>- Exemplo: 23.09</i>
                                </td>
                            </tr>
                            <tr>
                                <td>ac</td>
                                <td>
                                    <strong>Correção de Altitude </strong>
                                    <i>- Exemplo: 0.</i> Valores possíveis: 0, 2 ou 7.
                                </td>
                            </tr>
                            <tr>
                                <td>lang</td>
                                <td>
                                    <strong>Idioma </strong>
                                    <i>- Exemplo: en.</i> Valores possíveis: en (Inglês)
                                </td>
                            </tr>
                            <tr>
                                <td>unit</td>
                                <td>
                                    <strong>Unidade usada </strong>
                                    <i>- Exemplo: metric.</i> Valores possíveis: metric(°C), british(°F)
                                </td>
                            </tr>
                            <tr>
                                <td>tzshift</td>
                                <td>
                                    <strong>Ajuste de fuso horário </strong>
                                    <i>- Exemplo: 0.</i> Valores possíveis: 0, 1 ou -1
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Form;