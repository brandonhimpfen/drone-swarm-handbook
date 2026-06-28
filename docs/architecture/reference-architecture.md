# Reference Architecture

A drone swarm system can be described as a layered architecture. The layers separate mission intent, coordination logic, agent behavior, communication, simulation, safety, and observability.

```text
Mission Intent
    ↓
Mission Planner
    ↓
Swarm Coordinator
    ↓
Agent Controllers
    ↓
Simulation / Flight Interface
    ↓
Telemetry, Logging, Safety Review
```

## Components

### Mission planner

The mission planner defines the high-level objective, constraints, environment assumptions, success criteria, and stop conditions.

### Swarm coordinator

The swarm coordinator translates mission intent into group-level behavior. It may handle task allocation, formation state, shared constraints, and reassignment logic.

### Agent controller

Each agent controller handles the local behavior of an individual drone. It interprets assigned tasks, tracks local state, and reports telemetry.

### Communication layer

The communication layer handles messages between agents, the coordinator, and the ground station or simulation system.

### Simulation layer

The simulation layer provides a controlled environment for testing behavior before real-world consideration.

### Safety monitor

The safety monitor checks constraints such as separation, boundaries, mission duration, agent health, and abnormal state transitions.

### Observability layer

Observability includes logs, telemetry, event history, simulation replay, dashboards, and review artifacts.

## Design principles

- Make mission constraints explicit.
- Prefer simulation before physical testing.
- Separate safety logic from mission logic.
- Log decisions and state transitions.
- Design for graceful degradation.
- Keep human supervision visible in the system model.
