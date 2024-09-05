import { Container,Row,Col } from "react-bootstrap"
import Image from 'react-bootstrap/Image';

export default function Partner(){

    return(
        <Container id="partner" className="p-4">
            <Row className="justify-content-center text-center">
                 <Col md={12} lg={12}>
                    <h1>Nuestro Patrocinadores</h1>
                 </Col>
            </Row>
            <Row>
                <Col md={12} lg={12}>
                    <Row>
                        <Col className="p-3" xs={12} lg={3} md={3}>
                            <Image className="w-100" src="https://placehold.co/600x400/png" />
                        </Col>
                        <Col className="p-3" xs={12}  lg={3}  md={3}>
                            <Image  className="w-100" src="https://placehold.co/600x400/png" />
                        </Col>
                        <Col className="p-3" xs={12} lg={3}  md={3}>
                            <Image  className="w-100" src="https://placehold.co/600x400/png" />
                        </Col>
                        <Col className="p-3" xs={12} md={3} lg={3}>
                            <Image   className="w-100" src="https://placehold.co/600x400/png" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}