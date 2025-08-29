'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, User, CheckCircle, Edit3, Save } from 'lucide-react';

export default function ProductionSlide() {
  const [userSentences, setUserSentences] = useState({
    be: '',
    verb: ''
  });
  const [savedSentences, setSavedSentences] = useState<Array<{
    be: string;
    verb: string;
    id: number;
  }>>([]);
  const [currentId, setCurrentId] = useState(1);

  const exampleTemplates = {
    be: [
      "I am ___ years old.",
      "I am from ___.",
      "I am a ___.",
      "I am ___.",
      "My name is ___."
    ],
    verb: [
      "I like ___.",
      "I play ___.",
      "I watch ___.",
      "I study ___.",
      "I eat ___."
    ]
  };

  const handleSave = () => {
    if (userSentences.be.trim() && userSentences.verb.trim()) {
      setSavedSentences(prev => [...prev, {
        ...userSentences,
        id: currentId
      }]);
      setCurrentId(prev => prev + 1);
      setUserSentences({ be: '', verb: '' });
    }
  };

  const handleTemplateClick = (type: 'be' | 'verb', template: string) => {
    setUserSentences(prev => ({
      ...prev,
      [type]: template
    }));
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
          <Mic className="w-8 h-8 text-orange-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">
            정리/발표
          </h1>
        </div>
        <p className="text-xl text-gray-600">
          배운 내용을 바탕으로 자기소개 문장을 만들어보세요!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* 자기소개 작성 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Edit3 className="w-6 h-6 text-indigo-600 mr-3" />
            자기소개 작성
          </h2>

          <div className="space-y-6">
            {/* Be동사 문장 */}
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Be동사 문장 (상태/신분/위치)
              </h3>
              <input
                type="text"
                value={userSentences.be}
                onChange={(e) => setUserSentences(prev => ({ ...prev, be: e.target.value }))}
                placeholder="예: I am 15 years old."
                className="w-full p-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
              
              {/* 템플릿 */}
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">템플릿:</p>
                <div className="flex flex-wrap gap-2">
                  {exampleTemplates.be.map((template, index) => (
                    <button
                      key={index}
                      onClick={() => handleTemplateClick('be', template)}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                    >
                      {template}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 일반동사 문장 */}
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                일반동사 문장 (행동/습관)
              </h3>
              <input
                type="text"
                value={userSentences.verb}
                onChange={(e) => setUserSentences(prev => ({ ...prev, verb: e.target.value }))}
                placeholder="예: I like playing soccer."
                className="w-full p-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500"
              />
              
              {/* 템플릿 */}
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">템플릿:</p>
                <div className="flex flex-wrap gap-2">
                  {exampleTemplates.verb.map((template, index) => (
                    <button
                      key={index}
                      onClick={() => handleTemplateClick('verb', template)}
                      className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition-colors"
                    >
                      {template}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 저장 버튼 */}
            <button
              onClick={handleSave}
              disabled={!userSentences.be.trim() || !userSentences.verb.trim()}
              className={`w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center ${
                userSentences.be.trim() && userSentences.verb.trim()
                  ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Save className="w-5 h-5 mr-2" />
              자기소개 저장
            </button>
          </div>
        </motion.div>

        {/* 저장된 자기소개 목록 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <User className="w-6 h-6 text-purple-600 mr-3" />
            저장된 자기소개
          </h2>

          {savedSentences.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <User className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>아직 저장된 자기소개가 없습니다.</p>
              <p className="text-sm">왼쪽에서 자기소개를 작성해보세요!</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {savedSentences.map((sentence, index) => (
                <motion.div
                  key={sentence.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-4 border-l-4 border-indigo-500"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">
                      자기소개 #{sentence.id}
                    </span>
                    <span className="text-xs text-gray-500">
                      {index + 1}번째
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-blue-600 font-medium text-sm w-16">Be동사:</span>
                      <span className="text-gray-900">{sentence.be}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 font-medium text-sm w-16">일반동사:</span>
                      <span className="text-gray-900">{sentence.verb}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* 발표 가이드 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Mic className="w-5 h-5 text-orange-600 mr-2" />
          발표 가이드
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">발표 순서:</h4>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              <li>Be동사 문장을 큰소리로 읽기</li>
              <li>일반동사 문장을 큰소리로 읽기</li>
              <li>문장의 의미 설명하기</li>
              <li>질문 받기</li>
            </ol>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">발표 팁:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>명확하고 천천히 발음하기</li>
              <li>자신감 있게 말하기</li>
              <li>청중과 눈 맞추기</li>
              <li>자연스러운 제스처 사용하기</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* 체크리스트 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-6 bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          발표 체크리스트
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <input type="checkbox" id="check1" className="w-4 h-4 text-indigo-600" />
            <label htmlFor="check1" className="text-gray-700">Be동사 1문장 포함</label>
          </div>
          <div className="flex items-center space-x-3">
            <input type="checkbox" id="check2" className="w-4 h-4 text-indigo-600" />
            <label htmlFor="check2" className="text-gray-700">일반동사 1문장 포함</label>
          </div>
          <div className="flex items-center space-x-3">
            <input type="checkbox" id="check3" className="w-4 h-4 text-indigo-600" />
            <label htmlFor="check3" className="text-gray-700">문법적으로 정확</label>
          </div>
          <div className="flex items-center space-x-3">
            <input type="checkbox" id="check4" className="w-4 h-4 text-indigo-600" />
            <label htmlFor="check4" className="text-gray-700">명확한 발음</label>
          </div>
          <div className="flex items-center space-x-3">
            <input type="checkbox" id="check5" className="w-4 h-4 text-indigo-600" />
            <label htmlFor="check5" className="text-gray-700">자연스러운 표현</label>
          </div>
          <div className="flex items-center space-x-3">
            <input type="checkbox" id="check6" className="w-4 h-4 text-indigo-600" />
            <label htmlFor="check6" className="text-gray-700">자신감 있는 태도</label>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
