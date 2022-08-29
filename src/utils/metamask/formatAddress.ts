export default function formatAddress (address) {
	if (!address) return ''
  const start = address.substring(0, 5);
  const end = address.substring(address.length - 4);
  return `${start}...${end}`;
}