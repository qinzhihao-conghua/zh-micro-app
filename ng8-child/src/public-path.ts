// __MICRO_APP_ENVIRONMENT__和__MICRO_APP_PUBLIC_PATH__是由micro-app注入的全局变量
debugger
// @ts-ignore
if (window.__MICRO_APP_ENVIRONMENT__) {
    // @ts-ignore
    __webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH__;
    console.log('进入public-path');
}
