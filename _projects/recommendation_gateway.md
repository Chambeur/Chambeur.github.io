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
The Recommendation Gateway was developed to empower Data Scientists with the continuous application of their product recommendation models on the local e-commerce website. This system comprises an endpoint where Data Scientists can efficiently bulk-upload product recommendations for every customer member of Decathlon Hong Kong. When a Decathlon Hong Kong member visits the e-commerce website's homepage, a query is transmitted to the application's API, accompanied by the member's unique identifier, which elicits a response containing personalized product recommendations.

The decision to initiate requests to the Recommendation Gateway API from the frontend was driven by the objective of enhancing the autonomy and, consequently, the delivery performance of the Hong Kong Decathlon Tech Team. Since the development of the e-commerce website is undertaken by a separate team based in the company's home country, the local team primarily focuses on frontend development.

The primary challenges encountered in developing the Recommendation Gateway revolved around providing Data Scientists with an efficient means of maintaining uploaded data and ensuring speedy retrieval of product information. The source of product information originates from a legacy internal API, which typically yields an average response time of 2 seconds per product query. Leveraging functional programming with Elixir facilitated straightforward parallelization, and the utilization of Redis, combined with an effective caching strategy, significantly improved I/O performance and reduced the average response time to a remarkable 800 milliseconds for each query involving up to 6 products.
