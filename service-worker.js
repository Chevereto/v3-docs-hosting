/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a105ef8d9b560c1a069e51ea5c6d9a2d"
  },
  {
    "url": "api/index.html",
    "revision": "a50955d9f1d0399dbcbd5a784d309ae8"
  },
  {
    "url": "assets/css/0.styles.64db630d.css",
    "revision": "0bc7646ddf791732825b6d894e27139e"
  },
  {
    "url": "assets/img/dashboard_3.19.caa86734.png",
    "revision": "caa867345ef6659241fd6fd40cbfd148"
  },
  {
    "url": "assets/img/logo_onwhite.2de0f6b4.svg",
    "revision": "2de0f6b493a1080988e8fa12da4f5cf7"
  },
  {
    "url": "assets/img/panel-server-type.a2109131.jpg",
    "revision": "a2109131e978975c90c90bfcd949c85b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.796db6d9.js",
    "revision": "09af0207d6522506f3ac102d90b15acc"
  },
  {
    "url": "assets/js/11.ebe72c8c.js",
    "revision": "c5ffe3ad78fd24309257be60cd6939da"
  },
  {
    "url": "assets/js/12.9e696060.js",
    "revision": "da8bdaba0a14bfec815ac555202eac9c"
  },
  {
    "url": "assets/js/13.ce2eab79.js",
    "revision": "a2f2751cc611ab999c164ccf7541b0c4"
  },
  {
    "url": "assets/js/14.c512eaef.js",
    "revision": "5c94d09288d2878f5a5b95fe151870b1"
  },
  {
    "url": "assets/js/15.886adfa9.js",
    "revision": "53f8c6476277af6d8923224748a1517c"
  },
  {
    "url": "assets/js/16.73c327f9.js",
    "revision": "52953e94d5ac1f3cbdca4303eb930c87"
  },
  {
    "url": "assets/js/17.ad258477.js",
    "revision": "69a9c4bab9e74b6b9bc75ab676010407"
  },
  {
    "url": "assets/js/18.35f9ada3.js",
    "revision": "66cafeb3ed7c95aad205c299bbdf0efb"
  },
  {
    "url": "assets/js/19.cab657ea.js",
    "revision": "27b0bf743ab7f164d0518979aea057ea"
  },
  {
    "url": "assets/js/20.42ea4218.js",
    "revision": "0312d12e484d2849a6ff35de16abd4b2"
  },
  {
    "url": "assets/js/21.0e6f79f4.js",
    "revision": "b8ce5f92e3d2d256ceb5f7baa342c8e6"
  },
  {
    "url": "assets/js/22.f5be066b.js",
    "revision": "dcf9099f7e0854b930741393164e5fd3"
  },
  {
    "url": "assets/js/23.ba047810.js",
    "revision": "f35f884d0b9bb4f0b95c8207842a4f9a"
  },
  {
    "url": "assets/js/24.36c7f194.js",
    "revision": "f4145747a55dde4386afec4f98df4489"
  },
  {
    "url": "assets/js/25.f0226506.js",
    "revision": "16ab50ee58871318e9523160aea1b84b"
  },
  {
    "url": "assets/js/26.b4304eff.js",
    "revision": "43778932e6e6462f2e088899aeb86dab"
  },
  {
    "url": "assets/js/27.a85242ec.js",
    "revision": "df8dd9d2b623a931970a3806d084281d"
  },
  {
    "url": "assets/js/28.4070acd4.js",
    "revision": "2b942688cc613ffd815d661ef2c2b1af"
  },
  {
    "url": "assets/js/29.95b1c04a.js",
    "revision": "3be1ed6590b053317fff19016803e755"
  },
  {
    "url": "assets/js/3.54cbf02c.js",
    "revision": "3860cccb7e5ca3038a143e6b7aa81b44"
  },
  {
    "url": "assets/js/30.137bab73.js",
    "revision": "483d4597b0468f63a215d2fa4bcd13b7"
  },
  {
    "url": "assets/js/31.3f73aea9.js",
    "revision": "98040552faea4f99acf8746dad01c082"
  },
  {
    "url": "assets/js/32.ec38352f.js",
    "revision": "ac9eeba74cc754bb493333669b9a95a1"
  },
  {
    "url": "assets/js/33.3845fa17.js",
    "revision": "d30d0acf508d69c96e5e1ada37294514"
  },
  {
    "url": "assets/js/34.b742a089.js",
    "revision": "070c2f576b518fe3ee1b5fe63a885935"
  },
  {
    "url": "assets/js/35.faefec87.js",
    "revision": "9da257e222a55e3a15ccde944381f285"
  },
  {
    "url": "assets/js/36.fd944884.js",
    "revision": "e9a2a15e0ac7eb2dea70daadd21e5283"
  },
  {
    "url": "assets/js/37.e4869e15.js",
    "revision": "35099b235625a75e420da5593daae539"
  },
  {
    "url": "assets/js/38.4e28af92.js",
    "revision": "e8ab77c121abcf683f9c3870bf543d63"
  },
  {
    "url": "assets/js/39.20d70f68.js",
    "revision": "6a4b57e62ba8e582ad36adc18b2db525"
  },
  {
    "url": "assets/js/4.6401bf6b.js",
    "revision": "920ab020c4d25679d591fb8ffaef19ca"
  },
  {
    "url": "assets/js/40.a2d45780.js",
    "revision": "a9532dce44e8e7d9e3432cdcf23a34e0"
  },
  {
    "url": "assets/js/41.666b247f.js",
    "revision": "6f4da32f955cece24c66f1fdf1b27ad8"
  },
  {
    "url": "assets/js/42.c501689e.js",
    "revision": "fdb2d0c1da63444ae2d2881c1c7d358e"
  },
  {
    "url": "assets/js/43.addc2298.js",
    "revision": "8bd6e5081d1573f30a497f24df4f21c3"
  },
  {
    "url": "assets/js/44.cba0812b.js",
    "revision": "9014222091264fbbdd38cb7c351764b9"
  },
  {
    "url": "assets/js/45.d95ee5f8.js",
    "revision": "182a7b9ed0aa36da9eac5804c82b263f"
  },
  {
    "url": "assets/js/46.65fe2d32.js",
    "revision": "7ab17081b82beebfaaf723f65d1f619b"
  },
  {
    "url": "assets/js/47.dd39fd44.js",
    "revision": "7b05d79b8c40ae996dccfc68cced2f84"
  },
  {
    "url": "assets/js/48.44542329.js",
    "revision": "c72e793b50be9bc2aa110d9ec452236e"
  },
  {
    "url": "assets/js/49.f1f007fe.js",
    "revision": "c2a274822e2c83907cef380001160110"
  },
  {
    "url": "assets/js/5.9b9532fc.js",
    "revision": "10eac822404d5e364b0a4c32b3a700e2"
  },
  {
    "url": "assets/js/50.d0649e48.js",
    "revision": "8e66eaaa7fc23e2d1b75c0906649186a"
  },
  {
    "url": "assets/js/51.7e24c5bc.js",
    "revision": "fd41a39f0d5723b834fb5f86cd5ecf83"
  },
  {
    "url": "assets/js/52.f0b2eeb7.js",
    "revision": "d4928dbf0f3ac29d757e7a57bdd0fed7"
  },
  {
    "url": "assets/js/53.3e168558.js",
    "revision": "8d2839335dd43a1c0eff62490da1a948"
  },
  {
    "url": "assets/js/54.eec96659.js",
    "revision": "54c65325f990d1288323bb688fea46f1"
  },
  {
    "url": "assets/js/55.113401ff.js",
    "revision": "5d1d98f5571ff48dfecabbedc5b94237"
  },
  {
    "url": "assets/js/56.0cf861f6.js",
    "revision": "5f654ec0435b58ca5f0dd0bd2a35ca47"
  },
  {
    "url": "assets/js/57.d15e4dab.js",
    "revision": "33c944908e0ca3f5e782cded7f8706da"
  },
  {
    "url": "assets/js/58.fb7a2859.js",
    "revision": "5142738d3256676b1b432f7b3b5877e6"
  },
  {
    "url": "assets/js/59.3c0dd833.js",
    "revision": "7d1bc229ea06bb1b7e298dad7b9c2d52"
  },
  {
    "url": "assets/js/6.549ced75.js",
    "revision": "80436788a9fb6a1f5ef6bfb0256004ec"
  },
  {
    "url": "assets/js/60.adb8d5d3.js",
    "revision": "f3da7123743bc0124846bd471510b182"
  },
  {
    "url": "assets/js/61.8e6e7ddd.js",
    "revision": "9b4d40b719e119bf7840e36b3d357896"
  },
  {
    "url": "assets/js/62.8447d0b5.js",
    "revision": "4006ab7cde18bbcc157a4799b44d2f05"
  },
  {
    "url": "assets/js/63.4b2d599c.js",
    "revision": "afcc7851dc198a4445ea077abe7213a0"
  },
  {
    "url": "assets/js/64.c38a536e.js",
    "revision": "b4d7ed015182ca9c7e53ae9e759d8f03"
  },
  {
    "url": "assets/js/7.558b1053.js",
    "revision": "54b1bdda181f33aa34cbdfa60b2457d2"
  },
  {
    "url": "assets/js/8.57533f6d.js",
    "revision": "eda80d5f563cf87c87daf03aed31f58f"
  },
  {
    "url": "assets/js/9.ddf93fac.js",
    "revision": "6deddafa16423126d18446c9e27c3f4c"
  },
  {
    "url": "assets/js/app.98b7b6da.js",
    "revision": "30644825c4e36d82fc8e9b0240ac7466"
  },
  {
    "url": "assets/js/vendors~docsearch.21f21cd2.js",
    "revision": "eef0e2a94dc0a8e6971dabc305f2c1d2"
  },
  {
    "url": "features/content/bulk-content-importer.html",
    "revision": "1b9d5770cd43885d28d57b7fa203c6a0"
  },
  {
    "url": "features/customization/language.html",
    "revision": "c6eb5082fdb1c67b44c6900764077e13"
  },
  {
    "url": "features/customization/routes.html",
    "revision": "25c26e13a70e8ef718a6539e7e578655"
  },
  {
    "url": "features/customization/theme.html",
    "revision": "9fea37d786cd20e485f1ff2aec6e7f5b"
  },
  {
    "url": "features/integrations/external-storage.html",
    "revision": "476d3e86d9f69c32eb72dd3bf3ae7c27"
  },
  {
    "url": "features/integrations/pup.html",
    "revision": "0be53728d6289cae79d841406e643121"
  },
  {
    "url": "features/integrations/sharex.html",
    "revision": "d7f2637d6ca375e140f6a3e305761889"
  },
  {
    "url": "features/integrations/social-login.html",
    "revision": "762524b6530f668486ffdcf02552068d"
  },
  {
    "url": "features/reference/security.html",
    "revision": "84610a6f12c205f34471874d8d6b875f"
  },
  {
    "url": "get-started/deploy.html",
    "revision": "c358d38ca1d47077328872240f233d64"
  },
  {
    "url": "get-started/index.html",
    "revision": "08e27ff6f4330bc2caf0098183693d70"
  },
  {
    "url": "get-started/status.html",
    "revision": "cea52ee356ad40d23e15fa91802c12bf"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "e8b5fa3160306f249145821b4cfeae43"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "8ac630b2b40dca3cd21aadc83f4a26b0"
  },
  {
    "url": "index.html",
    "revision": "8908c1a5726e1ffce7b65ce96d41f607"
  },
  {
    "url": "logo.png",
    "revision": "2179105dc8009814831fae6afa9c1024"
  },
  {
    "url": "logo.svg",
    "revision": "fbf1f71e002568a8b5a8ec28c3caa73a"
  },
  {
    "url": "manual/first-steps/initial-setup.html",
    "revision": "8047950f3b6bf0747476adc9db4a3490"
  },
  {
    "url": "manual/first-steps/setup-cron.html",
    "revision": "360ec80d04e2df2ecf28c42bc1ab229c"
  },
  {
    "url": "manual/first-steps/setup-email.html",
    "revision": "717fad586acba2f6971506a0ccd24f3e"
  },
  {
    "url": "manual/troubleshooting/debug.html",
    "revision": "8abf7ccb1870a9905a5e4fbb7578dbe1"
  },
  {
    "url": "manual/troubleshooting/errors.html",
    "revision": "2b61d6cedf9a509a38c6b6baa4bd2d54"
  },
  {
    "url": "manual/troubleshooting/server-issues.html",
    "revision": "d911ac936f8f0abf44d5833a396a1432"
  },
  {
    "url": "settings/additional-settings.html",
    "revision": "46327b926c0e03c5f048ce3061654d8a"
  },
  {
    "url": "settings/api.html",
    "revision": "7bae6bf5a30b7054afa8931f52eec502"
  },
  {
    "url": "settings/banners.html",
    "revision": "6caecaa4977af9058106340be722a34e"
  },
  {
    "url": "settings/categories.html",
    "revision": "e8646cf807971121d69194e16f11a333"
  },
  {
    "url": "settings/consent-screen.html",
    "revision": "97c26baeb82e274619314371d188105d"
  },
  {
    "url": "settings/content.html",
    "revision": "b7a67c6508a7f8fcecc823a3662b1e58"
  },
  {
    "url": "settings/email.html",
    "revision": "41329e526bdaf8671b02ea90e054440d"
  },
  {
    "url": "settings/external-services.html",
    "revision": "eced54cbe34457ede664ebded19e9c34"
  },
  {
    "url": "settings/external-storage.html",
    "revision": "80cf47368149f43a9eec0be3b2f9cbe9"
  },
  {
    "url": "settings/flood-protection.html",
    "revision": "a7c3d5e633f255d567bad304901d01e7"
  },
  {
    "url": "settings/homepage.html",
    "revision": "7e2a93f22d2d36f19bc67b9fb77d1991"
  },
  {
    "url": "settings/image-upload.html",
    "revision": "9b94fd46cb8d1c84c687eb5da2373400"
  },
  {
    "url": "settings/index.html",
    "revision": "a286c8ba24b4299edf872c8fba38be7a"
  },
  {
    "url": "settings/ip-bans.html",
    "revision": "3bb614f9b5427e4cc00f91f8278c75cb"
  },
  {
    "url": "settings/languages.html",
    "revision": "caeb247e72b895db8e98e7c1648bc776"
  },
  {
    "url": "settings/listings.html",
    "revision": "882f102af4330dd0742f128bdfdf65d5"
  },
  {
    "url": "settings/pages.html",
    "revision": "3689d7da8215c30711a322104ce962bd"
  },
  {
    "url": "settings/routing.html",
    "revision": "6a7ca9cb9b60018fd4620052596b1b85"
  },
  {
    "url": "settings/social-networks.html",
    "revision": "786cbe83db1b34ee03bed66ca92863e2"
  },
  {
    "url": "settings/system.html",
    "revision": "c91873f3685497485f70cc37b5bcbdfc"
  },
  {
    "url": "settings/theme.html",
    "revision": "763c1d80839e84d1db690920e99ed5cc"
  },
  {
    "url": "settings/tools.html",
    "revision": "0fd71d660064acc98220798a7e3a76f4"
  },
  {
    "url": "settings/users.html",
    "revision": "907b8c506ce1b360d64dc7c62053ae36"
  },
  {
    "url": "settings/website.html",
    "revision": "1663a9c50dc4b2b3d0fea503f79a278d"
  },
  {
    "url": "setup/container/bootstrapped.html",
    "revision": "11ad77a287fd36e8a247918096d92b81"
  },
  {
    "url": "setup/container/registry.html",
    "revision": "4fd8eebd985dd77beb9a7d9668e9ac20"
  },
  {
    "url": "setup/container/requirements.html",
    "revision": "addfd7a0ea350eb4656dc96b9a169abf"
  },
  {
    "url": "setup/container/running.html",
    "revision": "19f05cd9d6b72e07c86222e9c8508397"
  },
  {
    "url": "setup/server/installation.html",
    "revision": "237f026c4b7b68a6c97155e40e72b359"
  },
  {
    "url": "setup/server/requirements.html",
    "revision": "52fdb7f96c2770e545fa7b3ea6c6b0cd"
  },
  {
    "url": "setup/server/settings-file.html",
    "revision": "8ccae3842dc3c375f8f9fdd14c8d415e"
  },
  {
    "url": "setup/server/updating.html",
    "revision": "8e99e75abec641bfab95e4ac64038a3d"
  },
  {
    "url": "setup/server/upgrading.html",
    "revision": "8a349dda9f8a09c026672f35d106ad2a"
  },
  {
    "url": "setup/system/environment.html",
    "revision": "59686e0a8d62a734ece519b19f283d11"
  },
  {
    "url": "setup/system/requirements.html",
    "revision": "9789ce41ab8596774f88ecc403eca394"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
