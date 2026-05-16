import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FiExternalLink } from 'react-icons/fi';
import pullRequestsData from '../../data/pullrequest.js';

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

const HeroDesc = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary || '#aaa'};
  max-width: 520px;
  line-height: 1.7;
  margin: 0 0 56px;
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
  animation: ${scrollAnim} 40s linear infinite;
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

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  font-family: monospace;
  letter-spacing: 0.08em;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid ${({ status }) =>
    status === 'Merged' ? '#2ea04330' :
    status === 'Open' ? '#388bfd30' :
    '#6e767d30'};
  background: ${({ status }) =>
    status === 'Merged' ? '#2ea04310' :
    status === 'Open' ? '#388bfd10' :
    '#6e767d10'};
  color: ${({ status }) =>
    status === 'Merged' ? '#3fb950' :
    status === 'Open' ? '#58a6ff' :
    '#8b949e'};
`;

const StatusDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ status }) =>
    status === 'Merged' ? '#3fb950' :
    status === 'Open' ? '#58a6ff' :
    '#8b949e'};
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
  font-size: 13.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary || '#e6edf3'};
  line-height: 1.5;
  margin: 0 0 auto;
  flex: 1;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const RepoPath = styled.span`
  font-size: 11px;
  font-family: monospace;
  color: ${({ theme }) => theme.text_secondary || '#8b949e'};
`;

const PRNumber = styled.span`
  font-size: 11px;
  font-family: monospace;
  color: ${({ theme }) => theme.text_secondary || '#8b949e'};
`;

const CTABox = styled.div`
  margin-top: 56px;
  border: 1px solid ${({ theme }) => theme.card_border || '#2a2a2a'};
  border-radius: 16px;
  background: ${({ theme }) => theme.card || '#181818'};
  padding: 48px 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: 680px) {
    flex-direction: column;
    padding: 36px 28px;
    align-items: flex-start;
  }
`;

const CTALeft = styled.div`
  flex: 1;
`;

const CTABadge = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 10px;
  font-family: monospace;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.primary || '#00ff9d'};
  margin-bottom: 16px;
`;

const CTADot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary || '#00ff9d'};
`;

const CTAHeading = styled.h3`
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary || '#fff'};
  margin: 0 0 12px;
  line-height: 1.2;
`;

const CTADesc = styled.p`
  font-size: 13.5px;
  color: ${({ theme }) => theme.text_secondary || '#8b949e'};
  line-height: 1.6;
  margin: 0;
  max-width: 380px;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 12px;
  flex-shrink: 0;

  @media (max-width: 680px) {
    margin-top: 24px;
  }
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: 8px;
  background: ${({ theme }) => theme.primary || '#00ff9d'};
  color: #000;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover { opacity: 0.85; }
`;

const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.primary || '#00FF00'};
  color: ${({ theme }) => theme.primary || '#00FF00'};
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  background: transparent;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.primary + '15' || '#00FF0015'};
  }
`;

function parseLink(link) {
  try {
    const parts = link.replace('https://github.com/', '').split('/pull/');
    return { repo: parts[0], number: '#' + parts[1] };
  } catch {
    return { repo: '', number: '' };
  }
}

const doubled = [...pullRequestsData, ...pullRequestsData];

const PullRequests = () => {
  return (
    <Wrapper>
      <Inner>
        <PageChip>Open Source Contributions</PageChip>
        <HeroHeading>
          Playing with{' '}  <span>Large Codebases 🙌</span>
        </HeroHeading>

        <SectionHeader>
          <SectionTitle>
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354Z"/></svg>
            Recent Pull Requests
          </SectionTitle>
        </SectionHeader>

        <CardsViewport>
          <CardsTrack>
            {doubled.map((pr, i) => {
              const { repo, number } = parseLink(pr.link);
              return (
                <Card
                  key={i}
                  href={pr.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardTop>
                    <StatusBadge status={pr.status}>
                      <StatusDot status={pr.status} />
                      {pr.status.toUpperCase()}
                    </StatusBadge>
                    <ExternalIcon><FiExternalLink /></ExternalIcon>
                  </CardTop>
                  <CardTitle>{pr.title}</CardTitle>
                  <CardFooter>
                    <RepoPath>{repo}</RepoPath>
                    <PRNumber>{number}</PRNumber>
                  </CardFooter>
                </Card>
              );
            })}
          </CardsTrack>
        </CardsViewport>
      </Inner>
    </Wrapper>
  );
};

export default PullRequests;
