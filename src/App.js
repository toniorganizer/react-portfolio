import {Container, Image, Navbar, Nav} from 'react-bootstrap';

function App() {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        {/* <h1 class="display-4">Get Work Done <span>Faster</span><br /> and <span>Better</span> With Us</h1>
        <Button class="tombol" variant="primary" size="sm">Our Work</Button>{' '} */}
      </div>
    </div>

    <Container>
      <div class="row justify-content-center utama-info-panel">  
        <div class="col-lg-4 col-md-12 col-ms-12 mt-3 fw-light about-up mr-3">
          <h4>Hello Everyone It's me</h4>
            <p>You can call me Toni, I am a person who is quite enthusiastic in developing web technology. The technology chosen must be able to solve the problem.</p>
        </div>
        <div class="col-lg-3 col-md-12 col-ms-12 info-panel">
          <div class="row">
            <div class="col-lg fw-light">
              <Image src="img/profile.JPG" class="mt-3" rounded />
              <h4>Tri Yuli Pahtoni</h4>
              <p>Web Developer Enthusiast</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 col-ms-12 mt-3 about-und">
            <p class="fw-light">I have currently developed the web using several technologies, such as Laravel, Codeigniter, Node.js and React.js. Currently I am studying and working at the Information and Communication Technology Center, Yogyakarta State University.</p>
        </div>
      </div>
    </Container>
    <Navbar bg="primary mt-4" className="navigasi">
      <Container>
        <Nav className="me-auto">
          <Nav.Link className="text-white" href="#home">My Works</Nav.Link>
          <Nav.Link className="text-white" href="#features">Blog</Nav.Link>
        </Nav>
        <Nav className="ms-auto social-media">
          <h4>Find me on social media</h4>
          <Nav.Link className="text-white" href="#home"><i class="bi bi-facebook"></i></Nav.Link>
          <Nav.Link className="text-white" href="#home"><i class="bi bi-linkedin"></i></Nav.Link>
          <Nav.Link className="text-white" href="#home"><i class="bi bi-instagram"></i></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Container>
    <div class="row justify-content-left">
      
      <div class="col-lg-12 col-md-6 col-ms-12 mt-3 fw-light about-up mr-3">
        <h4>My works</h4>
          <p>For now, mostly website</p>
      </div>
      <div class="col-lg-12 col-md-6 col-ms-12 mt-3 fw-light mr-3">
        <div className="row">
          <div className="col-lg-12 col-md-6 col-ms-4">
            <Image src="img/profile.JPG" className="rounded works float-start mr-5" alt="..." />
            <h4>Nama Website</h4>
              <p>Penjelasan webiste</p>
          </div>
          <div className="col-lg-12 col-md-6 col-ms-4 mt-5 text-end">
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
