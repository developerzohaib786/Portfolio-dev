import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FiExternalLink } from 'react-icons/fi';

const Wrapper = styled.section`
  width: 100%;
  padding: 80px 0 60px;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const PageChip = styled.span`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.primary || '#00ff9d'};
  color: ${({ theme }) => theme.primary || '#00ff9d'};
  font-size: 11px;
  font-family: monospace;
  letter-spacing: 0.12em;
  padding: 4px 12px;
  border-radius: 4px;
  margin-bottom: 24px;
`;

const HeroHeading = styled.h1`
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 700;
  line-height: 1.1;
  color: ${({ theme }) => theme.text_primary || '#fff'};
  margin: 0 0 20px;

  span {
    color: ${({ theme }) => theme.primary || '#00ff9d'};
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary || '#fff'};
  margin: 0;

  svg {
    width: 18px;
    height: 18px;
    opacity: 0.7;
  }
`;

const scrollAnim = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const CardsViewport = styled.div`
  overflow: hidden;
  width: 100%;
`;

const CardsTrack = styled.div`
  display: flex;
  gap: 16px;
  width: max-content;
  animation: ${scrollAnim} 35s linear infinite;
  &:hover { animation-play-state: paused; }
`;

const Card = styled.a`
  flex: 0 0 260px;
  background: ${({ theme }) => theme.card || '#181818'};
  border: 1px solid ${({ theme }) => theme.card_border || '#2a2a2a'};
  border-radius: 12px;
  padding: 18px 18px 16px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  min-height: 160px;
  transition: border-color 0.2s, box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.primary || '#00ff9d'};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.primary + '30' || '#00ff9d30'};
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  font-family: monospace;
  letter-spacing: 0.08em;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => (theme.primary || '#00ff9d') + '30'};
  background: ${({ theme }) => (theme.primary || '#00ff9d') + '10'};
  color: ${({ theme }) => theme.primary || '#00ff9d'};
`;

const ExternalIcon = styled.span`
  color: ${({ theme }) => theme.text_secondary || '#666'};
  display: flex;
  align-items: center;
  font-size: 14px;
  opacity: 0.6;
  transition: opacity 0.2s;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const CardTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary || '#e6edf3'};
  line-height: 1.4;
  margin: 0 0 10px;
`;

const CardDesc = styled.p`
  font-size: 12.5px;
  color: ${({ theme }) => theme.text_secondary || '#8b949e'};
  line-height: 1.55;
  margin: 0 0 auto;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const Mono = styled.span`
  font-size: 11px;
  font-family: monospace;
  color: ${({ theme }) => theme.text_secondary || '#8b949e'};
`;

const certificates = [
  {
    title: 'AWS',
    file: '/certificates/aws.pdf',
    desc: 'Cloud fundamentals and AWS services overview.',
  },
  {
    title: 'Docker',
    file: '/certificates/docker.pdf',
    desc: 'Containerization basics, images, and workflows.',
  },
  {
    title: 'Kubernetes',
    file: '/certificates/kubernetes.pdf',
    desc: 'Orchestration concepts: pods, deployments, services.',
  },
  {
    title: 'Next.js',
    file: '/certificates/nextjs.pdf',
    desc: 'Full-stack React with routing, SSR, and deployment.',
  },
  {
    title: 'Node.js',
    file: '/certificates/nodejs.pdf',
    desc: 'Backend fundamentals with Node.js runtime and APIs.',
  },
];

const doubled = [...certificates, ...certificates];

const Certificates = () => {
  return (
    <Wrapper id="certificates">
      <Inner>
        <PageChip>Certificates</PageChip>
        <HeroHeading>
          My <span>Certifications</span>
        </HeroHeading>

        <SectionHeader>
          <SectionTitle>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm3 8H9V7a3 3 0 1 1 6 0v3Z" />
            </svg>
            Certificates (PDF)
          </SectionTitle>
        </SectionHeader>

        <CardsViewport>
          <CardsTrack>
            {doubled.map((cert, i) => (
              <Card key={i} href={cert.file} target="_blank" rel="noopener noreferrer">
                <CardTop>
                  <Badge>CERTIFICATE</Badge>
                  <ExternalIcon>
                    <FiExternalLink />
                  </ExternalIcon>
                </CardTop>
                <CardTitle>{cert.title}</CardTitle>
                <CardDesc>{cert.desc}</CardDesc>
                <CardFooter>
                  <Mono>public/certificates</Mono>
                  <Mono>PDF</Mono>
                </CardFooter>
              </Card>
            ))}
          </CardsTrack>
        </CardsViewport>
      </Inner>
    </Wrapper>
  );
};

export default Certificates;
