# Failsafe Patterns

Failsafe patterns define safer responses to abnormal conditions.

## Pattern: Pause simulation

Trigger: Constraint violation, unexpected state, missing agent heartbeat, or human review request.

Response: Pause the simulation and record event context.

## Pattern: Safe state transition

Trigger: Agent health changes from nominal to degraded.

Response: Remove the agent from active task allocation and transition it to a non-task state in simulation.

## Pattern: Human review gate

Trigger: Scenario includes new autonomy behavior or unresolved risk.

Response: Require documented review before continuing.

## Pattern: Boundary alert

Trigger: Agent approaches a defined simulated boundary.

Response: Log warning and stop the scenario if threshold is crossed.

## Pattern: Communication degradation

Trigger: Message delay or loss exceeds threshold.

Response: Reduce coordination complexity, stop reassignment, or pause simulation depending on scenario rules.
