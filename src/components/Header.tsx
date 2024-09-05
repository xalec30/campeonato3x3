import { Col, Container,Row } from "react-bootstrap"
import Cover from '../assets/video/cover-header.mp4';

export default function Header(){

    return(
        <>
            <Container id="header" fluid className="p-0 overflow-x-hidden">
                <div className="w-100 h-auto">
                    <video className="overflow-x-hidden video-header" autoPlay muted loop>
                        <source src={Cover} type="video/mp4" />
                    </video>
                    <div className="position-absolute left-100 top-50 start-0">
                            <h1 className="display-1 text-white ps-2 text-center">Torneo de Basquetball 3x3</h1>
                         
                    </div>
                </div>
            </Container>
        </>
    )
}