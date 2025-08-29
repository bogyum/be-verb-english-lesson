'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Lightbulb } from 'lucide-react';
import { BeVerbIcons, RegularVerbIcons } from '@/components/EducationalIcons';

export default function WarmupSlide() {
  const sentences = [
    { text: "I am a student.", type: "be", icon: BeVerbIcons.Student },
    { text: "She is happy.", type: "be", icon: BeVerbIcons.Happy },
    { text: "I like music.", type: "verb", icon: RegularVerbIcons.Play },
    { text: "They play soccer.", type: "verb", icon: RegularVerbIcons.Soccer }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Be동사 vs 일반동사
        </h1>
        <p className="text-xl text-gray-600">
          무엇이 다른지 함께 찾아봅시다!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* 학습 목표 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">학습 목표</h2>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Be동사와 일반동사의 차이점 이해</li>
            <li>• 문장에서 동사 유형 구분하기</li>
            <li>• 기본 문법 규칙 학습</li>
          </ul>
        </motion.div>

        {/* 수업 흐름 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">수업 흐름</h2>
          </div>
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center">
              <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              <span>개념 이해 (15분)</span>
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              <span>분류 게임 (10분)</span>
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              <span>문장 변환 (10분)</span>
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              <span>정리/발표 (15분)</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 예시 문장들 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <div className="flex items-center justify-center mb-6">
          <Lightbulb className="w-6 h-6 text-yellow-500 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">예시 문장들을 읽어보세요</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {sentences.map((sentence, index) => {
            const IconComponent = sentence.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className={`p-4 rounded-lg border-2 text-center ${
                  sentence.type === 'be'
                    ? 'border-blue-200 bg-blue-50'
                    : 'border-green-200 bg-green-50'
                }`}
              >
                <div className="flex justify-center mb-3">
                  <IconComponent />
                </div>
                <p className="text-lg font-medium text-gray-900 mb-2">
                  {sentence.text}
                </p>
                <span className={`text-sm font-semibold px-2 py-1 rounded ${
                  sentence.type === 'be'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-green-100 text-green-700'
                }`}>
                  {sentence.type === 'be' ? 'Be동사' : '일반동사'}
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-600 text-lg">
            이 문장들에서 무엇이 다른지 찾아보세요!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
