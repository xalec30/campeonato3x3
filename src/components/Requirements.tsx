import { Col, Container, Row } from "react-bootstrap"

export default function Requirement(){

    return(
        <Container fluid id="requirements" className="ps-0 pe-0">
            <div className="bg-primary p-4">
                <Row className="justify-content-center">
                    <Col lg={12} md={12} className="text-center">
                        <h1 className="text-white">Requerimientos</h1>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}