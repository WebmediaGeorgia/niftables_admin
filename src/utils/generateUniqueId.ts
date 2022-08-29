let lastId = 0

export default function generateUniqueId (prefix = 'id') {
  lastId++
  return `${prefix}-${lastId}`
}
