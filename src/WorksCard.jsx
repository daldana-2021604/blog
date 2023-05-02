import './assets/styles/card.css'
export const WorksCard = ({ grado, titulo, descripcion, link }) => {
    return (
        <>
            <div className='carta'>
                <div className="card cuerpo">
                    <div className="card-header cabeza">
                        {grado}
                    </div>
                    <div className="card-body parte-baja">
                        <h5 className="card-title parte-baja">{titulo}</h5>
                        <p className="card-text parte-baja">{descripcion}</p>
                        <a href={link} className="btn btn-secondary">Ir</a>
                    </div>
                    <br />
                    <br />
                </div>
                <br />
            </div>
        </>
    )
}
