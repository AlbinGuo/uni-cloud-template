'use strict';
// 获取数据库引用
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const {
		user_id,
		value
	} = event
		
	const userInfo = await db.collection('user').doc(user_id).get()
	const article_likes_ids = userInfo.data[0].article_likes_ids
	// 数据聚合
	const list = await db.collection('article')
		// 获取数据库的聚合实例
		.aggregate() 
		.addFields({
			is_like: $.in(['$_id', article_likes_ids])
		})
		// 指定哪些字段不需要输出
		.project({		
			content: 0
		})
		.match({
			title: new RegExp(value)
		})
		.end()

	//返回数据给客户端
	return {
		code: 200,
		msg: '数据请求成功',
		data: list.data
	}
};
