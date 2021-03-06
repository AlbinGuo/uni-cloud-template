import $http from '../http'

export const getLabel = (data) => {
	return $http({
		url: 'get_label',
		data
	})
}

export const getList = (data) => {
	return $http({
		url: 'get_list',
		data
	})
}

export const update_likes = (data) => {
	return $http({
		url: 'update_like',
		data
	})
}


export const get_search = (data) => {
	return $http({
		url: 'get_search',
		data
	})
}

export const get_detail = (data) => {
	return $http({
		url: 'get_detail',
		data
	})
}