console.log("Number");
console.table([
  [Number("44"), typeof Number("44")],
  [Number("33aa"), typeof Number("33aa")],
  [Number(""), typeof Number("")],
  [Number(null), typeof Number(null)],
  [Number(undefined), typeof Number(undefined)],
  [Number(NaN), typeof Number(NaN)],
  [Number([]), typeof Number([])],
  [Number({}), typeof Number({})],
  [Number(["1", "3"]), typeof Number(["1", "3"])],
]);

console.log("string");
console.table([
  [String(44), typeof String(44)],
  [String(""), typeof String("")],
  [String(null), typeof String(null)],
  [String(undefined), typeof String(undefined)],
  [String(NaN), typeof String(NaN)],
  [String([]), typeof String([])],
  [String({}), typeof String({})],
  [String(["1", "3"]), typeof String(["1", "3"])],
]);

console.log("boolean");
console.table([
  [Boolean(1), typeof Boolean(1)],
  [Boolean(0), typeof Boolean(0)],
  [Boolean(111), typeof Boolean(1111)],
  [Boolean("hhh"), typeof Boolean("hhh")],
  [Boolean(""), typeof Boolean("")],
  [Boolean(null), typeof Boolean(null)],
  [Boolean(undefined), typeof Boolean(undefined)],
  [Boolean(NaN), typeof Boolean(NaN)],
  [Boolean([]), typeof Boolean([])],
  [Boolean({}), typeof Boolean({})],
  [Boolean(["1", "3"]), typeof Boolean(["1", "3"])],
]);
