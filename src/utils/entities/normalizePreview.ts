import { NFT, PACKS } from '@constants/payments'

export default function normalizePreview ({ data, type }) {
  if (!data) return null
  if (type === PACKS) {
    return {
      mediaUrl: data.imageUrl,
      mediaType: 'image/jpeg'
    }
  }
  if (type === NFT) {
    const { mediaType, mediaUrl, mediaPreviewUrl } = data
    return {
      mediaType,
      mediaUrl,
      mediaPreviewUrl
    }
  }
  console.warn(`Unsupported type: ${type} media preview`)
  return null
}
