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

export default function Home() {
  const { currentStep } = useLessonStore();
  
  // 타이머 훅 사용
  useTimer();

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
