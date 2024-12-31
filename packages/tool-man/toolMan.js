/**
 * @version 1.0.0
 * @param { any } target
 * @returns { string }
 */

function getTypeofTarget(target) {
  return typeof target;
}

/**
 * @version 1.0.1
 * @param {*} target
 * @param {*} constructor
 * @returns
 */
function getInstanceOfTarget(target, constructor) {
  return target instanceof constructor;
}

export { getInstanceOfTarget, getTypeofTarget };
