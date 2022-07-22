export const onlyText = (str: string, limit: number) => {
	return str.replace(/[^a-z ]/gi, '').slice(0, limit) + '...'
}
