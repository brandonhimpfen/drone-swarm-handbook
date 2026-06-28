export interface Position {
  x: number;
  y: number;
  z: number;
}

export interface Velocity {
  vx: number;
  vy: number;
  vz: number;
}

export type AgentStatus = 'nominal' | 'degraded' | 'unavailable' | 'review-required';

export interface TelemetryRecord {
  timestamp: string;
  missionId: string;
  agentId: string;
  position: Position;
  velocity?: Velocity;
  batteryPercent?: number;
  status: AgentStatus;
  currentTask?: string;
  safetyFlags?: string[];
}
