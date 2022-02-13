// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
      break;
    case "Energizer":
    case "Green Garden":
      return 1.5;
      break;
    case "Tropical Island":
      return 3;
      break;
    case "All or Nothing":
      return 5;
      break;
    default:
      return 2.5;
  }
}
export function limeSizeToCut(lime) {
  switch (lime) {
    case "small":
      return 6;
      break;
    case "medium":
      return 8;
      break;
    case "large":
      return 10;
      break;
    default:
      return 0;
  }
}
/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let i = 0;
  let wedges = 0;
  let totalWedges = 0;
  while (i < limes.length && totalWedges <= wedgesNeeded) {
    let wedges = limeSizeToCut(limes[i]);
    totalWedges += wedges;
    if (wedgesNeeded !== 0) {
      i++;
    }
  }
  return i;
}
/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let time = 0;
  let i = 0;
  let orderArr = [];
  do {
    time = timeToMixJuice(orders[i]);
    timeLeft = timeLeft - time;
    i++;
    orderArr = orders.slice(0, i);
  } while (timeLeft > 0);
  orders.splice(0, orderArr.length);
  return orders;
}
