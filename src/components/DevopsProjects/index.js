import React, { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from '../Projects/ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { devopsProjects } from '../../data/devops-projects'

const normalizeCategory = (value) =>
  (typeof value === 'string' ? value.trim().toLowerCase() : '');

const categoryMatches = (projectCategory, activeToggle) => {
  if (activeToggle === 'all') return true;
  const active = normalizeCategory(activeToggle);

  // Allow some toggles to filter by technology tags (e.g. Docker/Kubernetes)
  if (active === 'docker' || active === 'kubernetes') {
    return true;
  }

  if (Array.isArray(projectCategory)) {
    return projectCategory.some((c) => normalizeCategory(c) === active);
  }
  return normalizeCategory(projectCategory) === active;
};

const tagMatches = (projectTags, activeToggle) => {
  const active = normalizeCategory(activeToggle);
  if (active !== 'docker' && active !== 'kubernetes') return true;
  if (!Array.isArray(projectTags)) return false;
  return projectTags.some((t) => normalizeCategory(t) === active);
};

const DevopsProjects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  const visibleProjects = devopsProjects.filter(
    (project) => categoryMatches(project.category, toggle) && tagMatches(project.tags, toggle)
  );

  return (
    <Container id="devops-projects">
      <Wrapper>
        <Title>DevOps Projects</Title>
        <Desc>
          Here are some of my DevOps projects, focusing on CI/CD automation, containerization, and cloud deployments.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ? (
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          )}
          <Divider />
          {toggle === 'jenkins' ? (
            <ToggleButton active value="jenkins" onClick={() => setToggle('jenkins')}>Jenkins</ToggleButton>
          ) : (
            <ToggleButton value="jenkins" onClick={() => setToggle('jenkins')}>Jenkins</ToggleButton>
          )}
          <Divider />
          {toggle === 'aws-ecs' ? (
            <ToggleButton active value="aws-ecs" onClick={() => setToggle('aws-ecs')}>AWS ECS</ToggleButton>
          ) : (
            <ToggleButton value="aws-ecs" onClick={() => setToggle('aws-ecs')}>AWS ECS</ToggleButton>
          )}
          <Divider />
          {toggle === 'aws-ec2' ? (
            <ToggleButton active value="aws-ec2" onClick={() => setToggle('aws-ec2')}>AWS EC2</ToggleButton>
          ) : (
            <ToggleButton value="aws-ec2" onClick={() => setToggle('aws-ec2')}>AWS EC2</ToggleButton>
          )}
          <Divider />
          {toggle === 'docker' ? (
            <ToggleButton active value="docker" onClick={() => setToggle('docker')}>Docker</ToggleButton>
          ) : (
            <ToggleButton value="docker" onClick={() => setToggle('docker')}>Docker</ToggleButton>
          )}
          <Divider />
          {toggle === 'kubernetes' ? (
            <ToggleButton active value="kubernetes" onClick={() => setToggle('kubernetes')}>Kubernetes</ToggleButton>
          ) : (
            <ToggleButton value="kubernetes" onClick={() => setToggle('kubernetes')}>Kubernetes</ToggleButton>
          )}
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

export default DevopsProjects
