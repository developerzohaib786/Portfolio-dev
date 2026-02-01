import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column; /* Ensure heading and list stack vertically */
  align-items: stretch;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  overflow: hidden;
  margin: 2rem 0;
`;

// const ImageSection = styled.div`
//   flex: 1;
//   background: ${({ theme }) => theme.card || '#232323'};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   min-width: 220px;
//   padding: 2rem;
// `;

// const StyledImage = styled.img`
//   width: 100%;
//   max-width: 200px;
//   border-radius: 12px;
//   box-shadow: 0 2px 12px rgba(0,0,0,0.15);
// `;

const ContentSection = styled.div`
  flex: 2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px; /* Added spacing below heading */
  color: ${({ theme }) => theme.text_primary || '#fff'};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const scrollLeft = keyframes`
  0% { transform: translateX(0%); } /* Changed from 100% to 0% for smoother infinite loop */
  100% { transform: translateX(-50%); } 
`;

const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }
`;

const PullRequestsRow = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 1.5rem;
`;

const AnimatedList = styled.div`
  display: flex;
  width: max-content;
  /* Speed adjusted from 50s to 200s for a slower, readable pace */
  animation: ${({ direction }) => direction === 'left' ? scrollLeft : scrollRight} 100s linear infinite;
  align-items: center;
  &:hover {
    animation-play-state: paused;
  }
`;

const PullRequestItem = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.card || '#232323'};
  border-radius: 8px;
  color: ${({ theme }) => theme.text || '#fff'};
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  margin-right: 1.5rem;
  padding: 0.5rem 1.2rem 0.5rem 0.7rem;
  font-size: 1rem;
  min-width: 180px;
  border: 1px solid #222;
`;

const RepoAvatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  margin-right: 0.7rem;
  background: #181818;
  border: 1px solid #333;
`;

const SubTitle = styled.h3`
  font-size: 24px;
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text_secondary || '#aaa'};
`;

// const RepoName = styled.span`
//   font-weight: 600;
//   color: #fff;
//   margin-right: 0.5rem;
// `;

const RepoTag = styled.span`
  background: #181818;
  color: #fff;
  border-radius: 6px;
  padding: 0.1rem 0.7rem;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  border: 1px solid #333;
`;

const pullRequests = [
  {
    id: 1,
    name: "apache/polaris-tools",
    link: "https://github.com/apache/polaris-tools/pull/115",
    logo: "https://media.licdn.com/dms/image/sync/v2/D4E27AQFzuyZNqIKOkw/articleshare-shrink_800/articleshare-shrink_800/0/1725260591788?e=2147483647&v=beta&t=MDLsCfzNFR8EG5IRoZJNy5yf8mGKLaiwoqqvNL1sbJo"
  },
  {
    id: 2,
    name: "apache/polaris-tools",
    link: "https://github.com/apache/polaris-tools/pull/114",
    logo: "https://media.licdn.com/dms/image/sync/v2/D4E27AQFzuyZNqIKOkw/articleshare-shrink_800/articleshare-shrink_800/0/1725260591788?e=2147483647&v=beta&t=MDLsCfzNFR8EG5IRoZJNy5yf8mGKLaiwoqqvNL1sbJo"
  },
  {
    id: 3,
    name: "apache/doris-website",
    link: "https://github.com/apache/doris-website/pull/3208",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQE6udryVsnvrw/company-logo_200_200/B56ZdDL9UYG0AI-/0/1749178898304/doris_apache_logo?e=2147483647&v=beta&t=0ERdCfbxY_VX2mOsE5-5YfzAOFBexTBUqi4i15cY9yE"
  },
  {
    id: 4,
    name: "apache/superset",
    link: "https://github.com/apache/superset/pull/36197",
    logo: "https://images.ctfassets.net/ykljvmtfxwdz/2RpVpksd9zAQIHIozAjPoV/dffe3ffc5d31383f606dfc18c8778ef2/superset_thumb.jpg?w=1109&h=740&fl=progressive&q=80&fm=jpg"
  },
  {
    id: 5,
    name: "apache/superset",
    link: "https://github.com/apache/superset/pull/36085",
    logo: "https://images.ctfassets.net/ykljvmtfxwdz/2RpVpksd9zAQIHIozAjPoV/dffe3ffc5d31383f606dfc18c8778ef2/superset_thumb.jpg?w=1109&h=740&fl=progressive&q=80&fm=jpg"
  },
  {
    id: 6,
    name: "processing/p5.js-web-editor",
    link: "https://github.com/processing/p5.js-web-editor/pull/3570",
    logo: "https://happycoding.io/tutorials/p5js/images/hello-world-3.png"
  },
  {
    id: 7,
    name: "mudasarmajeed5/links-hub",
    link: "https://github.com/mudasarmajeed5/links-hub/pull/13",
    logo: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
  },
];

const PullRequests = () => {
  return (
    <Container>
      <ContentSection>
        <Title>
          <RepoAvatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Google_Summer_of_Code_sun_logo_2022.svg/960px-Google_Summer_of_Code_sun_logo_2022.svg.png" alt="repo" /> <span>Open Source Contribution</span>
        </Title>
        <SubTitle>Playing with Large Codebases 🙌</SubTitle>
        <PullRequestsRow>
          <AnimatedList direction="left">
            {Array(10).fill(pullRequests).flat().map((pr, idx) => (
              <a key={pr.id + '-row1-' + idx} href={pr.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <PullRequestItem>
                  <RepoAvatar src={pr.logo} alt="repo" />
                  <RepoTag>@{pr.name}</RepoTag>
                </PullRequestItem>
              </a>
            ))}
          </AnimatedList>
        </PullRequestsRow>
      </ContentSection>
    </Container>
  );
};

export default PullRequests;