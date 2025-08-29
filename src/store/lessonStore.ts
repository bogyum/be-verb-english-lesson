import { create } from 'zustand';
import { GameState, LessonStep, LessonStepInfo } from '@/types';

// 수업 단계 정보
export const lessonSteps: LessonStepInfo[] = [
  {
    id: 'warmup',
    title: '도입 (Warm-up)',
    duration: 5,
    description: 'Be동사와 일반동사의 차이점 감지'
  },
  {
    id: 'concept',
    title: '개념 이해',
    duration: 15,
    description: 'Be동사와 일반동사의 기능과 형태 이해'
  },
  {
    id: 'game',
    title: '분류 게임',
    duration: 10,
    description: '문장을 Be동사와 일반동사로 분류'
  },
  {
    id: 'practice',
    title: '문장 변환',
    duration: 10,
    description: '긍정→부정→의문 변환 연습'
  },
  {
    id: 'production',
    title: '정리/발표',
    duration: 15,
    description: '자기소개 문장 생성 및 발표'
  },
  {
    id: 'wrapup',
    title: '마무리',
    duration: 5,
    description: '핵심 정리 및 평가'
  }
];

interface LessonStore extends GameState {
  // 액션들
  setCurrentStep: (step: LessonStep) => void;
  setTimeRemaining: (time: number) => void;
  setProgress: (progress: number) => void;
  setIsPlaying: (playing: boolean) => void;
  setScore: (score: number) => void;
  nextStep: () => void;
  previousStep: () => void;
  resetLesson: () => void;
  updateProgress: () => void;
}

export const useLessonStore = create<LessonStore>((set, get) => ({
  // 초기 상태
  currentStep: 'warmup',
  timeRemaining: 5 * 60, // 5분을 초로 변환
  progress: 0,
  isPlaying: false,
  score: 0,

  // 액션들
  setCurrentStep: (step) => {
    const stepInfo = lessonSteps.find(s => s.id === step);
    if (stepInfo) {
      set({
        currentStep: step,
        timeRemaining: stepInfo.duration * 60,
        progress: (lessonSteps.findIndex(s => s.id === step) / (lessonSteps.length - 1)) * 100
      });
    }
  },

  setTimeRemaining: (time) => set({ timeRemaining: time }),
  setProgress: (progress) => set({ progress }),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  setScore: (score) => set({ score }),

  nextStep: () => {
    const currentIndex = lessonSteps.findIndex(s => s.id === get().currentStep);
    if (currentIndex < lessonSteps.length - 1) {
      const nextStep = lessonSteps[currentIndex + 1];
      get().setCurrentStep(nextStep.id);
    }
  },

  previousStep: () => {
    const currentIndex = lessonSteps.findIndex(s => s.id === get().currentStep);
    if (currentIndex > 0) {
      const prevStep = lessonSteps[currentIndex - 1];
      get().setCurrentStep(prevStep.id);
    }
  },

  resetLesson: () => {
    set({
      currentStep: 'warmup',
      timeRemaining: 5 * 60,
      progress: 0,
      isPlaying: false,
      score: 0
    });
  },

  updateProgress: () => {
    const currentIndex = lessonSteps.findIndex(s => s.id === get().currentStep);
    const progress = (currentIndex / (lessonSteps.length - 1)) * 100;
    set({ progress });
  }
}));
