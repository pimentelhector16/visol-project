export default function formatCurrency(num) {
  return "Q" + Number(num.toFixed(1)).toLocaleString() + " ";
}
