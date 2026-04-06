/**
 * 사이트 설정 파일
 * 하위 사이트의 브랜드, 메뉴, 푸터 등을 정의합니다.
 * 이 파일만 수정하면 Navbar/Footer가 자동으로 반영됩니다.
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  // ── 사이트 식별자 (폴더명, storage key 등에 사용) ──
  id: 'new-site',

  // 사이트 기본 정보
  name: 'DreamIT Books',
  nameKo: '드림아이티 출판사',
  description: 'DreamIT Biz 출판사 - 도서, 전자출판, 간행물',
  url: 'https://books.dreamitbiz.com',

  // ── Supabase 테이블 접두어 ──
  dbPrefix: 'ns_',

  // 부모 사이트
  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  // 브랜드 로고 텍스트
  brand: {
    parts: [
      { text: 'Dream', className: 'brand-dream' },
      { text: 'IT', className: 'brand-it' },
      { text: 'Books', className: 'brand-biz' }
    ]
  },

  // 테마 컬러 (meta theme-color)
  themeColor: '#0046C8',

  // ── 회사 정보 (Footer에서 참조) ──
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

  // ── 기능 토글 ──
  features: {
    shop: true,
    community: true,
    search: true,
    auth: true,
    license: false,
  },

  // ── 색상 테마 옵션 (Navbar 컬러 피커) ──
  colors: [
    { name: 'blue', color: '#0046C8' },
    { name: 'red', color: '#C8102E' },
    { name: 'green', color: '#00855A' },
    { name: 'purple', color: '#8B1AC8' },
    { name: 'orange', color: '#C87200' },
  ],

  // 네비게이션 메뉴
  // dropdown이 있으면 서브메뉴, 없으면 단일 링크
  menuItems: [
    { path: '/', labelKey: 'nav.home' },
    {
      labelKey: 'site.nav.books',
      path: '/books',
      activePath: '/books',
      dropdown: [
        { path: '/books/it', labelKey: 'site.nav.itBooks' },
        { path: '/books/education', labelKey: 'site.nav.eduBooks' }
      ]
    },
    { path: '/shop', labelKey: 'shop.title', activePath: '/shop' }
  ],

  // 푸터 바로가기 링크
  footerLinks: [
    { path: '/', labelKey: 'nav.home' },
    { path: '/books', labelKey: 'site.nav.books' },
    { path: '/shop', labelKey: 'shop.title' }
  ],

  // Family Site 목록 (부모 사이트 + 형제 사이트)
  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'AHP 연구 플랫폼', url: 'https://ahp-basic.dreamitbiz.com' },
    { name: '핵심역량 자가측정', url: 'https://competency.dreamitbiz.com' }
  ]
};

export default site;
