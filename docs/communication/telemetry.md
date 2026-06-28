# Telemetry

Telemetry is the stream of state observations emitted by agents and system components.

## Common telemetry fields

- Timestamp
- Mission identifier
- Agent identifier
- Position
- Velocity
- Orientation
- Battery state
- Health status
- Communication status
- Current task
- Safety flags

## Telemetry quality

Useful telemetry should be:

- Timestamped
- Consistent
- Validated
- Replayable
- Linked to mission context
- Clear about simulated versus real-world origin

## Replay and review

Telemetry should support replay so reviewers can understand what happened, when it happened, and why the system transitioned between states.

## Privacy and governance

Telemetry can contain sensitive information if it includes locations, images, identifiers, or environmental observations. A responsible system should minimize collection, define retention, and document access controls.
