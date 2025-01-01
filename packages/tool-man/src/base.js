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
