const getLabel = (data) => {
	return new Promise((resolve, reject) => {
		uniCloud.callFunction(data)
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

export default {
	getLabel
}