const getPrice = qty =>
  (Math.round(qty * 800.0 * 100) / 100).toFixed(2);

export default getPrice;
