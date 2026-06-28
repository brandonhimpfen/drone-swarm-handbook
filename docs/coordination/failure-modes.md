# Failure Modes

Drone swarm systems can fail at the agent, communication, coordination, simulation, or governance layer.

## Agent-level failures

- Simulated battery depletion
- Sensor uncertainty
- Lost state update
- Task timeout
- Agent unavailable

## Communication failures

- Delayed messages
- Dropped messages
- Conflicting state
- Duplicate events
- Network partition

## Coordination failures

- Conflicting task assignments
- Formation instability
- Unsafe proximity in simulation
- Coordinator unavailable
- Incomplete state convergence

## Human oversight failures

- Missing review step
- Unclear stop authority
- Poorly documented assumptions
- Inadequate risk assessment

## Documentation pattern

For each failure mode, record:

- Trigger
- Detection method
- Expected safe response
- Logging requirement
- Human review requirement
- Known limitations
