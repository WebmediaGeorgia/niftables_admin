export default function parsePrice ({ price, gasFee }) {
  if (!gasFee) return Number(price).toFixed(2);
  return (Number(price) + Number(gasFee)).toFixed(2);
}
