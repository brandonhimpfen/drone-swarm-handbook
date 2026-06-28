# Task Allocation

Task allocation assigns work to agents based on mission needs and agent state.

## Static allocation

Tasks are assigned before the mission starts.

Advantages:

- Simple
- Predictable
- Easy to document

Limitations:

- Less adaptive
- May perform poorly when agents fail or conditions change

## Dynamic allocation

Tasks are assigned or reassigned during the mission.

Advantages:

- More adaptive
- Better for changing conditions

Limitations:

- Harder to test
- Requires stronger logging and safety monitoring

## Allocation inputs

- Agent health
- Battery state
- Current task
- Distance to simulated task region
- Communication status
- Safety constraints
- Mission priority

## Review questions

- What happens when an agent becomes unavailable?
- Can an agent reject a task for safety reasons?
- Is reassignment logged?
- Does task allocation respect human-defined constraints?
- Are stop conditions clear?
