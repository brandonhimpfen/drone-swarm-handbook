# Coordination Models

Coordination determines how agents work together.

## Centralized coordination

A central coordinator tracks swarm state and assigns tasks. This is easier to audit and explain, but it can be less resilient if the coordinator fails.

Useful for:

- Education
- Simulation
- Small research prototypes
- Systems requiring clear supervision

## Decentralized coordination

Agents coordinate through local rules and peer communication. This can improve resilience, but it is harder to test and explain.

Useful for:

- Distributed sensing research
- Robustness studies
- Multi-agent algorithm experiments

## Hierarchical coordination

Agents are grouped under leaders or sub-coordinators. This can reduce communication complexity and support larger simulated systems.

Useful for:

- Large simulations
- Clustered tasks
- Region-based allocation

## Hybrid coordination

A human or central planner defines mission intent, while agents make local decisions within strict constraints.

Useful for:

- Safety-conscious autonomy
- Supervised simulation
- Systems with reviewable autonomy boundaries
