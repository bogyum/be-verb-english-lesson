'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, BookOpen, Star, Home } from 'lucide-react';

export default function WrapupSlide() {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 'q1',
      question: 'Be동사 문장을 고르세요.',
      options: [
        'They play games.',
        'He is tall.',
        'Do you like cats?'
      ],
      correct: 1,
      explanation: 'He is tall. - is는 be동사입니다.'
    },
    {
      id: 'q2',
      question: '일반동사 의문문을 고르세요.',
      options: [
        'Are you a student?',
        'Does she read?',
        'She is not here.'
      ],
      correct: 1,
      explanation: 'Does she read? - Does는 일반동사 의문문을 만드는 조동사입니다.'
    },
    {
      id: 'q3',
      question: 'They are happy. → 부정문으로 바꾸세요.',
      answer: 'They are not happy.',
      explanation: 'Be동사 부정문은 be동사 + not 형태입니다.'
    }
  ];

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const checkAnswers = () => {
    let correctCount = 0;
    
    // 객관식 문제 체크
    if (answers.q1 === '1') correctCount++;
    if (answers.q2 === '1') correctCount++;
    
    // 주관식 문제 체크 (대소문자 무시)
    if (answers.q3.trim().toLowerCase() === 'they are not happy.') correctCount++;
    
    setScore(correctCount);
    setShowResults(true);
  };

  const getGrade = (score: number) => {
    if (score === 3) return { grade: 'A+', color: 'text-green-600', message: '완벽합니다! 🎉' };
    if (score === 2) return { grade: 'B+', color: 'text-blue-600', message: '잘했어요! 👍' };
    if (score === 1) return { grade: 'C+', color: 'text-yellow-600', message: '조금 더 연습해보세요.' };
    return { grade: 'D', color: 'text-red-600', message: '다시 한번 복습해보세요.' };
  };

  const gradeInfo = getGrade(score);

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center mb-4">
          <Award className="w-8 h-8 text-yellow-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">
            마무리
          </h1>
        </div>
        <p className="text-xl text-gray-600">
          오늘 배운 내용을 정리하고 평가해보세요!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* 핵심 정리 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="w-6 h-6 text-indigo-600 mr-3" />
            핵심 정리
          </h2>

          <div className="space-y-6">
            {/* Be동사 정리 */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Be동사 (am/is/are)
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li>• 의미: 상태, 신분, 위치</li>
                <li>• 부정문: be동사 + not</li>
                <li>• 의문문: be동사 + 주어</li>
                <li>• 예시: I am happy. → I am not happy. → Am I happy?</li>
              </ul>
            </div>

            {/* 일반동사 정리 */}
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                일반동사 (like, play, study 등)
              </h3>
              <ul className="space-y-2 text-green-800">
                <li>• 의미: 행동, 습관</li>
                <li>• 부정문: do/does + not + 동사원형</li>
                <li>• 의문문: Do/Does + 주어 + 동사원형</li>
                <li>• 예시: He plays soccer. → He does not play soccer. → Does he play soccer?</li>
              </ul>
            </div>

            {/* 주의사항 */}
            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center">
                <Star className="w-5 h-5 mr-2" />
                주의사항
              </h3>
              <ul className="space-y-2 text-yellow-800">
                <li>• Be동사는 직접 변형됩니다</li>
                <li>• 일반동사는 do/does의 도움을 받습니다</li>
                <li>• 일반동사 의문문에서 본동사는 원형으로 돌아갑니다</li>
                <li>• 3인칭 단수 현재형에는 -s를 붙입니다</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 평가 문제 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="w-6 h-6 text-purple-600 mr-3" />
            평가 문제
          </h2>

          {!showResults ? (
            <div className="space-y-6">
              {/* 객관식 문제 1 */}
              {questions[0] && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1. {questions[0].question}</h3>
                  <div className="space-y-2">
                    {questions[0].options?.map((option, index) => (
                      <label key={index} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="q1"
                          value={index.toString()}
                          checked={answers.q1 === index.toString()}
                          onChange={(e) => handleAnswerChange('q1', e.target.value)}
                          className="w-4 h-4 text-indigo-600"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* 객관식 문제 2 */}
              {questions[1] && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2. {questions[1].question}</h3>
                  <div className="space-y-2">
                    {questions[1].options?.map((option, index) => (
                      <label key={index} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="q2"
                          value={index.toString()}
                          checked={answers.q2 === index.toString()}
                          onChange={(e) => handleAnswerChange('q2', e.target.value)}
                          className="w-4 h-4 text-indigo-600"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* 주관식 문제 3 */}
              {questions[2] && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3. {questions[2].question}</h3>
                  <input
                    type="text"
                    value={answers.q3}
                    onChange={(e) => handleAnswerChange('q3', e.target.value)}
                    placeholder="답을 입력하세요..."
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  />
                </div>
              )}

              <button
                onClick={checkAnswers}
                disabled={!answers.q1 || !answers.q2 || !answers.q3.trim()}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  answers.q1 && answers.q2 && answers.q3.trim()
                    ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                정답 확인
              </button>
            </div>
          ) : (
            /* 결과 표시 */
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">평가 결과</h3>
                <div className={`text-6xl font-bold mb-4 ${gradeInfo.color}`}>
                  {gradeInfo.grade}
                </div>
                <div className="text-2xl font-bold text-indigo-600 mb-2">
                  {score}/3점
                </div>
                <p className="text-gray-600">{gradeInfo.message}</p>
              </div>

              {/* 문제별 결과 */}
              <div className="space-y-4">
                {questions.map((q, index) => {
                  const answer = answers[q.id as keyof typeof answers];
                  const isCorrect = index < 2 
                    ? answer === q.correct?.toString()
                    : answer?.trim().toLowerCase() === q.answer?.toLowerCase();
                  
                  return (
                    <div key={q.id} className={`p-4 rounded-lg ${
                      isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">문제 {index + 1}</span>
                        {isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <span className="text-red-600">❌</span>
                        )}
                      </div>
                      <p className="text-gray-700 mb-2">{q.question}</p>
                      <p className="text-sm text-gray-600">{q.explanation}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* 숙제 안내 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Home className="w-5 h-5 text-indigo-600 mr-2" />
          숙제
        </h3>
        
        <div className="bg-indigo-50 rounded-lg p-4">
          <p className="text-gray-800 mb-3">
            <strong>다음 수업까지 해올 것:</strong>
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Be동사 문장 1개 작성하기</li>
            <li>• 일반동사 문장 2개 작성하기</li>
            <li>• 각 문장을 부정문과 의문문으로 변환하기</li>
            <li>• 오늘 배운 내용 복습하기</li>
          </ul>
        </div>
      </motion.div>

      {/* 수업 마무리 메시지 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-6 text-center"
      >
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">
            수고하셨습니다! 🎉
          </h3>
          <p className="text-lg mb-4">
            오늘 Be동사와 일반동사의 차이점을 잘 배웠습니다.
          </p>
          <p className="text-lg">
            다음 수업에서 더 많은 문법을 배워봅시다!
          </p>
        </div>
      </motion.div>
    </div>
  );
}
