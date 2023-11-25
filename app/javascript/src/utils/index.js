import * as R from "ramda";

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);

export const modifyKeys = (keyMap, array) =>
  array.map(item => {
    const newItem = {};
    Object.keys(item).forEach(key => (newItem[keyMap[key] || key] = item[key]));

    return newItem;
  });
