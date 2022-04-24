'use strict';
// 获取数据库引用
const db = uniCloud.database()
exports.main = async (event, context) => {
	const list = await db.collection("article")
	.field({
		content: false // 不显示content字段
	})
	.get()
	console.log("===list==", list.data)
	//返回数据给客户端
	return {
		code: 200,
		msg: '数据请求成功01',
		data: list.data
	}
};
