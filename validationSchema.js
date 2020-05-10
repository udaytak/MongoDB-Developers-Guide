db.transformedPersons.aggregate([
	{$geoNear: {
		near: {type: "Point", coordinates: [-90.6, -65.2]},
		maxDistance: 100000,
		$limit: 10,
		query: { age: {$gt:30} },
		distanceField: "distance"
	}}
])
