import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const normalizeCategory = (value) =>
  (typeof value === 'string' ? value.trim().toLowerCase() : '');

const categoryMatches = (projectCategory, activeToggle) => {
  if (activeToggle === 'all') return true;
  const active = normalizeCategory(activeToggle);
  if (Array.isArray(projectCategory)) {
    return projectCategory.some((c) => normalizeCategory(c) === active);
  }
  return normalizeCategory(projectCategory) === active;
};


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  const visibleProjects = projects.filter((project) => categoryMatches(project.category, toggle));
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Featured Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'MERN Stack' ?
            <ToggleButton active value="MERN Stack" onClick={() => setToggle('MERN Stack')}>MERN Stack</ToggleButton>
            :
            <ToggleButton value="MERN Stack" onClick={() => setToggle('MERN Stack')}>MERN Stack</ToggleButton>
          }
          <Divider />
          {toggle === 'Backend' ?
            <ToggleButton active value="Backend" onClick={() => setToggle('Backend')}>Backend</ToggleButton>
            :
            <ToggleButton value="Backend" onClick={() => setToggle('Backend')}>Backend</ToggleButton>
          }
          <Divider />
          {toggle === 'Generative AI' ?
            <ToggleButton active value="Generative AI" onClick={() => setToggle('Generative AI')}>Generative AI</ToggleButton>
            :
            <ToggleButton value="Generative AI" onClick={() => setToggle('Generative AI')}>Generative AI</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id ?? project.title}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects