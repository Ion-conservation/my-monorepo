/**
 * @version 1.0.0
 * @param { number | string | boolean | undefined | object | symbol | bigint | null } target
 * @returns { string }
 */

export function getTypeofTarget(
  target:
    | number
    | string
    | boolean
    | undefined
    | object
    | symbol
    | bigint
    | null
): string {
  return typeof target;
}

/**
 * @version 1.0.1
 * @param {*} target
 * @param {*} constructor
 * @returns
 */
export function getInstanceOfTarget(target: any, constructor: any) {
  return target instanceof constructor;
}

/**
 *
 * @param {string} name
 */
export function sayHello(name: string) {
  console.log(`hello, ${name}`);
}

/**
 * 生成指定范围内的随机整数
 *
 * @param {number} min - 随机数范围的最小值（包含）
 * @param {number} max - 随机数范围的最大值（包含）
 * @returns {number} - 在指定范围内的随机整数
 */
export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 生成指定长度的随机字符串
 * @param {number} length - 随机字符串的长度
 * @returns {string} 生成的随机字符串
 */
export function getRandomString(length: number) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
}

/**
 * 生成指定长度的随机数组
 *
 * @param {number} length 数组的长度
 * @returns {number[]} 由随机数构成的数组
 */
export function getRandomArray(length: number) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(getRandomNumber(1, 100));
  }
  return array;
}

/**
 *
 * @returns {string}
 */
export function getDay(): number {
  return new Date().getDay();
}

/**
 * 获取当前时间戳
 */
export function getTime(): number {
  return new Date().getTime();
}
