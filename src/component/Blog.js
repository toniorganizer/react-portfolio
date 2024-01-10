import React from 'react'
import {Nav, Navbar, Container, Card, Button} from "react-bootstrap"
import {Link} from "react-router-dom"

const Blog = () => {
  return (
    <div>
      <Navbar expand="lg" bg="primary" className="fixed-top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link className="text-white" as={Link} to="/">My Works</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/Blog" >Blog</Nav.Link>
          </Nav>
          <Nav className="ms-auto social-media">
            <h4>Find me on social media</h4>
            <Nav.Link href="https://www.facebook.com/tri.fahtony/" target="_blank"><i className="bi bi-facebook text-white"></i></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/tri-yuli-pahtoni-292377255/" target="_blank"><i className="bi bi-linkedin text-white"></i></Nav.Link>
            <Nav.Link href="https://www.instagram.com/triyulipahtoni/" target="_blank"><i className="bi bi-instagram text-white"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
    <div className="fade-blog">
        <h4 style={{ marginTop: "80px" }}>My Blog</h4>
        <p>Tri Yuli Pahtoni</p>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <Button variant='none' style={{ textAlign: 'left' }}>
              <Card style={{ width: 'auto' }} className="mb-2 blog">
                <div style={{ boxSizing: 'content-box', width: 'auto', height: '200px', overflow: 'hidden' }}>
                  <Card.Img variant="top" src="img/work1.png" style={{ width: '100%', height: 'auto' }} />
                </div>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <div className="mb-2"><p><i className="bi bi-calendar4-week" style={{ marginRight: '10px' }}></i>10/01/2024</p></div>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Button>
          </div>
        </div>
      </div>
    </Container>
    <div className="text-center footer col-lg-12 col-md-6 col-ms-12 mt-3 fw-light mt-5">
        <p>Copyright © Tri Yuli Pahtoni, 2024. Made with ♥ in Yogyakarta</p>
    </div>
    </div>
  )
}

export default Blog
