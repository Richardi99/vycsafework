import imagen1 from '../Img/bgPrincipal.png'
import '../Css/Container.css'

export function Inicio () {
    return (
        <>
            <div id="inicio">
                <section id="sct1">
                    <div className='container-img'>
                        <img src= {imagen1} alt="IMAGEN1" />
                    </div>
                    <div className="sct1texto">
                        <h1>Administración de Edicios y Seguridad</h1>
                        <p>
                        Ofrecemos una amplia gama de servicios generales para 
                        satisfacer todas sus necesidades de mantenimiento y reparación
                        </p>
                        <button>Solicitar información</button>
                    </div>
                </section>

                <section id="sct2">
                    <h2>Los mejores en Administración de 
                        <span> Edficios y seguridad</span>
                    </h2>
                </section>
                <section id="sct3"></section>
                <section id="sct4"></section>
            </div>
        </>
    )
}
