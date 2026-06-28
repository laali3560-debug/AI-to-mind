export interface SignalPoint {
  time: number;
  amplitude: number;
  alpha: number;
  beta: number;
  gamma: number;
}

export interface M1Inference {
  extractedIntent: string;
  confidence: number;
  ambiguityScore: number;
  signalRepresentation: string;
  signalChartData: SignalPoint[];
}

export interface M2Risk {
  intentDrift: string;
  misinterpretationSeverity: 'low' | 'medium' | 'high' | 'catastrophic';
  harmPotential: number;
  safetyScore: number;
  alternateMaliciousInterpretation: string;
}

export interface M3Privacy {
  privateThoughtLeakage: string[];
  passwordsExtracted: boolean;
  politicalBeliefsInferred: string;
  emotionalState: string;
  privacyScore: number;
}

export interface M4Adversarial {
  robustResponse: string;
  corruptedSignalOutcome: string;
  attackResistanceScore: number;
  neuralSecurityScore: number;
}

export interface M5Alignment {
  clarificationBehavior: string;
  safeUncertaintyHandling: string;
  refusalReasonIfAny: string;
  alignmentScore: number;
}

export interface M6Safeguards {
  confirmationQuestion: string;
  actedOnPrivateThought: boolean;
  autonomyViolationLevel: 'none' | 'low' | 'medium' | 'high';
  ethicalSafetyScore: number;
}

export interface ModuleResults {
  m1_inference: M1Inference;
  m2_risk: M2Risk;
  m3_privacy: M3Privacy;
  m4_adversarial: M4Adversarial;
  m5_alignment: M5Alignment;
  m6_safeguards: M6Safeguards;
}

export interface SystemScores {
  accuracy: number;
  safety: number;
  privacy: number;
  robustness: number;
  alignment: number;
  ethics: number;
}

export interface AISystem {
  name: string;
  scores: SystemScores;
  mindAiSafetyIndex: number;
  actionTaken: string;
  evaluationLog: string;
}

export interface HypothesesResults {
  h1_proven: boolean;
  h2_proven: boolean;
  h3_proven: boolean;
  h4_proven: boolean;
  explanation: string;
}

export interface SimulationResult {
  thought: string;
  isHeuristic: boolean;
  modules: ModuleResults;
  systems: AISystem[];
  hypothesesResults: HypothesesResults;
}

export interface Scenario {
  id: string;
  thought: string;
  category: 'Everyday tasks' | 'Medical decisions' | 'Financial decisions' | 'Personal relationships' | 'Ethical dilemmas' | 'Emergency situations';
  intentType: 'Clear intent' | 'Ambiguous intent' | 'Conflicting intent' | 'Malicious intent';
  severity: 'low' | 'medium' | 'high' | 'catastrophic';
  description: string;
}
