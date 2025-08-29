'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLessonStore, lessonSteps } from '@/store/lessonStore';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { currentStep, progress, timeRemaining } = useLessonStore();
  
  const currentStepInfo = lessonSteps.find(step => step.id === currentStep);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 헤더 */}
      <header className="bg-white shadow-sm border-b border-gray-200" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 sm:h-16 space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                Be동사 vs 일반동사
              </h1>
              <span className="text-xs sm:text-sm text-gray-500">
                영어 문법 수업
              </span>
            </div>
            
            {/* 진행률 및 타이머 */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="text-center">
                <div className="text-xs sm:text-sm font-medium text-gray-700">
                  {currentStepInfo?.title}
                </div>
                <div className="text-xs text-gray-500 hidden sm:block">
                  {currentStepInfo?.description}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-base sm:text-lg font-bold text-indigo-600" role="timer" aria-live="polite" aria-label="남은 시간">
                  {formatTime(timeRemaining)}
                </div>
                <div className="text-xs text-gray-500">남은 시간</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 진행률 바 */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="수업 진행률">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* 단계 네비게이션 */}
      <nav className="bg-white border-b border-gray-200" role="navigation" aria-label="수업 단계 네비게이션">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 sm:space-x-8 overflow-x-auto py-2 sm:py-0">
            {lessonSteps.map((step, index) => {
              const isActive = step.id === currentStep;
              const isCompleted = index < lessonSteps.findIndex(s => s.id === currentStep);
              
              return (
                <button
                  key={step.id}
                  className={`flex-shrink-0 py-2 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                    isActive
                      ? 'border-indigo-500 text-indigo-600'
                      : isCompleted
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  aria-current={isActive ? 'step' : undefined}
                  aria-label={`${step.title} 단계${isCompleted ? ' (완료됨)' : ''}${isActive ? ' (현재 단계)' : ''}`}
                >
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      isActive
                        ? 'bg-indigo-500 text-white'
                        : isCompleted
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`} aria-hidden="true">
                      {isCompleted ? '✓' : index + 1}
                    </div>
                    <span className="hidden sm:inline">{step.title}</span>
                    <span className="sm:hidden">{step.title.split(' ')[0]}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 메인 콘텐츠 */}
      <main className="flex-1" role="main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-white border-t border-gray-200" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              © 2024 영어 문법 수업 발표자료
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-label="도움말 보기">
                도움말
              </button>
              <button className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-label="설정 변경">
                설정
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
