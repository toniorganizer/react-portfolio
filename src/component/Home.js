import React from 'react'
import {Container, Image, Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
      <div className="container">
        {/* <h1 className="display-4">Get Work Done <span>Faster</span><br /> and <span>Better</span> With Us</h1>
        <Button className="tombol" variant="primary" size="sm">Our Work</Button>{' '} */}
      </div>
    </div>

    <div className="container-fluid no-padding">
      <div className="row justify-content-center utama-info-panel">  
        <div className="col-lg-4 col-md-12 col-xs-12 mt-3 fw-light about-up mr-3">
          <h4>Hello Everyone 👋 It's me</h4>
            <p className="about">You can call me Toni, I am a person who is quite enthusiastic in developing web technology. The technology chosen must be able to solve the problem.</p>
        </div>
        <div className="col-lg-3 col-md-9 col-xs-9 info-panel">
            <div className="col-lg fw-light">
              <Image src="img/profile.JPG" className="mt-3" rounded />
              <h4>Tri Yuli Pahtoni</h4>
              <p>Web Developer Enthusiast</p>
            </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mt-3 about-und">
            <p className="fw-light">I have currently developed the web using several technologies, such as Laravel, Codeigniter, Node.js and React.js. Currently I am studying and working at the Information and Communication Technology Center, Yogyakarta State University.</p>
        </div>
      </div>
      </div>

    <Navbar expand="lg" bg="primary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link className="text-white" href="#home">My Works</Nav.Link>
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
    <div className="row justify-content-left">
      <div className="col-lg-12 col-md-6 mt-3 fw-light about-up mr-3" id="home">
        <h4>My works</h4>
          <p>For now, mostly website</p>
      </div>
      <div className="col-lg-12 fw-light mr-3">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 font-works fade-blog">
            <div className="image-wrapper">
              <Image src="img/work1.png" className="rounded works float-start mr-5" alt="..." />
            </div>
            <h4 className="mt-3">Sistem Informasi Pasar Kerja</h4>
              <p>Sistem informasi ini dibuat untuk pemerintah provinsi Sumatera Barat. Sistem ini dibuat bertujuan untuk memberikan kemudahan bagi para pencari kerja dalam mendapatkan informasi lowongan. Selain itu sistem ini juga memiliki fitur untuk menglola data tren informasi pasar kerja yang dapat dilihat pada dashboard pemangku kepentingan. Sistem ini dibuat menggunakan Laravel, MySQL, dan Bootstrap.</p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 font-works fade-blog">
            <div className="image-wrapper">
              <Image src="img/work2.png" className="rounded works" alt="..." />
            </div>
            <h4 className="mt-3">Student Employee Pusat TIK UNY</h4>
              <p>Website ini dibuat untuk proses seleksi student employee Pusat Teknologi Informasi dan Komunikasi Universitas Negeri Yogyakarta. Website ini berisi Image slider, About, dan pengelolaan data API yang sudah disediakan oleh panitia. Desain web ini menghantarkan menjadi Student Employee Tahun 2024. Sistem ini dbuat menggunakan React JS dan React-Bootstrap.</p>
          </div>
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

export default Home
