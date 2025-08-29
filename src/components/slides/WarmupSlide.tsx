'use client';

import React from 'react';
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
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Be동사 vs 일반동사
        </h1>
        <p className="text-xl text-gray-600">
          무엇이 다른지 함께 찾아봅시다!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* 학습 목표 */}
        <div className="bg-white rounded-lg shadow-lg p-6 animate-slide-in-left">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">학습 목표</h2>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Be동사와 일반동사의 차이점 이해</li>
            <li>• 문장에서 동사 유형 구분하기</li>
            <li>• 기본 문법 규칙 학습</li>
          </ul>
        </div>

        {/* 수업 흐름 */}
        <div className="bg-white rounded-lg shadow-lg p-6 animate-slide-in-right">
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
        </div>
      </div>

      {/* 예시 문장들 */}
      <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in-up">
        <div className="flex items-center justify-center mb-6">
          <Lightbulb className="w-6 h-6 text-yellow-500 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">예시 문장들을 읽어보세요</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {sentences.map((sentence, index) => {
            const IconComponent = sentence.icon;
            return (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 text-center animate-scale-in ${
                  sentence.type === 'be'
                    ? 'border-blue-200 bg-blue-50'
                    : 'border-green-200 bg-green-50'
                }`}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
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
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-600 text-lg">
            이 문장들에서 무엇이 다른지 찾아보세요!
          </p>
        </div>
      </div>
    </div>
  );
}
