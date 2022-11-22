"use strict";

var _require = require('@woowacourse/mission-utils'),
    Console = _require.Console;
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */


var OutputView = {
  printStart: function printStart() {
    Console.print('다리 건너기 게임을 시작합니다.\n\n');
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap: function printMap(info, input) {},

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult: function printResult(info) {
    Console.print('최종 게임 결과');
    this.printMap(info);
    Console.print('게임 성공 여부 : ' + info.currentPosition === info.bridgeLength ? '성공' : '실패');
    Consolo.print('총 시도한 횟수 : ' + info.gameCount);
  }
};
module.exports = OutputView;