'use strict';
// 获取数据库引用
const db = uniCloud.database()
exports.main = async (event, context) => {
	const {name} = event
	
	// 数据聚合
	const list = await db.collection('article')
		.aggregate() // 获取数据库的聚合实例
		.match({	 // 根据条件过滤
			classify: name
		})
		.project({		// 指定哪些字段不需要输出
			content: 0
		})
		.end()
	
	// const list = await db.collection("article")
	// .field({
	// 	content: false // 不显示content字段
	// })
	// .get()
	//返回数据给客户端
	return {
		code: 200,
		msg: '数据请求成功01',
		data: list.data
	}
};
