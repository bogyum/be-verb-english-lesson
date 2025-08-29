import React from 'react';

// Be동사 관련 아이콘들
export const BeVerbIcons = {
  // 상태 아이콘
  Happy: () => (
    <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"/>
      <circle cx="9" cy="10" r="1"/>
      <circle cx="15" cy="10" r="1"/>
    </svg>
  ),
  
  // 신분 아이콘
  Student: () => (
    <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09v6.91L12 23 1 15.91V9l11-6z"/>
      <path d="M12 6l-7 3.82v4.18L12 15l7-5.18V9.82L12 6z"/>
    </svg>
  ),
  
  // 위치 아이콘
  School: () => (
    <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09v6.91L12 23 1 15.91V9l11-6z"/>
      <path d="M12 6l-7 3.82v4.18L12 15l7-5.18V9.82L12 6z"/>
      <path d="M12 12l-3-1.5v2L12 14l3-1.5v-2L12 12z"/>
    </svg>
  ),
  
  // 상태 변화 아이콘
  StateChange: () => (
    <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  )
};

// 일반동사 관련 아이콘들
export const RegularVerbIcons = {
  // 행동 아이콘
  Play: () => (
    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"/>
    </svg>
  ),
  
  // 운동 아이콘
  Soccer: () => (
    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M12 6l-3 3 3 3 3-3-3-3z"/>
    </svg>
  ),
  
  // 학습 아이콘
  Study: () => (
    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  
  // 음식 아이콘
  Eat: () => (
    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
    </svg>
  ),
  
  // 행동 변화 아이콘
  ActionChange: () => (
    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      <path d="M12 6l-3 3 3 3 3-3-3-3z"/>
    </svg>
  )
};

// 문법 관련 아이콘들
export const GrammarIcons = {
  // 문장 아이콘
  Sentence: () => (
    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM16 18H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
    </svg>
  ),
  
  // 체크마크 아이콘
  Check: () => (
    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
  ),
  
  // X마크 아이콘
  X: () => (
    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  ),
  
  // 화살표 아이콘
  Arrow: () => (
    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
    </svg>
  ),
  
  // 시계 아이콘
  Clock: () => (
    <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ),
  
  // 진행률 아이콘
  Progress: () => (
    <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      <path d="M12 6l-3 3 3 3 3-3-3-3z"/>
    </svg>
  )
};

// 교육 관련 아이콘들
export const EducationIcons = {
  // 책 아이콘
  Book: () => (
    <svg className="w-8 h-8 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
    </svg>
  ),
  
  // 연필 아이콘
  Pencil: () => (
    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
    </svg>
  ),
  
  // 마이크 아이콘
  Microphone: () => (
    <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
    </svg>
  ),
  
  // 사용자 아이콘
  User: () => (
    <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  ),
  
  // 별 아이콘
  Star: () => (
    <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  
  // 집 아이콘
  Home: () => (
    <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  )
};

// 게임 관련 아이콘들
export const GameIcons = {
  // 게임패드 아이콘
  Gamepad: () => (
    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>
  ),
  
  // 타겟 아이콘
  Target: () => (
    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  
  // 카드 아이콘
  Card: () => (
    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
    </svg>
  ),
  
  // 바구니 아이콘
  Basket: () => (
    <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
  )
};
