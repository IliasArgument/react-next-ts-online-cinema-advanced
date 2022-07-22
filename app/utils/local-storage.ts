export const getStorageLocalStorage = (name: string) => {
	if (typeof localStorage !== undefined) {
		const ls = localStorage.getItem(name)
		return ls
	}
	//если условие не подходит вернем null
	return null
}
