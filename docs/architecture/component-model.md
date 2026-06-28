# Component Model

## Agent

The agent represents a single drone or simulated drone.

Common fields:

- Agent identifier
- Position
- Velocity
- Orientation
- Battery state
- Health state
- Communication status
- Assigned task
- Local observations

## Mission

The mission represents the intended work of the swarm.

Common fields:

- Mission identifier
- Objective
- Environment
- Constraints
- Agent count
- Tasks
- Start condition
- Stop condition
- Review requirements

## Task

A task is a unit of work assigned to one or more agents.

Examples:

- Hold formation point
- Survey region in simulation
- Relay simulated telemetry
- Return to safe state
- Await human review

## Event

An event records something that happened in the system.

Examples:

- Agent joined
- Agent left
- Task assigned
- Constraint violation detected
- Simulation paused
- Human review requested

## Policy

A policy defines rules the system should follow.

Examples:

- Minimum separation distance
- Maximum mission duration
- Maximum agent count in simulation
- Required review before export
- Fail-safe transition rules
