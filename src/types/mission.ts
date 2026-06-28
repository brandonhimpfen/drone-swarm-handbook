export type RepositoryMode = 'simulation' | 'documentation' | 'review';

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface AgentDefinition {
  agentId: string;
  role: string;
  initialPosition?: Vector3;
}

export interface MissionConstraints {
  minimumSeparationMeters: number;
  maxDurationSeconds: number;
  humanReviewRequired: boolean;
  notes?: string;
}

export interface MissionTask {
  taskId: string;
  type: string;
  assignedAgents: string[];
  description?: string;
}

export interface MissionDefinition {
  missionId: string;
  name: string;
  mode: RepositoryMode;
  environment: {
    type: 'synthetic' | 'simulated' | 'controlled-test-description';
    description: string;
  };
  agents: AgentDefinition[];
  constraints: MissionConstraints;
  tasks: MissionTask[];
  stopConditions: string[];
}
