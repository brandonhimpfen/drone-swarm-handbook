# Safety Principles

Safety is a core design concern for drone swarm systems.

## Principle 1: Simulation before physical systems

All learning and examples should start in simulation. Simulation allows safer testing, repeatability, and better review.

## Principle 2: Human accountability

Autonomous behavior should remain accountable to human-defined constraints, review, and oversight.

## Principle 3: Explicit constraints

Safety constraints should be written down, validated, and logged.

Examples:

- Boundaries
- Maximum duration
- Minimum separation
- Agent health requirements
- Communication requirements
- Review gates

## Principle 4: Graceful degradation

A swarm should be designed to move toward safer states when assumptions fail.

## Principle 5: Observability

System behavior should be observable through telemetry, logs, event history, and review artifacts.

## Principle 6: Privacy by design

Avoid unnecessary data collection. Document what is collected, why it is needed, where it is stored, and who can access it.

## Principle 7: Clear non-goals

Projects should clearly state what they do not support, especially unsafe, unlawful, or harmful uses.
