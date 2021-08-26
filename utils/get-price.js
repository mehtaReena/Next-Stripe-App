const getPrice = numDonuts =>
  (Math.round(numDonuts * 800.0 * 100) / 100).toFixed(2);

export default getPrice;
