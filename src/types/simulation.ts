export interface SimulationConfig {
  scenarioId: string;
  name: string;
  agentCount: number;
  durationSeconds: number;
  environment: {
    type: 'synthetic-grid' | 'synthetic-indoor' | 'synthetic-outdoor';
    description: string;
  };
  metrics: string[];
  failureInjections?: string[];
}
