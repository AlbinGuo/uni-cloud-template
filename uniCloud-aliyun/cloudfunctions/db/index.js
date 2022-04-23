'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection("user")
	console.log('event===',event)
	// const userInfo = await collection.doc("62638d1ea6a7210001018805").get()
	const res = await collection.where({
		...event
	}).get()
	return {
		code: 200,
		msg: '查询成功',
		data: res
	}
};
