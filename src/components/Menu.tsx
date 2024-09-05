
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.webp';
import Button from 'react-bootstrap/Button';


export default function Menu(){

    const [TextColor,setTextColor] = useState('text-dark');
    const [BackgroundColor,setBackground] = useState('bg-light');

    /*
    useEffect(() => {
        window.addEventListener('scroll',(e) => {

            if(document.documentElement.scrollTop >= 100 ){
                setTextColor('text-dark');
                setBackground('bg-light');
            }else{
                setTextColor('text-light');
                setBackground('bg-transparent');
            }
        });
    },[]);
    */

    return(
        <>
            <Navbar fixed='top' expand="lg" className={BackgroundColor}  data-bs-theme="light">
                <Container>
                    <Navbar.Brand >
                        <img 
                            alt=""
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="MenuResponsive" />
                    <Navbar.Collapse id="MenuResponsive">
                        <Nav className='me-auto'>
                            <Nav.Link className={TextColor  + ' ps-2 pr-2'} href="#header">Inicio</Nav.Link>
                            <Nav.Link className={TextColor  + ' ps-2 pr-2'} href="#Teams">Equipos</Nav.Link>
                            <Nav.Link className={TextColor  + ' ps-2 pr-2'} href="#partner">Patrocinadores</Nav.Link>
                        </Nav>
                        <Nav className="d-flex">
                            <Button variant="primary" className='m-1' href="#requirements">Requisitos</Button>
                            <Button href="#watchNow" variant="danger" className='m-1'>Ver ahora</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}