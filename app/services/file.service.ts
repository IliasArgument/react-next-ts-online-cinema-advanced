import axios from 'api/interceptors'

import { IGenreEditInput } from '@/components/screens/admin/genre/genre-edit-interface'

import { getGenresUrl } from '@/config/api.config'

export const FileService = {
	async upload(file: FormData, folder?: string) {
		return axios.post<{ url: string; name: string }[]>(`/files`, file, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	},
}
