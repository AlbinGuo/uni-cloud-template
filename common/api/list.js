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

