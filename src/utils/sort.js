const SORT_ASCENDING = "asc";
const SORT_DESCENDING = "desc";

/**
 * @param {string} property
 * @param {string} sortOrder - 'asc' | 'desc'
 * @returns {(a: string, b: string) => boolean}
 */
function sortPropertyNumeric(property, sortOrder) {
  return (a, b) =>
    compare(a[property], b[property], sortOrder === SORT_DESCENDING);
}

/**
 * @param {string} property
 * @param {string} sortOrder - 'asc' | 'desc'
 * @returns {(a: string, b: string) => boolean}
 */
function sortPropertyAlphabetical(property, sortOrder) {
  return (a, b) =>
    compare(
      a[property].toLowerCase(),
      b[property].toLowerCase(),
      sortOrder === SORT_DESCENDING
    );
}

/**
 * @param {string} property
 * @param {string} sortOrder - 'asc' | 'desc'
 * @returns {(a: string, b: string) => boolean}
 */
function sortPropertyByDate(property, sortOrder) {
  return (a, b) =>
    compare(
      new Date(a[property] || 0),
      new Date(b[property] || 0),
      sortOrder === SORT_DESCENDING
    );
}

/**
 * @param {*} a
 * @param {*} b
 * @param {boolean} desc
 */
function compare(a, b, desc) {
  if (a < b) return desc ? 1 : -1;
  if (a > b) return desc ? -1 : 1;
  return 0;
}

export {
  SORT_ASCENDING,
  SORT_DESCENDING,
  sortPropertyNumeric,
  sortPropertyAlphabetical,
  sortPropertyByDate
};
