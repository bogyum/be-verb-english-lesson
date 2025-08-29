'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';
import { useLessonStore, lessonSteps } from '@/store/lessonStore';

export default function Navigation() {
  const {
    currentStep,
    isPlaying,
    setIsPlaying,
    nextStep,
    previousStep,
    resetLesson
  } = useLessonStore();

  const currentIndex = lessonSteps.findIndex(step => step.id === currentStep);
  const isFirstStep = currentIndex === 0;
  const isLastStep = currentIndex === lessonSteps.length - 1;

  return (
    <div className="fixed bottom-2 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50" role="navigation" aria-label="수업 진행 컨트롤">
      <div className="bg-white rounded-full shadow-lg border border-gray-200 px-3 sm:px-6 py-2 sm:py-3 animate-slide-in-up">
        <div className="flex items-center space-x-1 sm:space-x-4" role="group" aria-label="수업 진행 버튼 그룹">
          {/* 이전 단계 버튼 */}
          <button
            onClick={previousStep}
            disabled={isFirstStep}
            className={`p-1 sm:p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              isFirstStep
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
            }`}
            aria-label="이전 단계로 이동"
            aria-disabled={isFirstStep}
          >
            <ChevronLeft size={18} className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          </button>

          {/* 재생/일시정지 버튼 */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 sm:p-3 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label={isPlaying ? "일시정지" : "재생"}
          >
            {isPlaying ? <Pause size={18} className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" /> : <Play size={18} className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />}
          </button>

          {/* 다음 단계 버튼 */}
          <button
            onClick={nextStep}
            disabled={isLastStep}
            className={`p-1 sm:p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              isLastStep
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
            }`}
            aria-label="다음 단계로 이동"
            aria-disabled={isLastStep}
          >
            <ChevronRight size={18} className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          </button>

          {/* 리셋 버튼 */}
          <button
            onClick={resetLesson}
            className="p-1 sm:p-2 rounded-full text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label="수업 처음부터 다시 시작"
          >
            <RotateCcw size={18} className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
