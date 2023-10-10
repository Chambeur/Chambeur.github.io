---
title: TripAdvisor Integration App
experience: bookingsync
stacks:
  - name: Back-end
    label: primary
    list:
      - Ruby-on-Rails
      - Postgresql
      - Redis
      - Sidekiq
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
      - TripAdvisor Private API
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
This application helps any property manager of BookingSync to push to TripAdvisor platform all the availabilities of their rentals and the estimated price per day.
However, the final price paid by the traveler was sometimes different than the direct price computed by BookingSync because of delays between refreshes of rental prices and discounts related to the length of stay.

I worked closely with the TripAdvisor technical team to implement an API endpoint based on their specifications. This endpoint was later used by TripAdvisor to display on their website the live rate for a rental according to the length of stay and the number of guests. The estimated number of requests during a peak day was 7,500 and so far, this endpoint has respected the SLA defined by TripAdvisor:
- maintain less than 500ms of median response time
- maintain less than 1.5s of response time for 90% of requests
- return a successful response for at least 99.9% of unique requests
