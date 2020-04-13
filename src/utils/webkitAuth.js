import Bowser from 'bowser';

// 验证浏览器版本
const browser = Bowser.getParser(window.navigator.userAgent);

const isValidBrowser = browser.satisfies({
  windows: {
    'internet explorer': '>9',
    'Microsoft Edge': '>16'
  },
  macos: {
    safari: '>10.1'
  },
  firefox: '>53',
  opera: '>=56',
  chrome: '>51',
  'QQ Browser': '>7.5'
});

export { isValidBrowser };