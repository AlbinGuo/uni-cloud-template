import $http from '../http'

export const getList = (data) => {
	return $http({
		url: 'login',
		data
	})
}

export const getLabel = (data) => {
	return $http({
		url: 'get_label',
		data
	})
}

