# Design Decisions

Use this page to document major architectural choices.

## Decision record template

```text
Title:
Status: proposed | accepted | rejected | superseded
Context:
Decision:
Alternatives considered:
Safety implications:
Operational implications:
Documentation impact:
Review date:
```

## Example decision: simulation-first development

Status: accepted

Context: Multi-agent flight behavior can be difficult to predict and unsafe to test prematurely.

Decision: All examples in this repository are simulation-first and documentation-first.

Alternatives considered: Hardware-first examples were rejected because they increase safety and misuse risk.

Safety implications: Encourages controlled learning, repeatable scenarios, and reviewable logs.

Documentation impact: Examples focus on schemas, simulated telemetry, diagrams, and conceptual workflows.
