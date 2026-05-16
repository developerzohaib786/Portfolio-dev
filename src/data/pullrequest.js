// data.js

const pullRequestsData = [
  {
    "title": "Desktop: Fixes #11054: Incorrect cursor position when rendering long note with Katex formulas",
    "link": "https://github.com/laurent22/joplin/pull/14908",
    "status": "Closed",
    "description": "Fixes an issue where the text cursor would jump to an incorrect position or misalign when editing or rendering exceptionally long notes that contain numerous KaTeX mathematical formulas in the CodeMirror editor.",
    "tags": ["frontend", "desktop", "typescript", "codemirror", "bugfix"]
  },
  {
    "title": "Plugins: Add API support for retrieving note geolocation metadata",
    "link": "https://github.com/laurent22/joplin/pull/14900",
    "status": "Merged",
    "description": "Enhances the Joplin plugin data API layer by exposing methods to query and retrieve geolocation attributes (latitude, longitude, altitude) associated with specific notes.",
    "tags": ["backend", "api", "plugins", "typescript"]
  },
  {
    "title": "Enhancement: Integrate streaming responses for local Ollama models",
    "link": "https://github.com/alondmnt/joplin-plugin-jarvis/pull/69",
    "status": "Merged",
    "description": "Implements real-time token streaming for chat responses generated via the local Ollama provider endpoint, improving the interactive UI experience within the Jarvis assistant panel.",
    "tags": ["frontend", "api", "typescript", "ai-llm"]
  },
  {
    "title": "Fix: Handle markdown parsing exceptions for deeply nested bullet lists",
    "link": "https://github.com/alondmnt/joplin-plugin-jarvis/pull/66",
    "status": "Merged",
    "description": "Resolves an application crash/freeze issue triggered when the plugin attempts to parse and build context from notes containing deeply recursive or incorrectly indented markdown bullet point hierarchies.",
    "tags": ["backend", "typescript", "parser", "bugfix"]
  },
  {
    "title": "Feat: Add configurable temperature and top_p parameters for OpenAI model endpoint",
    "link": "https://github.com/alondmnt/joplin-plugin-jarvis/pull/70",
    "status": "Open",
    "description": "Introduces UI configuration settings within the plugin options page allowing users to adjust the LLM generation hyperparameters (`temperature` and `top_p`) for customized response creativity.",
    "tags": ["frontend", "backend", "typescript", "api"]
  },
  {
    "title": "Add initial implementation of Polaris Catalog compliance validation suite",
    "link": "https://github.com/apache/polaris-tools/pull/136",
    "status": "Merged",
    "description": "Introduces a script-based tooling engine designed to execute integration test suites against deployed instances to verify strict adherence to Apache Polaris catalog spec standards.",
    "tags": ["backend", "python", "testing", "devops"]
  },
  {
    "title": "Fix docker-compose environment variables fallback for localized network setups",
    "link": "https://github.com/apache/polaris-tools/pull/114",
    "status": "Closed",
    "description": "Corrects a structural initialization issue in the local containerized orchestration setups where service endpoints failed to resolve due to missing fallback environmental string variables.",
    "tags": ["devops", "docker", "configuration"]
  },
  {
    "title": "Docs: Update CLI architecture reference guides and deployment step-by-step instructions",
    "link": "https://github.com/apache/polaris-tools/pull/151",
    "status": "Open",
    "description": "Refactors documentation files, adding comprehensive execution flags, example parameter usage blocks, and missing setup prerequisites for running the polaris-tools utility natively.",
    "tags": ["documentation", "markdown"]
  }
];

module.exports = pullRequestsData;