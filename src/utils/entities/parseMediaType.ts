import { VIDEO, AUDIO, IMAGE } from '@constants/media-types'

export default function parseMediaType (mediaType) {
	if (!mediaType) return null
	if (mediaType.includes('video')) return VIDEO
	if (mediaType.includes('audio')) return AUDIO
	return IMAGE
}