/**
 * ============================================================
 *  사이트 설정 파일 (site.ts)
 * ============================================================
 *
 * 새 사이트 생성 시 이 파일만 수정하면 됩니다.
 * Navbar, Footer, SEO, DB 접두어 등 모든 설정이 여기서 관리됩니다.
 *
 * === 수정 체크리스트 ===
 * 1. id          → 폴더명과 동일하게 (예: 'coding', 'ai-hub')
 * 2. name/nameKo → 영문명 / 한국어명
 * 3. description → SEO 설명
 * 4. url         → https://{id}.dreamitbiz.com
 * 5. dbPrefix    → Supabase 테이블 접두어 (예: 'cod_', 'aih_')
 * 6. brand.parts → 로고 텍스트 (마지막 part만 변경)
 * 7. menuItems   → 네비게이션 메뉴 구성
 * 8. features    → shop/community/search/auth 토글
 *
 * === 수정 불필요 ===
 * - company      → 모든 사이트 동일 (DreamIT Biz)
 * - colors       → 5색 테마 공용
 * - parentSite   → 본사이트 링크 공용
 * - familySites  → 필요 시 추가/변경
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  // ── [필수] 사이트 식별자 ──
  // 폴더명과 동일하게 설정 (GitHub 리포명, storage key, cookie 구분에 사용)
  id: 'new-site',

  // ── [필수] 사이트 기본 정보 ──
  name: 'DreamIT New Site',             // 영문 사이트명 (브라우저 탭, SEO)
  nameKo: '드림아이티 새 사이트',         // 한국어 사이트명
  description: 'DreamIT Biz - 새 사이트 설명을 입력하세요',  // SEO meta description
  url: 'https://new-site.dreamitbiz.com',  // 배포 도메인 (CNAME과 일치)

  // ── [필수] Supabase 테이블 접두어 ──
  // 2~4자 약어 + 언더스코어 (예: 'cod_', 'aih_', 'bsh_')
  // 모든 테이블명 앞에 자동 부착: ns_orders, ns_order_items 등
  dbPrefix: 'ns_',

  // ── 부모 사이트 (공용 — 수정 불필요) ──
  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  // ── [필수] 브랜드 로고 텍스트 ──
  // Navbar 왼쪽 로고: Dream + IT + {사이트명}
  // 마지막 part의 text만 변경하세요
  brand: {
    parts: [
      { text: 'Dream', className: 'brand-dream' },
      { text: 'IT', className: 'brand-it' },
      { text: 'Biz', className: 'brand-biz' }     // ← 사이트명으로 변경
    ]
  },

  // 테마 컬러 (meta theme-color, 기본 dark blue)
  themeColor: '#0046C8',

  // ── 회사 정보 (공용 — 수정 불필요) ──
  // Footer에서 자동 참조됩니다
  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    publisherNumber: '제2026-000026호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  // ── [선택] 기능 토글 ──
  // 필요 없는 기능은 false로 설정하면 메뉴/라우트가 자동 비활성화
  features: {
    shop: true,        // 스토어 (장바구니/결제)
    community: true,   // 커뮤니티 (공지/QnA)
    search: true,      // 검색 모달
    auth: true,        // 로그인/회원가입
    license: false,    // 라이선스 관리 (특수 용도)
  },

  // ── 색상 테마 옵션 (공용 — 수정 불필요) ──
  // Navbar 컬러 피커에서 5색 선택 가능
  // CSS 변수 자동 전환: base.css의 [data-color="..."] 참조
  colors: [
    { name: 'blue', color: '#0046C8' },      // 기본 (dark blue)
    { name: 'red', color: '#C8102E' },
    { name: 'green', color: '#00855A' },
    { name: 'purple', color: '#8B1AC8' },
    { name: 'orange', color: '#C87200' },
  ],

  // ── [필수] 네비게이션 메뉴 ──
  // labelKey: translations.ts의 키 경로 (점 표기법)
  // dropdown 배열이 있으면 서브메뉴로 표시
  // activePath: 해당 경로 시작 시 active 표시 (생략 시 path와 동일)
  menuItems: [
    { path: '/', labelKey: 'nav.home' },
    // 예: 드롭다운 메뉴
    // {
    //   labelKey: 'nav.education',
    //   path: '/education',
    //   activePath: '/education',
    //   dropdown: [
    //     { path: '/education/basic', labelKey: 'site.nav.basic' },
    //     { path: '/education/advanced', labelKey: 'site.nav.advanced' }
    //   ]
    // },
    // 예: 단일 링크
    // { path: '/about', labelKey: 'nav.about' },
  ],

  // ── 푸터 바로가기 링크 ──
  // menuItems와 동일한 labelKey 사용
  footerLinks: [
    { path: '/', labelKey: 'nav.home' },
  ],

  // ── Family Site 목록 ──
  // Footer 하단의 Family Sites 드롭다운에 표시
  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'AHP 연구 플랫폼', url: 'https://ahp-basic.dreamitbiz.com' },
    { name: '핵심역량 자가측정', url: 'https://competency.dreamitbiz.com' },
  ]
};

export default site;
