# Playwright-K6-UI-API-Performance

This repository contains tests for UI, API, and performance using Playwright and K6.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
  - [Playwright Tests](#playwright-tests)
  - [K6 Performance Tests](#k6-performance-tests)
- [Contributing](#contributing)
- [License](#license)


## Prerequisites

- [Node.js](https://nodejs.org/en/) (version 14 or later)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [Playwright](https://playwright.dev/)
- [K6](https://k6.io/)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rohitmanekar/playwright-k6-ui-api-performance.git
   cd playwright-k6-ui-api-performance

2. Install the dependencies:
   npm install

3. Install Playwright browsers:
   npx playwright install

4. Install K6:
   Follow the instructions on the K6 installation page to install K6 on your system.

  ## Running Tests
   ### Playwright Tests
   To run Playwright tests, use the following command:
     npx playwright test src/test/functional/searchProduct.spec.ts

### K6 Performance Tests
To run K6 performance tests, use the following command:
     k6 run src/test/performance/postapi.spec.js

     Replace postapi.spec.js with the appropriate test file you want to run.

     



   

