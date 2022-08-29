import { toast } from 'react-toastify'

export default function handleMMErrors (error) {
	if (error.code === 4001) return toast.warn('Connect request have rejected by User')
	if (error.code === 4902) return
	return toast.error('Metamask: something went wrong.')
}