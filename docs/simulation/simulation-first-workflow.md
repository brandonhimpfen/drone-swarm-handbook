# Simulation-First Workflow

A simulation-first workflow treats simulation as the primary environment for learning, testing, documentation, and review.

## Workflow

1. Define the mission concept.
2. Define agent and environment assumptions.
3. Create a simulation scenario.
4. Run baseline behavior.
5. Introduce controlled failure modes.
6. Review telemetry and logs.
7. Update documentation.
8. Repeat.

## Why simulation-first?

- Safer learning environment
- Repeatable scenarios
- Lower cost
- Better observability
- Easier failure-mode testing
- Clearer documentation artifacts

## Scenario documentation

Each scenario should document:

- Purpose
- Agent count
- Environment assumptions
- Initial positions
- Constraints
- Expected behavior
- Stop conditions
- Review checklist

## Simulation review checklist

- Were all agents initialized correctly?
- Were constraints enforced?
- Were safety events logged?
- Did task allocation behave as expected?
- Did communication delay affect behavior?
- Were failure modes handled safely?
- Is the scenario reproducible?
