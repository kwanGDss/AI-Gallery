# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Gallery (AI 갤러리) is an AI-generated content sharing platform built with Next.js 15. Users can upload, browse, and download AI-created artwork including images, music, videos, and other digital content. The project is currently in Phase 1 development focusing on core MVP functionality.

## Development Commands

### Core Development
- `npm run dev` - Start development server with Turbopack (faster builds)
- `npm run build` - Build production version  
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks

### Development URL
- Local: http://localhost:3000

## Architecture & Technology Stack

### Current Stack
- **Next.js 15**: React framework with App Router architecture
- **React 19**: Latest React version with concurrent features
- **TypeScript 5**: Full type safety throughout codebase
- **Tailwind CSS v4**: Utility-first styling with new `@import` syntax
- **Turbopack**: Fast bundler enabled by default in development

### Planned Stack (Future Phases)
- **Database**: Prisma ORM with PostgreSQL
- **Authentication**: NextAuth.js
- **File Storage**: Cloudinary or AWS S3
- **Image Processing**: Sharp

## Project Architecture

### App Router Structure
```
src/app/
├── (auth)/          # Authentication routes (planned)
├── gallery/         # Gallery browsing pages (planned)  
├── upload/          # File upload interface (planned)
├── profile/         # User profiles (planned)
├── api/            # API routes for backend functionality
└── components/     # Shared React components
```

### Key Architectural Decisions
- **App Router**: Using Next.js 13+ App Router (not Pages Router)
- **TypeScript Paths**: `@/*` maps to `./src/*` for clean imports
- **Font Strategy**: Geist fonts loaded via `next/font/google` with CSS variables
- **Theming**: CSS custom properties for dark/light mode support
- **Component Strategy**: Shared components in `src/app/components/`

### Current Implementation Status
- ✅ Basic Next.js setup with TypeScript and Tailwind
- ✅ Root layout with font configuration
- ✅ Default homepage (Next.js starter template)
- ⏳ Core gallery functionality (Phase 1 in progress)

## Planned Feature Architecture

### MVP Features (Phase 1)
1. **File Upload System**: Multi-format support (images, audio, video)
2. **Gallery Browsing**: Grid layout with infinite scroll
3. **User Authentication**: Email-based registration/login
4. **Basic Categorization**: Tags and categories for content organization
5. **Search & Filtering**: Keyword search with sort options

### Data Models (Planned)
- **User**: Authentication, profiles, preferences
- **Artwork**: Files, metadata, tags, categories
- **Collections**: User favorites and custom galleries
- **Interactions**: Likes, comments, downloads

### File Handling Strategy
- **Upload**: Multi-file drag-and-drop interface
- **Storage**: Cloud storage with CDN delivery
- **Processing**: Automatic thumbnail generation and format optimization
- **Metadata**: AI model information, prompts, creation details

## Development Notes

### Styling System
- Uses Tailwind CSS v4 with new architecture
- CSS variables in `globals.css` for theme values
- Dark/light mode via `prefers-color-scheme`
- Responsive design with mobile-first approach

### TypeScript Configuration  
- Strict mode enabled for better type safety
- Path mapping configured for clean imports
- Next.js TypeScript plugin integrated

### Performance Considerations
- Turbopack for fast development builds
- Next.js Image component for optimized image loading
- Font optimization via `next/font`
- Future: Infinite scroll and virtualization for gallery views

### Internationalization
- Korean language support planned (프로젝트 한글 지원)
- English as secondary language
- UI text and metadata in multiple languages

## Development Workflow

### Phase 1 Priority Tasks
1. Replace default homepage with AI Gallery landing page
2. Create reusable UI components (buttons, cards, layouts)
3. Implement file upload interface
4. Build gallery grid layout
5. Add basic authentication system

### Code Organization Principles
- Component-based architecture with clear separation
- TypeScript interfaces for all data structures
- Consistent naming conventions (English for code, Korean for UI text)
- File-based routing following Next.js App Router conventions

