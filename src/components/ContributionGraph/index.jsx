import React from 'react';
import styled from 'styled-components';

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
  width: 100%;
`;

const GithubCard = styled.div`
  background: #0d1117; /* GitHub Dark Mode Background */
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 16px;
  color: #e6edf3;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 16px;
  
  .count {
    font-weight: 400;
  }
  
  .settings {
    font-size: 12px;
    color: #8b949e;
    cursor: pointer;
    &:hover { color: #58a6ff; }
  }
`;

const GraphWrapper = styled.div`
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;

const StyledGraphImg = styled.img`
  width: 100%;
  height: auto;
  filter: invert(0); /* Adjust if using different external providers */
`;

const Legend = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  font-size: 12px;
  color: #8b949e;

  .learn-more {
    &:hover { text-decoration: underline; cursor: pointer; }
  }

  .legend-scale {
    display: flex;
    align-items: center;
    gap: 4px;
    
    span { margin: 0 4px; }
  }
`;

const ColorBox = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: ${props => props.color};
`;

const StatsImage = styled.img`
  width: 100%;
  max-width: 480px;
  height: auto;
  align-self: center;
  border-radius: 12px;
  border: 1px solid #30363d;
  padding-bottom: 68px;
`;

const ContributionGraph = () => {
    return (
        <OuterContainer>
            <GithubCard>
                <Header>
                    <span className="count">723 contributions in the last year</span>
                    <span className="settings">Contribution settings ▼</span>
                </Header>

                <GraphWrapper>
                    {/* Using your existing API but wrapped in a GitHub-styled container */}
                    <StyledGraphImg
                        src="https://ghchart.rshah.org/39d353/developerzohaib786"
                        alt="GitHub Contributions"
                        style={{ zIndex: 2, position: 'relative' }}
                    />

                    <Legend>
                        <span className="learn-more">Learn how we count contributions</span>
                        <div className="legend-scale">
                            <span>Less</span>
                            <ColorBox color="#161b22" />
                            <ColorBox color="#0e4429" />
                            <ColorBox color="#006d32" />
                            <ColorBox color="#26a641" />
                            <ColorBox color="#39d353" />
                            <span>More</span>
                        </div>
                    </Legend>
                </GraphWrapper>
            </GithubCard>

            {/* Profile Streak Stats */}
            <StatsImage
                src="https://camo.githubusercontent.com/f13a446d32b5591f6dd9287ebb4c434db8e32f1c893f977660dddce060ad0883/68747470733a2f2f6e69727a616b2d73747265616b2d73746174732e76657263656c2e6170702f3f757365723d646576656c6f7065727a6f68616962373836267468656d653d6461726b26686964655f626f726465723d66616c7365"
                alt="GitHub Streak"
            />
        </OuterContainer>
    );
};

export default ContributionGraph;