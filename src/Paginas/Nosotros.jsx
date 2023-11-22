import '../Css/Nosotros.css'

export const Nosotros = () => {
    return (
        <div id="nosotros">
            <section id="nosotros-sect1">
                <h1>Nosotros</h1>
                <h2>Trabajamos para hacerte la vida mas segura</h2>
            </section>
            <section id='somos'>
                <div className="somos-container">
                    <div className="imagen"></div>

                    <div className="somos-texto">
                        <h3>Somos <strong>V&Csafework</strong></h3>
                        <h4>Administración de Edificios y Seguridad</h4>
                            <p>
                            Somos una empresa peruana especializada en la administración integral de 
                            edificios, condominios y vigilancia preventiva. Para brindar servicios de
                            conserjes, porteros, recepcionistas, controladores , auxiliares de 
                            limpieza, vigilancia, resguardo policial y protección personal; 
                            contamos con pedo, entrenado y calificado para prestar 
                            nuestros servicios de calidad. Además, ofrecemos asesoría y gestión en 
                            seguridad, auditorías de edificios. También proporcionamos consultoría
                            en administración de edificios, construcción e inmobiliaria .
                            </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
