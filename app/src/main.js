import { cube, square } from './util'; // import square, but this is unused function.

(function ($) {
  'use strict';

  const unusedValue = 'unused'; // 코드에서 전혀 사용되지 않는 변수. 제거된다.

  const unusedValueFromOtherModule = cube(5); // 사용되지 않는 변수이지만, (0, _util.cube)(5); 형태로 변환되어 소스 상에 남아 실행된다. 제거되지 않는다.

  const usedValueByConsole = 'usedValueByConsole'; // console 에서 사용하는 변수. compress: { drop_console: true } 옵션 설정시에는 console 이 제거되므로, 사용되지 않는 변수가 되어 제거된다.
  console.log('usedValueByConsole :', usedValueByConsole);

  const usedValue = 'usedValue'; // 코드에 남아 사용되는 형태로 변환된다.
  $(document).on('click', (evt) => window.alert(usedValue)); // ES6 grammer. require 'babel-loader' in webpack setting environment
}(jQuery));