---
title: BookingSync Notification Center App
experience: bookingsync
stacks:
  - name: Back-end
    label: primary
    list:
      - Ruby-on-Rails
      - Postgresql
      - Redis
      - Sidekiq
  - name: Front-end
    label: warning
    list:
      - Bootstrap
      - HTML5 CSS3
      - SASS
      - Slim Templates
      - Liquid Templates
  - name: Testing
    label: success
    list:
      - TDD
      - RSpec
      - FactoryBot
      - CircleCI
  - name: Third Party Application
    label: danger
    list:
      - Mandrill/Mailchimp
      - Geocoder
  - name: Ops Tools
    label: info
    list:
      - Deis/Workflow
      - New Relic
      - Sentry
  - name: Development Tools
    label: default
    list:
      - Jira
      - Git
      - Github
      - Sublime
---
The Notification app is critical in the vacation rental process as it handles all the emailing of check-in and check-out details, contracts, payment reminders and other information to the travelers. It relies heavily on background jobs and real-time constraints. Being the application I worked the most on, it was released 2 years before I started working on it. I covered all parts of the app, including:
- Improve UX by reducing risks of typos (especially for email address errors
- Prevent emails from being sent twice by refactoring SQL queries
- Implement soft-deletion feature for all DB records for data recovery and audit
- Setup healthcheck that triggers alerts when delay sending notifications is too high
- Implement a "retry later" feature when Mandrill's servers are down
- Fix all warnings and stylecheck offenses
- Add pagination to index pages and remove n+1 queries to reduce request time
