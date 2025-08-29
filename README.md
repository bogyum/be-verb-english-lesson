# Be동사 vs 일반동사 영어 문법 수업 애플리케이션

Next.js, TypeScript, Framer Motion으로 구현된 인터랙티브 교육용 웹 애플리케이션입니다.

## 🎯 프로젝트 개요

이 애플리케이션은 영어 문법의 기본인 Be동사와 일반동사의 차이점을 학습할 수 있는 인터랙티브 수업 도구입니다. 학생들이 단계별로 개념을 이해하고, 게임을 통해 연습하며, 실제 문장을 만들어보는 과정을 통해 효과적인 학습을 할 수 있습니다.

## ✨ 주요 기능

### 📚 단계별 학습
- **도입 (Warm-up)**: Be동사와 일반동사의 차이점 감지
- **개념 이해**: Be동사와 일반동사의 기능과 형태 이해
- **분류 게임**: 문장을 Be동사와 일반동사로 분류
- **문장 변환**: 긍정→부정→의문 변환 연습
- **정리/발표**: 자기소개 문장 생성 및 발표
- **마무리**: 핵심 정리 및 평가

### 🎮 인터랙티브 기능
- **드래그 앤 드롭 게임**: 문장 카드를 올바른 바구니에 분류
- **실시간 피드백**: 정답/오답 즉시 확인
- **점수 시스템**: 학습 진행도 추적
- **타이머**: 각 단계별 시간 관리

### 🎨 사용자 경험
- **반응형 디자인**: 데스크톱, 태블릿, 모바일 최적화
- **부드러운 애니메이션**: Framer Motion을 활용한 전환 효과
- **접근성 지원**: 키보드 네비게이션, 스크린 리더 지원
- **직관적인 UI**: 사용하기 쉬운 인터페이스

## 🛠️ 기술 스택

- **Frontend**: Next.js 15.5.2, React 19.1.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **State Management**: Zustand
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

1. 저장소 클론
```bash
git clone https://github.com/bogyum/be-verb-english-lesson.git
cd be-verb-english-lesson
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

4. 브라우저에서 확인
```
http://localhost:3000
```

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   └── page.tsx           # 메인 페이지
├── components/            # React 컴포넌트
│   ├── Layout.tsx         # 레이아웃 컴포넌트
│   ├── Navigation.tsx     # 네비게이션 컴포넌트
│   ├── EducationalIcons.tsx # 교육용 아이콘
│   └── slides/           # 수업 슬라이드 컴포넌트
│       ├── WarmupSlide.tsx
│       ├── ConceptSlide.tsx
│       ├── GameSlide.tsx
│       ├── PracticeSlide.tsx
│       ├── ProductionSlide.tsx
│       └── WrapupSlide.tsx
├── store/                # 상태 관리
│   └── lessonStore.ts    # Zustand 스토어
├── hooks/                # 커스텀 훅
│   └── useTimer.ts       # 타이머 훅
└── types/                # TypeScript 타입 정의
    └── index.ts
```

## 🎓 교육 내용

### Be동사 (am/is/are)
- **의미**: 상태, 신분, 위치를 나타냄
- **부정문**: be동사 + not
- **의문문**: be동사 + 주어

### 일반동사 (like, play, study 등)
- **의미**: 행동, 습관을 나타냄
- **부정문**: do/does + not + 동사원형
- **의문문**: Do/Does + 주어 + 동사원형

## 🎮 게임 기능

### 분류 게임
- 12개의 문장 카드를 Be동사와 일반동사로 분류
- 드래그 앤 드롭으로 직관적인 조작
- 실시간 피드백과 점수 시스템

### 문장 변환 연습
- 긍정문을 부정문과 의문문으로 변환
- 즉시 정답 확인
- 단계별 진행도 추적

## 🎨 디자인 특징

- **모던한 UI**: 깔끔하고 직관적인 디자인
- **반응형 레이아웃**: 모든 디바이스에서 최적화
- **접근성**: WCAG 2.1 AA 수준 준수
- **애니메이션**: 부드러운 전환 효과

## 🔧 개발 환경 설정

### 환경 변수
```env
# .env.local
NEXT_PUBLIC_APP_NAME="Be동사 vs 일반동사 수업"
```

### 스크립트
```bash
npm run dev          # 개발 서버 실행
npm run build        # 프로덕션 빌드
npm run start        # 프로덕션 서버 실행
npm run lint         # 코드 린팅
```

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 👨‍💻 개발자

**김보겸** - [GitHub](https://github.com/bogyum)

## 🙏 감사의 말

- Next.js 팀에게 훌륭한 프레임워크를 제공해주셔서 감사합니다
- Framer Motion 팀에게 부드러운 애니메이션 라이브러리를 제공해주셔서 감사합니다
- Tailwind CSS 팀에게 유틸리티 퍼스트 CSS 프레임워크를 제공해주셔서 감사합니다

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
