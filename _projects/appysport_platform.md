---
title: Appysport Platform
experience: appysport
stacks:
  - name: Back-end
    label: primary
    list:
      - Ruby-on-Rails
      - Elixir
      - Postgresql
  - name: Front-end
    label: warning
    list:
      - VueJS
      - NuxtJS
      - Liquid Templates
  - name: Testing
    label: success
    list:
      - TDD
      - RSpec/ESpec
  - name: Third Party Applications
    label: danger
    list:
      - Shopify GraphQL API
      - Anybuddy
      - Auth0
      - Sendgrid
  - name: Admin Tools
    label: info
    list:
      - KintoHub
      - Sentry
      - Cloudflare
  - name: Development Tools
    label: default
    list:
      - Jira
      - Trello
      - Git
      - Github
      - Sublime
---
The Appysport platform aggregates multiple "macro-services" organised around multiple sports such as watersports, tennis (shutdown end 2019) and fitness. Shopify is used to host data, display the services (classes, lessons, rentals, etc) rendered with a custom Liquid template and handle the checkout process.

An ETL built with Elixir served as bridge between the data provider Anybuddy and Shopify. It was designed to be fast, lightweight, fault-tolerant and mitigate Shopify API rate limits. Elixir pre-built scheduler served as an integrated CRON service.

Bookings' followup emails (confirmation to the customer/partner, cancelation, instructions, etc) was done with a Ruby-on-Rails application. A custom Domain Specific Language (DSL) was designed to simplify the configuration of automated emails and their integration with Sendgrid.
