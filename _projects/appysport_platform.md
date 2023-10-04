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
The Appysport platform aggregated various sports marketplaces, including watersports, tennis (discontinued at the end of 2019), and fitness. Shopify served as the hosting platform for data storage and the display of services, such as classes, lessons, rentals, etc., using a custom Liquid template. It also facilitated the checkout process.

To efficiently manage data integration between the data provider Anybuddy and Shopify, we developed an ETL (Extract, Transform, Load) system using Elixir. This ETL system was meticulously designed to be fast, lightweight, fault-tolerant, and capable of mitigating Shopify API rate limits. Leveraging Elixir's built-in scheduler, we established an integrated CRON service for seamless task scheduling.

For managing booking-related follow-up emails, including confirmations to customers/partners, cancellations, and instructions, we utilized a Ruby-on-Rails application. Within this system, we designed a custom Domain-Specific Language (DSL) to simplify the configuration of automated email workflows and their seamless integration with Sendgrid.
