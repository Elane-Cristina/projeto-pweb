import { useLocation, Link } from 'react-router-dom';

function Forecast() {
    const { lon, lat, ac, lang, unit, tzshift } = useLocation().state;

    return (
        <div className="container">
            <div>
                <h1>Previsão</h1>
                <img 
                    src={`http://www.7timer.info/bin/two.php?lon=${lon}&lat=${lat}&ac=${ac}&lang=${lang}&unit=${unit}&output=internal&tzshift=${tzshift}`}
                    alt="Imagem vinda da API"
                />
                <Link to="/">
                    Fazer outra requisição
                </Link>
            </div>
        </div>
    );
}

export default Forecast;
