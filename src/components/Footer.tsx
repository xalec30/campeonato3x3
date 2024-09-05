import { Container, Row, Col } from "react-bootstrap";


export default function Footer(){

    return(
        <>
            <Container fluid className="ps-0 pe-0">
                <div className=" bg-dark p-4">   
                    <Row className="pt-2">
                        <Col xs={12} lg={6} md={6}>
                            <p className="text-white">Desarrollador Por Alexander Rodriguez.</p>
                        </Col>
                        <Col className="text-end" xd={12} lg={6} md={6}>
                            <p className="text-white">Derechos Reservados 2024.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}