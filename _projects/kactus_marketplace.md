---
title: Kactus Marketplace
experience: kactus
stacks:
  - name: Back-end
    label: primary
    list:
      - Ruby-on-Rails
      - Sidekiq
      - Postgresql
      - Redis
  - name: Front-end
    label: warning
    list:
      - Hotwire (Turbo / Stimulus)
      - View Components
      - ViteJS
      - Bootstrap
  - name: Testing
    label: success
    list:
      - Unit/Request Testing (RSpec)
      - E2E (Capybara)
  - name: Third Party Applications
    label: danger
    list:
      - Algolia
      - Segment
      - Salesforce
      - Intercom
      - Sendgrid
  - name: Ops Tools
    label: info
    list:
      - Heroku
      - Github Actions
      - New Relic
      - Sentry
  - name: Development Tools
    label: default
    list:
      - Notion
      - Git
      - Github
---
The Kactus web application is a Ruby-on-Rails monolith, containing code segments from its initial version developed in 2015. We follow the 'boring stack' principle, relying on well-established technologies and frameworks to optimize speed to market and ensure the application's long-term maintainability.

In the fast-paced world of marketplace startups, time-to-market is a critical factor, shaping our development cycle to expedite feature releases. We employ the Github Flow methodology for shipping features and bug fixes to production, often making multiple daily releases. Heroku Review Apps are instrumental in testing features within a production-like environment before merging them into the main branch. To streamline the development process further, the team relies on Github Actions, automating the CI/CD pipeline and enabling seamless deployments to production.

Our choice to utilize Hotwire (Stimulus/Turbo) over other prevalent front-end frameworks like React or VueJS is driven by the need to expedite feature delivery. This approach eliminates the overhead of maintaining a separate front-end application, enabling us to ship features more swiftly.

Ensuring quality is a fundamental aspect of our development process, and we utilize a range of tools to guarantee the dependability of our codebase, achieving a test coverage of over 80%. We do not merge any pull request unless it successfully passes through our rigorous testing suite, static code analysis, and a comprehensive code review process.
