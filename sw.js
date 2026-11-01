// PWAとして認識させるための最小限のサービスワーカー
self.addEventListener('install', (e) => {
    console.log('[Service Worker] インストール完了');
});

self.addEventListener('fetch', (e) => {
    // 通信をそのまま通す（今回はオフライン対応などを省略した簡易版です）
});