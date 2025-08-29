import { useEffect, useRef } from 'react';
import { useLessonStore, lessonSteps } from '@/store/lessonStore';

export const useTimer = () => {
  const {
    timeRemaining,
    setTimeRemaining,
    isPlaying,
    setIsPlaying,
    currentStep,
    nextStep
  } = useLessonStore();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      // 시간이 다 되면 다음 단계로 자동 이동
      const currentIndex = lessonSteps.findIndex(step => step.id === currentStep);
      if (currentIndex < lessonSteps.length - 1) {
        nextStep();
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, timeRemaining, setTimeRemaining, currentStep, nextStep, lessonSteps]);

  // 단계가 변경될 때 타이머 리셋
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [currentStep]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimePercentage = () => {
    const currentStepInfo = lessonSteps.find(step => step.id === currentStep);
    if (!currentStepInfo) return 0;
    
    const totalSeconds = currentStepInfo.duration * 60;
    return ((totalSeconds - timeRemaining) / totalSeconds) * 100;
  };

  return {
    timeRemaining,
    formatTime,
    getTimePercentage,
    isTimeUp: timeRemaining === 0
  };
}
