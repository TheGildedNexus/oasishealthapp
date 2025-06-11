	const date = new Date();


const addHours = (date, hours) => {
		const copy = new Date(date);
		copy.setHours(copy.getHours() + hours)
		return copy;
	}

export const mockDb = [
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, -1),
			status: 'completed',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, 4),
			status: 'pending',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, 1),
			status: 'pending',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, 2),
			status: 'pending',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, 1),
			status: 'pending',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, 3),
			status: 'pending',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, 3),
			status: 'pending',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, 2),
			status: 'pending',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, -2),
			status: 'completed',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, -3),
			status: 'missed',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, -2),
			status: 'missed',
		}
	].sort((a, b) => {
		return a.time > b.time ? 1 : -1;
	})

export const timeOfDay = date.getHours() <= 11 ? 'Morning' : date.getHours() >= 12 && date.getHours() <= 15 ? 'Afternoon' : date.getHours() >= 16 && date.getHours() <= 19 ? 'Evening' : 'Night';
