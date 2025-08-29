'use client';

import Layout from '@/components/Layout';
import Navigation from '@/components/Navigation';
import { useTimer } from '@/hooks/useTimer';
import { useLessonStore } from '@/store/lessonStore';
import WarmupSlide from '@/components/slides/WarmupSlide';
import ConceptSlide from '@/components/slides/ConceptSlide';
import GameSlide from '@/components/slides/GameSlide';
import PracticeSlide from '@/components/slides/PracticeSlide';
import ProductionSlide from '@/components/slides/ProductionSlide';
import WrapupSlide from '@/components/slides/WrapupSlide';

export default function Home() {
  const { currentStep } = useLessonStore();
  useTimer(); // 타이머 훅 사용

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
    <Layout>
      {renderCurrentSlide()}
      <Navigation />
    </Layout>
  );
}
