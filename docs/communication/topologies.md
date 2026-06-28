# Communication Topologies

## Star topology

Agents communicate with a central coordinator.

Advantages:

- Simple
- Easy to log
- Good for educational simulation

Limitations:

- Central point of failure
- May not scale well

## Mesh topology

Agents communicate with nearby peers.

Advantages:

- More distributed
- Can support local coordination

Limitations:

- Harder to verify
- More complex state management

## Hierarchical topology

Agents are grouped under cluster coordinators.

Advantages:

- Supports larger systems
- Reduces communication complexity

Limitations:

- Requires careful role management
- Cluster failure can affect part of the swarm

## Event bus topology

Agents publish and subscribe to events in simulation.

Advantages:

- Useful for software prototypes
- Supports observability

Limitations:

- May hide timing assumptions
- Needs clear event contracts
