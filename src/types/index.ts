// 수업 단계 타입
export type LessonStep = 
  | 'warmup'      // 도입 (5분)
  | 'concept'     // 전개1 - 개념 이해 (15분)
  | 'game'        // 전개2-A - 분류 게임 (10분)
  | 'practice'    // 전개2-B - 문장 변환 (10분)
  | 'production'  // 정리/발표 (15분)
  | 'wrapup';     // 마무리 (5분)

// 수업 단계 정보
export interface LessonStepInfo {
  id: LessonStep;
  title: string;
  duration: number; // 분 단위
  description: string;
}

// 문장 카드 타입
export interface SentenceCard {
  id: string;
  text: string;
  type: 'be' | 'verb';
  explanation: string;
}

// 문장 변환 타입
export interface SentenceTransform {
  original: string;
  negative: string;
  question: string;
  type: 'be' | 'verb';
}

// 게임 상태 타입
export interface GameState {
  currentStep: LessonStep;
  timeRemaining: number; // 초 단위
  progress: number; // 0-100
  isPlaying: boolean;
  score: number;
}

// 사용자 입력 타입
export interface UserInput {
  sentence: string;
  transformType: 'negative' | 'question';
  isCorrect: boolean;
  feedback: string;
}
