'use strict';
// 获取数据库引用
const db = uniCloud.database()
exports.main = async (event, context) => {
	const { 
		name,
		page= 1,
		pageSize= 10
	} = event
	let classifyObj = {}
	if(name !== '全部'){
		classifyObj = {
			classify: name
		}
	}
	// 数据聚合
	const list = await db.collection('article')
		// 获取数据库的聚合实例
		.aggregate() 
		// 根据条件过滤
		.match(classifyObj)
		// 指定哪些字段不需要输出
		.project({		
			content: 0
		})
		.skip(pageSize * (page -  1))
		.limit(pageSize)
		.end()
	
	// const list = await db.collection("article")
	// .field({
	// 	content: false // 不显示content字段
	// })
	// .get()
	//返回数据给客户端
	return {
		code: 200,
		msg: '数据请求成功',
		data: list.data
	}
};
