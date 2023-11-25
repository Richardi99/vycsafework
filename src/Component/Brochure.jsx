import icPdf from '../Img/icons/ic-pdf.png'
import brochure from '../Fies/BROCHURE ACTUALIZADO.pdf'

export const Brochure = () => {
    return (

        <section id='sct6'>
                    <h6>DESCARGAR FOLLETO CORPORATIVO</h6>
                    <div className="link-folleto">
                        <a href={brochure} download={brochure}><img src= {icPdf} alt="IMG" />
                        BROCHURE 2023
                        </a>
                    </div>
        </section>

    )
    
}