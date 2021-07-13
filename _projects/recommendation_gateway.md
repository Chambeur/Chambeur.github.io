---
title: Recommendation Gateway
experience: decathlon
stacks:
  - name: Back-end
    label: primary
    list:
      - Elixir
      - Redis
  - name: Testing
    label: success
    list:
      - TDD/BDD (ESpec)
  - name: Ops Tools
    label: info
    list:
      - Google App Engine
      - Google Cloud Run
      - AppSignal
      - Github Actions
  - name: Development Tools
    label: default
    list:
      - Jira
      - Git
      - Github
      - Sublime
---
The Recommendation Gateway is designed to enable the Data Scientists to continuously apply their products recommendation models to the local ecommerce website. It consists of an endpoint where the Data Scientists bulk upload the products recommendation for every Decathlon Hong Kong member. When one of those members visit the ecommerce website homepage, a query is sent to the application API with the member unique identifier which responds with recommended products information.

The decision to request the Recommendation Gateway API from the frontend was made to improve the autonomy and therefore the delivery performance of the Hong Kong Decathlon Tech Team. The ecommerce website being developed by a separated team in the company's home country, the local team only has the hand on the frontend side.

The main challenges of the Recommendation Gateway were to provide a convenient way for the Data Scientists to maintain the uploaded data and to serve the products information with a low response time. The source of products information is a legacy internal API with an average response time of 2sec per product. Using functional programming with Elixir made parallelization straightforward to implement and using Redis performant I/O and Time To Live strategy for caching allowed us to reach an average response time of 800ms for 6 products per query.
