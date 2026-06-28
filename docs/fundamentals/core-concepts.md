# Core Concepts

## Agent

An agent is an individual drone or simulated drone that has its own state, constraints, and behavior. In a swarm, each agent may track position, battery level, health, assigned task, communication status, and local observations.

## Swarm state

Swarm state is the combined state of all agents plus mission context. It may include formation status, task progress, communication quality, safety margins, and environmental constraints.

## Coordination

Coordination is the process that keeps agents aligned with the mission and with each other. It may include formation control, task assignment, collision avoidance, timing, and fallback behavior.

## Task allocation

Task allocation determines which agent should perform which task. Allocation can be static, where roles are assigned before the mission, or dynamic, where roles change based on conditions.

## Formation

A formation is a spatial arrangement of agents. Formations are useful for coverage, sensing, demonstration, inspection, and maintaining predictable relative positions.

## Consensus

Consensus is a method by which agents converge on shared information or decisions. In a swarm, consensus may be used for shared estimates, leader election, or group-level state.

## Collision avoidance

Collision avoidance is the set of constraints and behaviors that prevents unsafe proximity between agents, people, structures, or restricted spaces. It should be treated as a safety layer, not only a navigation feature.

## Communication topology

Communication topology describes how agents exchange information. Common models include star, mesh, peer-to-peer, and hierarchical topologies.

## Human-in-the-loop

Human-in-the-loop means a person remains part of the decision or supervision process. For higher-risk autonomy, human review, approval, and override are important design considerations.

## Failsafe

A failsafe is a predefined response to abnormal or unsafe conditions. Examples include holding position in simulation, ending a simulated mission, returning to a safe state, or requiring human review.
