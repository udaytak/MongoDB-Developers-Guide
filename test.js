	db.posts.insertOne({title:'First Post', text:'this is fist post', tags:['new', 'tech'], creator: ObjectId("5dca0cbca5a65d037a23b363"), 
		comments:[{
			text: 'like the post', 
			author: ObjectId("5dca0cbca5a65d037a23b364")
		}]
	})