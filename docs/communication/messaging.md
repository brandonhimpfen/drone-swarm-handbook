# Messaging

Messaging allows agents, coordinators, simulators, and observers to exchange state and intent.

## Message categories

- Heartbeat
- Telemetry update
- Task assignment
- Task acknowledgement
- Constraint warning
- Safety event
- Simulation event
- Human review event

## Message design principles

- Keep messages small and explicit.
- Include timestamps.
- Include source and destination identifiers.
- Use stable event names.
- Separate commands from observations.
- Log safety-relevant messages.

## Example message shape

```json
{
  "type": "telemetry.update",
  "timestamp": "2026-01-01T12:00:00Z",
  "source": "agent-001",
  "missionId": "mission-demo-001",
  "position": {
    "x": 12.4,
    "y": 8.1,
    "z": 3.0
  },
  "status": "nominal"
}
```

## Safety-relevant message types

Safety-relevant messages should be prioritized and logged.

Examples:

- `safety.constraint_violation`
- `safety.minimum_separation_warning`
- `safety.agent_unavailable`
- `safety.human_review_required`
- `mission.stop_requested`
