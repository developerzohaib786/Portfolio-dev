import React from 'react';
import styled from 'styled-components';
import { FiExternalLink, FiAward, FiCalendar, FiClock } from 'react-icons/fi';
import hackathonsData from '../../data/hackathons.js';

const Section = styled.section`
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
  border: 1px solid ${({ theme }) => theme.primary || '#00FF00'};
  color: ${({ theme }) => theme.primary || '#00FF00'};
  font-size: 11px;
  font-family: monospace;
  letter-spacing: 0.12em;
  padding: 4px 12px;
  border-radius: 4px;
  margin-bottom: 24px;
`;

const Heading = styled.h1`
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 700;
  line-height: 1.1;
  color: ${({ theme }) => theme.text_primary || '#fff'};
  margin: 0 0 16px;

  span {
    color: ${({ theme }) => theme.primary || '#00FF00'};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.card || '#171721'};
  border: 1px solid ${({ theme }) => theme.card_border || '#2a2a2a'};
  border-radius: 16px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 0;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.primary || '#00FF00'};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.primary + '20' || '#00FF0020'},
                0 8px 32px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const TrophyIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: ${({ theme }) => theme.primary + '18' || '#00FF0018'};
  border: 1px solid ${({ theme }) => theme.primary + '30' || '#00FF0030'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
`;

const PlaceBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-family: monospace;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 4px 10px;
  border-radius: 6px;
  background: ${({ theme }) => theme.primary + '18' || '#00FF0018'};
  border: 1px solid ${({ theme }) => theme.primary + '40' || '#00FF0040'};
  color: ${({ theme }) => theme.primary || '#00FF00'};
`;

const CardTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary || '#fff'};
  margin: 0 0 6px;
  line-height: 1.3;
`;

const Organizer = styled.p`
  font-size: 12px;
  font-family: monospace;
  color: ${({ theme }) => theme.text_secondary || '#888'};
  margin: 0 0 16px;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary || '#888'};

  svg {
    opacity: 0.6;
    width: 13px;
    height: 13px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.card_border || '#2a2a2a'};
  margin: 16px 0;
`;

const Description = styled.p`
  font-size: 13.5px;
  color: ${({ theme }) => theme.text_secondary || '#aaa'};
  line-height: 1.65;
  margin: 0 0 20px;
  flex: 1;
`;

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  font-size: 11px;
  font-family: monospace;
  padding: 3px 9px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.card_border || '#333'};
  color: ${({ theme }) => theme.text_secondary || '#aaa'};
  background: transparent;
`;

const LinksRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: auto;
`;

const LinkBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 7px;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s;
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.35 : 1};
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'auto'};
`;

const PrimaryLink = styled(LinkBtn)`
  background: ${({ theme }) => theme.primary || '#00FF00'};
  color: #000;
  border: 1px solid transparent;

  &:hover {
    opacity: 0.85;
  }
`;

const SecondaryLink = styled(LinkBtn)`
  background: transparent;
  color: ${({ theme }) => theme.primary || '#00FF00'};
  border: 1px solid ${({ theme }) => theme.primary || '#00FF00'};

  &:hover {
    background: ${({ theme }) => theme.primary + '15' || '#00FF0015'};
  }
`;

const Hackathons = () => {
  return (
    <Section>
      <Inner>
        <PageChip>HACKATHONS AND COMPETITIONS</PageChip>
        <Heading>
          Hackathon {' '} <span>Wins 🏆</span>
        </Heading>
        <Grid>
          {hackathonsData.map((h, i) => (
            <Card key={i}>
              <CardHeader>
                <TrophyIcon>🏆</TrophyIcon>
                <PlaceBadge>
                  <FiAward size={11} />
                  {h.place}
                </PlaceBadge>
              </CardHeader>

              <CardTitle>{h.title}</CardTitle>
              <Organizer>{h.organizer}</Organizer>

              <MetaRow>
                <MetaItem><FiCalendar />{h.date}</MetaItem>
                <MetaItem><FiClock />{h.duration}</MetaItem>
              </MetaRow>

              <Divider />

              <Description>{h.description}</Description>

              <TagsRow>
                {h.tags.map((tag, j) => <Tag key={j}>{tag}</Tag>)}
              </TagsRow>

              <LinksRow>
                {h.liveLink && (
                  <PrimaryLink href={h.liveLink} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink size={12} />
                    View Live Demo
                  </PrimaryLink>
                )}
                <SecondaryLink
                  href={h.certificateLink || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  disabled={!h.certificateLink}
                >
                  View Certificate
                </SecondaryLink>
              </LinksRow>

              {/* {h.liveLink && (
                <ReadMoreBtn as="a" href={h.liveLink} target="_blank" rel="noopener noreferrer" style={{ marginTop: 12, marginBottom: 0 }}>
                  Read More →
                </ReadMoreBtn>
              )} */}
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};

export default Hackathons;
