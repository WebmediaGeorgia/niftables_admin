export default function checkMMInstalled () {
	if (!window.ethereum) return false
  return true
}