### Future Integration Points
- Database schema will be defined in `src/lib/db/`
- Authentication logic in `src/lib/auth/`
- API routes will handle file uploads and data management
- UI components will be built with accessibility in mind

## Lummi.ai 웹사이트 구조 분석 및 구현 계획

### 참조 사이트 분석
Lummi.ai (https://www.lummi.ai/) - AI 생성 스톡 이미지 플랫폼을 참조하여 유사한 구조로 구현

# 사이트 테마

# AI Gallery - AI 작품 갤러리 플랫폼

AI로 생성된 다양한 작품들을 업로드하고 공유할 수 있는 갤러리 플랫폼입니다.

## 프로젝트 개요

사용자들이 AI 도구로 제작한 이미지, 음악, 영상 등의 작품을 업로드하고, 다른 사용자들과 공유하며, 다운로드할 수 있는 커뮤니티 중심의 갤러리 사이트입니다.

## 공통 컴포넌트 제작하기

/components 페이지를 만들고 아래 컴포넌트들을 공통 컴포넌트로 제작하고 /components 페이지에 디스플레이 해줘.

- ShadCN MCP를 실행해서 ShadCN 컴포넌트를 사용해서 구현해줘.
- 탭 없이 Single Column으로 작업해주고 각 컴포넌트를 잘 구분할 수 있도록 Title과 Divider로 구분해줘.
- Full Width를 사용해서 디스플레이 해줘.
- 한국어로 텍스트를 작성해줘.
- 직접 색상을 구현하 말고 전부 글로벌 테마를 그대로 사용해줘.
- emoji 사용하지 말고 아이콘을 사용해야하는 경우 lucide icon을 사용해줘.
- Event Handler Can't be passed to Server Component 에러가 발새하지 않도록 해줘.

### 페이지 구조 (Page Structure)

#### 1. 네비게이션 바 (Navigation Bar)
**위치**: 상단 고정 (Fixed Top)
**높이**: 64px (var(--header-height))
**배경**: 흰색 (var(--color-white))
**테두리**: 하단 회색 보더 (var(--color-gray-200))

**좌측 영역**:
- 로고: "AI Gallery" 또는 로고 이미지
- 네비게이션 메뉴:
  - "사진" (Photos)
  - "일러스트" (Illustrations) 
  - "3D" (3D)
  - "음악" (Music)
  - "영상" (Videos)

**우측 영역**:
- 검색 바 또는 "⌘K" 검색 단축키 버튼
- "Pro 무료체험" 버튼 (골드 배경)
- "로그인" 링크

**스타일링**:
- 폰트: Inter (var(--font-family))
- 버튼: 둥근 모서리 (var(--radius-full))
- 호버 효과: 부드러운 트랜지션 (var(--transition-all))

#### 2. 히어로 섹션 (Hero Section)
**높이**: 최소 400px
**배경**: 그라데이션 또는 단색 (var(--color-gray-50))

**콘텐츠**:
- 메인 타이틀: "AI로 만든 무료 스톡 이미지"
- 서브 타이틀: "다양한 AI 도구로 생성된 고품질 이미지를 무료로 다운로드하세요"
- CTA 버튼: "갤러리 둘러보기"
- 통계 정보: "10,000+ 이미지", "매일 업데이트"

#### 3. 필터 및 검색 영역 (Filter & Search Section)
**위치**: 히어로 하단
**스타일**: 스티키 또는 일반 위치

**구성 요소**:
- 검색 바: 키워드 검색
- 카테고리 필터: 태그 형태의 버튼들
- 정렬 옵션: 최신순, 인기순, 다운로드순
- 보기 옵션: 그리드 크기 조정

#### 4. 이미지 그리드 (Image Gallery Grid)
**레이아웃**: Masonry 또는 균등 그리드
**반응형**:
- 모바일: 2열 (sm:2)
- 태블릿: 3열 (md:3) 
- 데스크톱: 4-5열 (lg:4, xl:5)

**각 이미지 카드 정보**:
- 이미지 썸네일
- 호버 오버레이:
  - 다운로드 버튼
  - 좋아요 버튼
  - 상세보기 버튼
- 하단 메타데이터:
  - 이미지 제목
  - 작성자 정보
  - 태그들
  - 다운로드 수
  - 생성 AI 모델 정보

#### 5. 푸터 (Footer)
**배경**: 다크 (var(--color-gray-950))
**색상**: 밝은 텍스트 (var(--color-gray-100))

**콘텐츠**:
- 회사 정보
- 링크: 이용약관, 개인정보처리방침
- 소셜 미디어 링크
- 저작권 정보

### 컴포넌트 구조 (Component Architecture)

#### 공통 컴포넌트 (src/app/components/)
```
components/
├── ui/                    # 기본 UI 컴포넌트
│   ├── Button.tsx        # 버튼 컴포넌트
│   ├── Input.tsx         # 입력 필드
│   ├── Card.tsx          # 카드 레이아웃
│   ├── Badge.tsx         # 태그/뱃지
│   └── Modal.tsx         # 모달 창
├── layout/               # 레이아웃 컴포넌트  
│   ├── Header.tsx        # 네비게이션 바
│   ├── Footer.tsx        # 푸터
│   └── Container.tsx     # 콘텐츠 컨테이너
├── gallery/              # 갤러리 관련
│   ├── ImageCard.tsx     # 이미지 카드
│   ├── ImageGrid.tsx     # 이미지 그리드
│   ├── FilterBar.tsx     # 필터 바
│   └── SearchBox.tsx     # 검색 박스
└── common/               # 공통 기능
    ├── LoadingSpinner.tsx
    ├── ErrorBoundary.tsx
    └── SEOHead.tsx
```

#### 페이지 컴포넌트 (src/app/)
```
app/
├── page.tsx              # 홈페이지 (메인 갤러리)
├── layout.tsx            # 루트 레이아웃
├── loading.tsx           # 로딩 페이지
├── error.tsx             # 에러 페이지
├── gallery/
│   ├── page.tsx          # 갤러리 메인
│   ├── [category]/       # 카테고리별 갤러리
│   └── [id]/            # 개별 이미지 상세
├── upload/
│   └── page.tsx          # 업로드 페이지
├── profile/
│   └── page.tsx          # 프로필 페이지
└── api/                  # API 라우트
    ├── images/
    ├── upload/
    └── auth/
```

### 구현 우선순위 (Implementation Priority)

#### Phase 1A: 기본 레이아웃 및 네비게이션
1. **Header 컴포넌트** 구현
   - 로고 및 네비게이션 메뉴
   - 검색 기능 준비 (UI만)
   - 반응형 모바일 메뉴
   
2. **Footer 컴포넌트** 구현
   - 기본 정보 및 링크

3. **기본 레이아웃** 완성
   - Container 컴포넌트
   - 반응형 그리드 시스템

#### Phase 1B: 메인 콘텐츠 영역
1. **히어로 섹션** 구현
   - 타이틀 및 CTA
   - 통계 정보 표시

2. **이미지 그리드** 기본 구조
   - ImageCard 컴포넌트
   - ImageGrid 레이아웃
   - 더미 데이터로 테스트

3. **필터 바** UI 구현
   - 검색 박스
   - 카테고리 필터
   - 정렬 옵션

#### Phase 1C: 상호작용 기능
1. **검색 기능** 구현
2. **필터링** 로직
3. **무한 스크롤** 또는 페이지네이션
4. **이미지 상세보기** 모달

### 디자인 시스템 활용

**적용할 Lummi.ai 디자인 요소**:
- 미니멀한 색상 팔레트 (흑백 + 그레이 + 골드)
- Inter 폰트 활용
- 둥근 버튼 및 카드
- 부드러운 그림자 효과
- 빠른 트랜지션 애니메이션 (150ms)

**CSS 변수 활용 예시**:
- 색상: `var(--color-gray-950)` (메인 텍스트)
- 폰트: `var(--font-family)` (Inter)
- 간격: `var(--space-4)` (16px)
- 둥근 모서리: `var(--radius-full)` (버튼용)
- 그림자: `var(--shadow-md)` (카드 호버)

### 기술적 고려사항

**성능 최적화**:
- Next.js Image 컴포넌트로 이미지 최적화
- 가상화(Virtualization)를 통한 대량 이미지 처리
- 지연 로딩(Lazy Loading) 구현

**접근성**:
- 키보드 네비게이션 지원
- 스크린 리더 호환성
- 적절한 색상 대비 확보

**반응형 디자인**:
- 모바일 우선 설계
- 다양한 디바이스 대응
- 터치 인터페이스 최적화

## 실제 페이지 구현 가이드라인

### 메인 갤러리 페이지 구현 사항

#### 레이아웃 구조
```
1. Header (Lummi.ai 스타일)
2. Hero Section (검색 + 통계)
3. Image Grid (무한 스크롤 Masonry 레이아웃)
   - Footer 없이 계속 스크롤 가능
   - 스크롤 끝에 도달하면 자동으로 추가 이미지 로딩
```

#### 무한 스크롤 구현 요구사항

**기술 스택**:
- `react-intersection-observer` 또는 `IntersectionObserver API` 사용
- `useState`로 이미지 배열 및 로딩 상태 관리
- `useEffect`로 스크롤 감지 및 데이터 페칭

**동작 방식**:
1. **초기 로딩**: 첫 20-30개 이미지 표시
2. **스크롤 감지**: 하단 근처 도달 시 자동 트리거
3. **추가 로딩**: 다음 배치 이미지 20-30개 추가
4. **로딩 인디케이터**: 하단에 스피너 또는 스켈레톤 표시
5. **에러 처리**: 네트워크 실패 시 재시도 버튼

**성능 최적화**:
- **가상화**: `react-window` 또는 `react-virtualized` (대량 데이터용)
- **이미지 지연 로딩**: `loading="lazy"` 속성 활용
- **이미지 압축**: WebP 형식 우선, fallback PNG/JPG
- **캐싱**: Next.js Image 컴포넌트 자동 캐싱 활용

**UX 고려사항**:
- **부드러운 스크롤**: `scroll-behavior: smooth` 적용
- **로딩 상태**: Skeleton UI로 로딩 중임을 명확히 표시
- **에러 복구**: 실패한 이미지 재로딩 옵션 제공
- **스크롤 위치 복원**: 뒤로가기 시 이전 위치 유지

#### 구현 예시 구조

```typescript
// hooks/useInfiniteScroll.ts
interface UseInfiniteScrollReturn {
  images: ImageData[]
  isLoading: boolean
  error: string | null
  hasMore: boolean
  loadMore: () => void
}

// components/InfiniteImageGrid.tsx
export function InfiniteImageGrid() {
  const { images, isLoading, loadMore, hasMore } = useInfiniteScroll()
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100px'
  })
  
  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      loadMore()
    }
  }, [inView, hasMore, isLoading, loadMore])

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
      {images.map((image) => (
        <ImageCard key={image.id} {...image} />
      ))}
      {hasMore && (
        <div ref={ref} className="flex justify-center py-8">
          {isLoading && <Loader2 className="animate-spin" />}
        </div>
      )}
    </div>
  )
}
```

#### API 엔드포인트 구조

```typescript
// api/images/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '20')
  
  // 데이터베이스에서 이미지 페칭
  const images = await getImages({ page, limit })
  
  return Response.json({
    images,
    hasMore: images.length === limit,
    totalCount: await getTotalImageCount()
  })
}
```

#### Footer 제거 정책
- **메인 갤러리 페이지**: Footer 완전 제거, 무한 스크롤만
- **다른 페이지**: Footer 유지 (About, Terms, Contact 등)
- **이미지 상세 페이지**: 간소화된 Footer 또는 제거

#### 접근성 고려사항
- **키보드 네비게이션**: Tab으로 이미지 카드 순회 가능
- **스크린 리더**: 새로 로드된 이미지에 대한 안내
- **고대비 모드**: 로딩 인디케이터 명확히 표시
- **모션 감소**: `prefers-reduced-motion` 설정 시 애니메이션 최소화