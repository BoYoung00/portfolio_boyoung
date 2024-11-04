const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  // pwa: {
  //   workboxOptions: {
  //     // 정적 자원을 캐시하기 위한 설정
  //     runtimeCaching: [
  //       {
  //         urlPattern: /\.(?:png|jpg|jpeg|svg|css|js)$/,
  //         handler: 'CacheFirst',
  //         options: {
  //           cacheName: 'static-resources',
  //           expiration: {
  //             maxEntries: 50, // 캐시에 저장할 최대 항목 수
  //             maxAgeSeconds: 30 * 24 * 60 * 60, // 30일 동안 캐싱
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
});
