import { Col, Container, Row } from "react-bootstrap"

export default function WatchNow(){

    return(
        <>
            <Container fluid className="ps-0 pe-0">
                <div className="p-4 text-bg-danger">
                   <Row className="justify-content-center">
                        <Col lg={12} md={12} className="text-center">
                            <h1 className="pt-4 pb-4">Ver la transmision en vivo</h1>
                        </Col>
                   </Row>
                </div>
            </Container>
            <Container id="watchNow" className="p-4">
                <Row className="justify-content-center pt-4 pb-4">
                    <Col md={10} lg={10}>
                      <iframe className="w-100"  src="https://www.youtube.com/embed/CXLM08fZO5o" title="NBA Epic Moments" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </Col>
                </Row>
            </Container>
        </>
    )
}