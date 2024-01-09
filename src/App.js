import {Container, Image, Navbar, Nav} from 'react-bootstrap';

function App() {
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
            <Nav.Link className="text-white" href="#features">Blog</Nav.Link>
          </Nav>
          <Nav className="ms-auto social-media">
            <h4>Find me on social media</h4>
            <Nav.Link href="#home"><i className="bi bi-facebook text-white"></i></Nav.Link>
            <Nav.Link href="#home"><i className="bi bi-linkedin text-white"></i></Nav.Link>
            <Nav.Link href="#home"><i className="bi bi-instagram text-white"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
    <div className="row justify-content-left">
      
      <div className="col-lg-12 col-md-6 mt-3 fw-light about-up mr-3">
        <h4>My works</h4>
          <p>For now, mostly website</p>
      </div>
      <div className="col-lg-12 fw-light mr-3">
        <div className="row">
          <div className="col-lg-12 font-works fade-in">
            <Image src="img/profile.JPG" className="rounded works float-start mr-5" alt="..." />
            <h4>Nama Website</h4>
              <p>Penjelasan webiste</p>
          </div>
          <div className="col-lg-12 mt-5 text-end font-works fade-in">
            <Image src="img/profile.JPG" className="rounded works float-end" alt="..." />
            <h4>Nama Website</h4>
              <p>Penjelasan webiste</p>
          </div>
        </div>
      </div>
    </div>
    </Container>
    <div className="text-center footer col-lg-12 col-md-6 col-ms-12 mt-3 fw-light mt-5">
        <p>Copyright © Tri Yuli Pahtoni, 2024. Made with ♥ in Yogyakarta</p>
    </div>
    </div>
  );
}

export default App;
