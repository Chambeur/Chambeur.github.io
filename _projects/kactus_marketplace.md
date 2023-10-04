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
This application is a Ruby-on-Rails monolith with chunks of code from the initial version of the application that was built in 2015.
It leverage the "boring stack" principle by using battle-tested technologies and frameworks to optimize the time to market and the maintainability of the application.

Time to market is a key factor for a marketplace startup and therefore the development cycle is designed to ship features as fast as possible. We're using Github Flow to ship features and bug fixes to production multiple times a day, use Heroku Review Apps to test features in a production-like environment before merging them to the main branch. The team is using Github Actions to automate the CI/CD pipeline and deploy the application to production.

Using Hotwire (Stimulus / Turbo) instead of a front-end framework like React or VueJS allows us to ship features faster as we don't have to maintain a separate front-end application.
