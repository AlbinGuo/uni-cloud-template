export default function $http(options){
	const {url, data} = options
	const dataObj = {
		user_id: '626401aa1b2993000182a734',
		...data
	}
	return new Promise((resolve, reject) => {
		
		uniCloud.callFunction({
				name: url,
				data: dataObj
			})
			.then((res) => {
				if(res.result.code === 200){
					resolve(res.result)
				}else{
					reject(res)
				}
			})
			.catch(e => {
				reject(e)
				})
	})
}