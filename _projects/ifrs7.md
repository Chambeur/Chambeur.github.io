---
title: IFRS7 Risk Calculation
experience: liptonfit
page_break: true
stacks:
  - name: Back-end
    label: primary
    list:
      - Java
      - Sybase
      - Struts
      - Hibernate
  - name: Front-end
    label: warning
    list:
      - JSP
  - name: Testing
    label: success
    list:
      - JUnit
  - name: Development Tools
    label: default
    list:
      - Jira
      - SVN
      - Eclipse
---
The IFRS7 notation is a value from 1(good) to 3(bad) that estimates the risk level of each asset of a financial portfolio (hedge fund). The value is weight by rules like for example the nationality of the fund or the type of asset. Each fund holder can choose the rules they want to apply.

The existing business core software had a Service Oriented Architecture so the feature was implemented as a web service and "plug" in the existing system. The service was triggered by a UI through an API. The UI also allowed the user to create and to weight rules to a portfolio. A specific algorithm was designed to reduce databases I/O and avoid unnecessary operations.
