if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker
        .register('./firebase-messaging-sw.js', { scope: 'SW_PUBLIC_SCOPE' })
        .then(function (info) {
          // console.info('Registered service-worker', info);
          console.log(info);
        })
        .catch(function (error) {
          console.info('Failed to register service-worker', error);
        });
    });
  }