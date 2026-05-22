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
  animation: ${scrollAnim} 15s linear infinite;
  &:hover { animation-play-state: paused; }
`;

// Card now aligns items vertically (logo on top, text on bottom) with spacing
const Card = styled.a`
  position: relative;
  flex: 0 0 170px;
  background: ${({ theme }) => theme.card || '#181818'};
  border: 1px solid ${({ theme }) => theme.card_border || '#2a2a2a'};
  border-radius: 12px;
  padding: 28px 20px 20px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-height: 140px;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primary || '#00ff9d'};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.primary + '30' || '#00ff9d30'};
  }
`;

const ExternalIcon = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  color: ${({ theme }) => theme.text_secondary || '#666'};
  display: flex;
  align-items: center;
  font-size: 13px;
  opacity: 0.4;
  transition: opacity 0.2s, color 0.2s;

  ${Card}:hover & {
    opacity: 1;
    color: ${({ theme }) => theme.primary || '#00ff9d'};
  }
`;

// Brand image styling to keep sizing uniform across different logos
const LogoImage = styled.img`
  height: 42px;
  width: auto;
  max-width: 80px;
  object-fit: contain;
  filter: grayscale(20%) brightness(95%);
  transition: filter 0.2s, transform 0.2s;

  ${Card}:hover & {
    filter: grayscale(0%) brightness(100%);
    transform: scale(1.05);
  }
`;

const LogoText = styled.div`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.text_primary || '#e6edf3'};
  opacity: 0.8;
  transition: opacity 0.2s;

  ${Card}:hover & {
    opacity: 1;
  }
`;

// Data with reliable internet logo source assets
const certificates = [
  {
    title: 'AWS',
    file: '/certificates/aws.pdf',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    title: 'Docker',
    file: '/certificates/docker.pdf',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    title: 'Kubernetes',
    file: '/certificates/kubernetes.pdf',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  },
  {
    title: 'Next.js',
    file: '/certificates/nextjs.pdf',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    title: 'Node.js',
    file: '/certificates/nodejs.pdf',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
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
                <ExternalIcon>
                  <FiExternalLink />
                </ExternalIcon>
                
                {/* Visual tech identity element */}
                <LogoImage src={cert.logoUrl} alt={`${cert.title} logo`} />
                
                {/* Accompanying clean text metadata */}
                <LogoText>{cert.title}</LogoText>
              </Card>
            ))}
          </CardsTrack>
        </CardsViewport>
      </Inner>
    </Wrapper>
  );
};

export default Certificates;