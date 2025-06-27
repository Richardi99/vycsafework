import icPdf from '../Img/icons/ic-pdf.png'
import brochure from '../Fies/BROCHUREACTUALIZADO.pdf'

export const Brochure = () => {
    return (

        <section id='sct6'>
                    <h6>DESCARGAR FOLLETO CORPORATIVO</h6>
                    <div className="link-folleto">
                        <a href={brochure} download={brochure}><img src= {icPdf} alt="IMG" />
                        BROCHURE
                        </a>
                    </div>
        </section> 

    )
    
}