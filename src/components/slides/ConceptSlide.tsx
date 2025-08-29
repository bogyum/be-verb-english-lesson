'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, ArrowRight, CheckCircle, XCircle } from 'lucide-react';

export default function ConceptSlide() {
  const [currentExample, setCurrentExample] = useState(0);

  const examples = [
    {
      title: "Be동사 (am/is/are)",
      description: "상태, 신분, 위치를 나타냅니다",
      examples: [
        { original: "I am a student.", negative: "I am not a student.", question: "Am I a student?" },
        { original: "She is happy.", negative: "She is not happy.", question: "Is she happy?" },
        { original: "They are at school.", negative: "They are not at school.", question: "Are they at school?" }
      ],
      rules: [
        "Be동사는 직접 부정문과 의문문을 만듭니다",
        "부정문: be동사 + not",
        "의문문: be동사 + 주어"
      ]
    },
    {
      title: "일반동사 (like, play, study 등)",
      description: "행동, 습관을 나타냅니다",
      examples: [
        { original: "I like music.", negative: "I do not like music.", question: "Do I like music?" },
        { original: "He plays soccer.", negative: "He does not play soccer.", question: "Does he play soccer?" },
        { original: "They study English.", negative: "They do not study English.", question: "Do they study English?" }
      ],
      rules: [
        "일반동사는 do/does의 도움을 받습니다",
        "부정문: do/does + not + 동사원형",
        "의문문: Do/Does + 주어 + 동사원형"
      ]
    }
  ];

  const currentExampleData = examples[currentExample];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center mb-4">
          <Brain className="w-8 h-8 text-indigo-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">
            개념 이해
          </h1>
        </div>
        <p className="text-xl text-gray-600">
          Be동사와 일반동사의 차이점을 자세히 알아봅시다
        </p>
      </motion.div>

      {/* 탭 네비게이션 */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg shadow-lg p-1">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => setCurrentExample(index)}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                currentExample === index
                  ? 'bg-indigo-500 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {example.title}
            </button>
          ))}
        </div>
      </div>

      {/* 현재 예시 내용 */}
      <motion.div
        key={currentExample}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {currentExampleData.title}
          </h2>
          <p className="text-lg text-gray-600">
            {currentExampleData.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 예시 문장들 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              예시 문장들
            </h3>
            <div className="space-y-4">
              {currentExampleData.examples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500 w-16">긍정:</span>
                      <span className="text-gray-900 font-medium">{example.original}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500 w-16">부정:</span>
                      <span className="text-red-600 font-medium">{example.negative}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500 w-16">의문:</span>
                      <span className="text-blue-600 font-medium">{example.question}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 규칙 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <ArrowRight className="w-5 h-5 text-indigo-600 mr-2" />
              핵심 규칙
            </h3>
            <div className="space-y-4">
              {currentExampleData.rules.map((rule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{rule}</p>
                </motion.div>
              ))}
            </div>

            {/* 주의사항 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
            >
              <div className="flex items-start">
                <XCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">주의사항</h4>
                  <p className="text-yellow-700 text-sm">
                    {currentExample === 0 
                      ? "Be동사는 am/is/are가 직접 변형됩니다."
                      : "일반동사는 do/does가 와서 도와주고, 본동사는 원형으로 돌아갑니다."
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 비교표 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
          Be동사 vs 일반동사 비교
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">구분</th>
                <th className="text-center py-3 px-4 font-semibold text-blue-600">Be동사</th>
                <th className="text-center py-3 px-4 font-semibold text-green-600">일반동사</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-gray-700">의미</td>
                <td className="py-3 px-4 text-center text-gray-600">상태, 신분, 위치</td>
                <td className="py-3 px-4 text-center text-gray-600">행동, 습관</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-gray-700">부정문</td>
                <td className="py-3 px-4 text-center text-gray-600">be동사 + not</td>
                <td className="py-3 px-4 text-center text-gray-600">do/does + not + 동사원형</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-gray-700">의문문</td>
                <td className="py-3 px-4 text-center text-gray-600">be동사 + 주어</td>
                <td className="py-3 px-4 text-center text-gray-600">Do/Does + 주어 + 동사원형</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
