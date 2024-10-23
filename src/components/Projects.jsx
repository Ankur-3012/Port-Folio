import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Game Development",
      description: "Fun & Learning",
      imgUrl: projImg1,
    },
    {
      title: "Library Management",
      description: "Prtotype Design",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",   
      description: "Group Project",
      imgUrl: projImg3,
    },
    {
      title: "A Website On Harappa Civilization",
      description: "First HTML project",
      imgUrl: projImg4,
    },
    {
      title: "Rock Paper Scissor",
      description: "First Game Project",
      imgUrl: projImg5,
    },
    {
      title: "Calculator",
      description: "A simple Calculator",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below are some of my the Projects created by me.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p><a href="https://www.linkedin.com/in/ankur-bhowmik-74441b28a/" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>This will take you to my LinkedIn profile</a></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Hello! did you see my projects.Well It took some time but it was worth it.Fun Fact: For interview you have to make more advanced project.But for now have fun.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}