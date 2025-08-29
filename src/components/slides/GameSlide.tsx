'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Target, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { SentenceCard } from '@/types';

export default function GameSlide() {
  const [cards, setCards] = useState<SentenceCard[]>([]);
  const [beBasket, setBeBasket] = useState<SentenceCard[]>([]);
  const [verbBasket, setVerbBasket] = useState<SentenceCard[]>([]);
  const [draggedCard, setDraggedCard] = useState<SentenceCard | null>(null);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  const sentenceCards: SentenceCard[] = [
    { id: '1', text: 'I am a student.', type: 'be', explanation: 'am은 be동사입니다' },
    { id: '2', text: 'She is happy.', type: 'be', explanation: 'is는 be동사입니다' },
    { id: '3', text: 'They are at school.', type: 'be', explanation: 'are는 be동사입니다' },
    { id: '4', text: 'I like music.', type: 'verb', explanation: 'like는 일반동사입니다' },
    { id: '5', text: 'He plays soccer.', type: 'verb', explanation: 'plays는 일반동사입니다' },
    { id: '6', text: 'We study English.', type: 'verb', explanation: 'study는 일반동사입니다' },
    { id: '7', text: 'You are tall.', type: 'be', explanation: 'are는 be동사입니다' },
    { id: '8', text: 'She reads books.', type: 'verb', explanation: 'reads는 일반동사입니다' },
    { id: '9', text: 'It is cold.', type: 'be', explanation: 'is는 be동사입니다' },
    { id: '10', text: 'They watch TV.', type: 'verb', explanation: 'watch는 일반동사입니다' },
    { id: '11', text: 'He is a teacher.', type: 'be', explanation: 'is는 be동사입니다' },
    { id: '12', text: 'I eat breakfast.', type: 'verb', explanation: 'eat는 일반동사입니다' }
  ];

  useEffect(() => {
    // 카드들을 랜덤하게 섞기
    const shuffledCards = [...sentenceCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    // 게임 완료 체크
    if (beBasket.length + verbBasket.length === sentenceCards.length) {
      checkResults();
    }
  }, [beBasket, verbBasket]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, card: SentenceCard) => {
    setDraggedCard(card);
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', card.id);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetType: 'be' | 'verb') => {
    e.preventDefault();
    
    // 시각적 피드백 제거
    e.currentTarget.classList.remove('bg-blue-100', 'border-blue-400', 'bg-green-100', 'border-green-400');
    
    if (!draggedCard) return;

    console.log('Dropping card:', draggedCard.text, 'into', targetType, 'basket');

    // 카드를 해당 바구니에 추가
    if (targetType === 'be') {
      setBeBasket(prev => {
        const newBasket = [...prev, draggedCard];
        console.log('Be basket updated:', newBasket.length, 'cards');
        return newBasket;
      });
    } else {
      setVerbBasket(prev => {
        const newBasket = [...prev, draggedCard];
        console.log('Verb basket updated:', newBasket.length, 'cards');
        return newBasket;
      });
    }

    // 원래 카드 목록에서 제거
    setCards(prev => {
      const newCards = prev.filter(card => card.id !== draggedCard.id);
      console.log('Cards remaining:', newCards.length);
      return newCards;
    });
    
    setDraggedCard(null);
  };

  const checkResults = () => {
    let correctCount = 0;
    
    // Be동사 바구니 체크
    beBasket.forEach(card => {
      if (card.type === 'be') correctCount++;
    });
    
    // 일반동사 바구니 체크
    verbBasket.forEach(card => {
      if (card.type === 'verb') correctCount++;
    });

    setScore(correctCount);
    setGameCompleted(true);
  };

  const resetGame = () => {
    const shuffledCards = [...sentenceCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setBeBasket([]);
    setVerbBasket([]);
    setScore(0);
    setGameCompleted(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center mb-4">
          <Gamepad2 className="w-8 h-8 text-green-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">
            분류 게임
          </h1>
        </div>
        <p className="text-xl text-gray-600">
          문장을 Be동사와 일반동사로 분류해보세요!
        </p>
      </motion.div>

      {/* 게임 완료 결과 */}
      {gameCompleted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              게임 완료!
            </h2>
            <div className="text-4xl font-bold text-indigo-600 mb-4">
              {score}/{sentenceCards.length}점
            </div>
            <p className="text-gray-600 mb-4">
              {score === sentenceCards.length ? '완벽합니다! 🎉' : '잘했어요! 조금 더 연습해보세요.'}
            </p>
            <button
              onClick={resetGame}
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-colors flex items-center mx-auto"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              다시 시작
            </button>
          </div>
        </motion.div>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        {/* 카드 영역 */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Target className="w-5 h-5 text-blue-600 mr-2" />
            분류할 문장들
          </h3>
          <div className="bg-gray-50 rounded-lg p-4 min-h-[400px]">
            <AnimatePresence>
              {cards.map((card) => (
                <div
          key={card.id}
          draggable
          onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleDragStart(e, card)}
          className="bg-white rounded-lg shadow-md p-4 mb-3 cursor-move hover:shadow-lg transition-shadow"
        >
          <p className="text-gray-900 font-medium">{card.text}</p>
        </div>
              ))}
            </AnimatePresence>
            {cards.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                모든 카드를 분류했습니다!
              </div>
            )}
          </div>
        </div>

        {/* Be동사 바구니 */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            Be동사 바구니
          </h3>
                            <div
                    className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 min-h-[400px] transition-colors"
                    onDragOver={(e: React.DragEvent<HTMLDivElement>) => handleDragOver(e)}
                    onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e, 'be')}
                    onDragEnter={(e: React.DragEvent<HTMLDivElement>) => {
                      e.preventDefault();
                      e.currentTarget.classList.add('bg-blue-100', 'border-blue-400');
                    }}
                    onDragLeave={(e: React.DragEvent<HTMLDivElement>) => {
                      e.preventDefault();
                      e.currentTarget.classList.remove('bg-blue-100', 'border-blue-400');
                    }}
                  >
            <AnimatePresence>
              {beBasket.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`bg-white rounded-lg shadow-md p-4 mb-3 ${
                    card.type === 'be' ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'
                  }`}
                >
                  <p className="text-gray-900 font-medium">{card.text}</p>
                  <p className="text-sm text-gray-600 mt-1">{card.explanation}</p>
                  {card.type === 'be' ? (
                    <CheckCircle className="w-4 h-4 text-green-500 mt-2" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-500 mt-2" />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* 일반동사 바구니 */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            일반동사 바구니
          </h3>
                            <div
                    className="bg-green-50 border-2 border-green-200 rounded-lg p-4 min-h-[400px] transition-colors"
                    onDragOver={(e: React.DragEvent<HTMLDivElement>) => handleDragOver(e)}
                    onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e, 'verb')}
                    onDragEnter={(e: React.DragEvent<HTMLDivElement>) => {
                      e.preventDefault();
                      e.currentTarget.classList.add('bg-green-100', 'border-green-400');
                    }}
                    onDragLeave={(e: React.DragEvent<HTMLDivElement>) => {
                      e.preventDefault();
                      e.currentTarget.classList.remove('bg-green-100', 'border-green-400');
                    }}
                  >
            <AnimatePresence>
              {verbBasket.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`bg-white rounded-lg shadow-md p-4 mb-3 ${
                    card.type === 'verb' ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'
                  }`}
                >
                  <p className="text-gray-900 font-medium">{card.text}</p>
                  <p className="text-sm text-gray-600 mt-1">{card.explanation}</p>
                  {card.type === 'verb' ? (
                    <CheckCircle className="w-4 h-4 text-green-500 mt-2" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-500 mt-2" />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 진행 상황 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 bg-white rounded-lg shadow-lg p-6"
      >
        <div className="flex justify-between items-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{beBasket.length}</div>
            <div className="text-sm text-gray-600">Be동사</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{verbBasket.length}</div>
            <div className="text-sm text-gray-600">일반동사</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">{cards.length}</div>
            <div className="text-sm text-gray-600">남은 카드</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
