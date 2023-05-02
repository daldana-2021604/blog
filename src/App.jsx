import { useMemo } from 'react'
import { WorksCard } from './WorksCard'
import { getWorks } from './Works/helpers/getWorks'
import './assets/styles/app.css'

export const App = () => {
    const works = useMemo(() => getWorks())
    return (
        <>
            <div className='cabecera'>
                <h1>Bienvenidos a mi blog</h1>
                <h4>Mi nombre es Dorbal Emilio Aldana Ramos</h4>
            </div>
            <body>
                <div className='cuerpo'>
                    {
                        works.map(work => (
                            <WorksCard key={work.id}
                                {...work}
                            />
                        ))
                    }

                </div>

            </body>
            <footer>
                <a className='redes-sociales' href="https://github.com/daldana-2021604?tab=repositories">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="" />
                </a>
                <a className='redes-sociales' href="https://www.instagram.com/dorbalemilio/">
                    <img src="https://cdn.pixabay.com/photo/2021/06/15/12/17/instagram-6338401_1280.png" alt="" />
                </a>
            </footer>

        </>
    )
}
