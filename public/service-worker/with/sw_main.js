// Make sure sw are supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../sw_cached_pages.js') //Listed files will be cached
      // .register('../sw_cached_site.js') //All files will automatically be cached
      .then(reg => console.log('Service Worker: Registered (Pages)'))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}

 //In chrome: Application -> Service Worker -> Check Offline -> Reload the page
