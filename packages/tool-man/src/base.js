/**
 * @version 1.0.0
 * @param { any } target
 * @returns { string }
 */

export function getTypeofTarget(target) {
  return typeof target;
}

/**
 * @version 1.0.1
 * @param {*} target
 * @param {*} constructor
 * @returns
 */
export function getInstanceOfTarget(target, constructor) {
  return target instanceof constructor;
}

/**
 *
 * @param {string} name
 */
export function sayHello(name) {
  console.log(`hello, ${name}`);
}

/**
 * 生成指定范围内的随机整数
 *
 * @param {number} min - 随机数范围的最小值（包含）
 * @param {number} max - 随机数范围的最大值（包含）
 * @returns {number} - 在指定范围内的随机整数
 */
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
