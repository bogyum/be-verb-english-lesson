'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit3, CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { SentenceTransform } from '@/types';

export default function PracticeSlide() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [userInput, setUserInput] = useState({ negative: '', question: '' });
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [completedSentences, setCompletedSentences] = useState<number[]>([]);

  const practiceSentences: SentenceTransform[] = [
    {
      original: "I am a student.",
      negative: "I am not a student.",
      question: "Am I a student?",
      type: "be"
    },
    {
      original: "He plays soccer.",
      negative: "He does not play soccer.",
      question: "Does he play soccer?",
      type: "verb"
    },
    {
      original: "She is happy.",
      negative: "She is not happy.",
      question: "Is she happy?",
      type: "be"
    },
    {
      original: "They study English.",
      negative: "They do not study English.",
      question: "Do they study English?",
      type: "verb"
    },
    {
      original: "You are tall.",
      negative: "You are not tall.",
      question: "Are you tall?",
      type: "be"
    },
    {
      original: "We like music.",
      negative: "We do not like music.",
      question: "Do we like music?",
      type: "verb"
    }
  ];

  const currentSentence = practiceSentences[currentSentenceIndex];

  const checkAnswer = () => {
    const isNegativeCorrect = userInput.negative.trim().toLowerCase() === currentSentence.negative.toLowerCase();
    const isQuestionCorrect = userInput.question.trim().toLowerCase() === currentSentence.question.toLowerCase();
    
    const isCorrect = isNegativeCorrect && isQuestionCorrect;
    
    if (isCorrect && !completedSentences.includes(currentSentenceIndex)) {
      setScore(score + 1);
      setCompletedSentences([...completedSentences, currentSentenceIndex]);
    }
    
    setShowFeedback(true);
  };

  const nextSentence = () => {
    if (currentSentenceIndex < practiceSentences.length - 1) {
      setCurrentSentenceIndex(currentSentenceIndex + 1);
      setUserInput({ negative: '', question: '' });
      setShowFeedback(false);
    }
  };

  const previousSentence = () => {
    if (currentSentenceIndex > 0) {
      setCurrentSentenceIndex(currentSentenceIndex - 1);
      setUserInput({ negative: '', question: '' });
      setShowFeedback(false);
    }
  };

  const resetPractice = () => {
    setCurrentSentenceIndex(0);
    setUserInput({ negative: '', question: '' });
    setShowFeedback(false);
    setScore(0);
    setCompletedSentences([]);
  };

  const isNegativeCorrect = userInput.negative.trim().toLowerCase() === currentSentence.negative.toLowerCase();
  const isQuestionCorrect = userInput.question.trim().toLowerCase() === currentSentence.question.toLowerCase();

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center mb-4">
          <Edit3 className="w-8 h-8 text-purple-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">
            문장 변환 연습
          </h1>
        </div>
        <p className="text-xl text-gray-600">
          긍정문을 부정문과 의문문으로 바꿔보세요!
        </p>
      </motion.div>

      {/* 진행 상황 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">{score}</div>
            <div className="text-sm text-gray-600">정답</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-600">{currentSentenceIndex + 1}/{practiceSentences.length}</div>
            <div className="text-sm text-gray-600">진행</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{practiceSentences.length - score}</div>
            <div className="text-sm text-gray-600">남은 문제</div>
          </div>
        </div>
        
        {/* 진행률 바 */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSentenceIndex + 1) / practiceSentences.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      {/* 현재 문장 */}
      <motion.div
        key={currentSentenceIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            원문
          </h2>
          <div className={`text-xl font-medium p-4 rounded-lg ${
            currentSentence.type === 'be' ? 'bg-blue-50 text-blue-900' : 'bg-green-50 text-green-900'
          }`}>
            {currentSentence.original}
          </div>
          <div className="mt-2">
            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
              currentSentence.type === 'be' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
            }`}>
              {currentSentence.type === 'be' ? 'Be동사' : '일반동사'}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 부정문 입력 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <XCircle className="w-5 h-5 text-red-600 mr-2" />
              부정문
            </h3>
            <input
              type="text"
              value={userInput.negative}
              onChange={(e) => setUserInput({ ...userInput, negative: e.target.value })}
              placeholder="부정문을 입력하세요..."
              className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 ${
                showFeedback
                  ? isNegativeCorrect
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                  : 'border-gray-300 focus:border-indigo-500'
              }`}
            />
            {showFeedback && (
              <div className="mt-2 flex items-center">
                {isNegativeCorrect ? (
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500 mr-2" />
                )}
                <span className={`text-sm ${isNegativeCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {isNegativeCorrect ? '정답!' : `정답: ${currentSentence.negative}`}
                </span>
              </div>
            )}
          </div>

          {/* 의문문 입력 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
              의문문
            </h3>
            <input
              type="text"
              value={userInput.question}
              onChange={(e) => setUserInput({ ...userInput, question: e.target.value })}
              placeholder="의문문을 입력하세요..."
              className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 ${
                showFeedback
                  ? isQuestionCorrect
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                  : 'border-gray-300 focus:border-indigo-500'
              }`}
            />
            {showFeedback && (
              <div className="mt-2 flex items-center">
                {isQuestionCorrect ? (
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500 mr-2" />
                )}
                <span className={`text-sm ${isQuestionCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {isQuestionCorrect ? '정답!' : `정답: ${currentSentence.question}`}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 버튼들 */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={previousSentence}
            disabled={currentSentenceIndex === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentSentenceIndex === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gray-500 text-white hover:bg-gray-600'
            }`}
          >
            이전
          </button>
          
          {!showFeedback ? (
            <button
              onClick={checkAnswer}
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-colors"
            >
              정답 확인
            </button>
          ) : (
            <button
              onClick={nextSentence}
              disabled={currentSentenceIndex === practiceSentences.length - 1}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentSentenceIndex === practiceSentences.length - 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              다음
            </button>
          )}
          
          <button
            onClick={resetPractice}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            <RotateCcw className="w-5 h-5 inline mr-2" />
            다시 시작
          </button>
        </div>
      </motion.div>

      {/* 완료 메시지 */}
      {currentSentenceIndex === practiceSentences.length - 1 && showFeedback && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 bg-white rounded-lg shadow-lg p-6 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            연습 완료!
          </h2>
          <div className="text-4xl font-bold text-indigo-600 mb-4">
            {score}/{practiceSentences.length}점
          </div>
          <p className="text-gray-600 mb-4">
            {score === practiceSentences.length ? '완벽합니다! 🎉' : '잘했어요! 조금 더 연습해보세요.'}
          </p>
        </motion.div>
      )}
    </div>
  );
}
