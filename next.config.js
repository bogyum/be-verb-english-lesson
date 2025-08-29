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
  // 정적 파일 경로 설정
  assetPrefix: process.env.NODE_ENV === 'production' ? '/be-verb-english-lesson/' : '',
}

module.exports = nextConfig
