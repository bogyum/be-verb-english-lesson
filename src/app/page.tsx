'use client';

import { useLessonStore } from '@/store/lessonStore';
import { useTimer } from '@/hooks/useTimer';
import Layout from '@/components/Layout';
import Navigation from '@/components/Navigation';
import WarmupSlide from '@/components/slides/WarmupSlide';
import ConceptSlide from '@/components/slides/ConceptSlide';
import GameSlide from '@/components/slides/GameSlide';
import PracticeSlide from '@/components/slides/PracticeSlide';
import ProductionSlide from '@/components/slides/ProductionSlide';
import WrapupSlide from '@/components/slides/WrapupSlide';
import { useEffect } from 'react';

export default function Home() {
  const { currentStep } = useLessonStore();

  // 타이머 훅 사용
  useTimer();

  // Framer Motion이 제대로 작동하도록 클라이언트 사이드 렌더링 보장
  useEffect(() => {
    // 클라이언트 사이드에서만 실행되는 코드
    if (typeof window !== 'undefined') {
      // Framer Motion 초기화 확인
      console.log('Framer Motion initialized');
    }
  }, []);

  // 현재 단계에 따라 적절한 슬라이드 렌더링
  const renderCurrentSlide = () => {
    switch (currentStep) {
      case 'warmup':
        return <WarmupSlide />;
      case 'concept':
        return <ConceptSlide />;
      case 'game':
        return <GameSlide />;
      case 'practice':
        return <PracticeSlide />;
      case 'production':
        return <ProductionSlide />;
      case 'wrapup':
        return <WrapupSlide />;
      default:
        return <WarmupSlide />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Layout>
        {renderCurrentSlide()}
      </Layout>
      <Navigation />
    </div>
  );
}
