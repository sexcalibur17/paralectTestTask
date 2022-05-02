export const getPagination = (pageAmount, currentPage) => {
	let result = []
	if (pageAmount <= 5) {
		for (let i = 0; i < pageAmount; i++) {
			result.push(i + 1)
		}
		return result
	} else if (currentPage > pageAmount - 5) {
		for (let i = 0; i < 5; i++) {
			result.push(pageAmount - i)
		}
		return result.reverse()
	} else if (currentPage === 1) {
		return [1, 2, 3]
	} else {
		return [currentPage, currentPage+1, currentPage+2]
	}
}