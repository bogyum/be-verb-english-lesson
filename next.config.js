/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages 배포를 위한 설정
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages의 base path 설정
  basePath: process.env.NODE_ENV === 'production' ? '/be-verb-english-lesson' : '',
  // 정적 파일 경로 설정 - assetPrefix 제거 (basePath만 사용)
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/be-verb-english-lesson/' : '',
}

module.exports = nextConfig
