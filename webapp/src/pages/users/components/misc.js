import drug from '../../../assets/images/drug.png'

const date = new Date();


const addHours = (date, hours) => {
	const copy = new Date(date);
	copy.setHours(copy.getHours() + hours)
	return copy;
}

const addDays = (date, days) => {
	const copy = new Date(date);
	copy.setDate(copy.getDate() + days)
	return copy;
}

export const mockDb = [
	{
		id: 1,
		name: "Metformin",
		img: drug,
		size: "550mg",
		time: [{schedule:addHours(date, -1), status: 'missed'}, {schedule: addHours(date, 10), status: 'pending'}],
		frequency: 2,
		interval: 'Daily',
		startDate: addDays(date, -1),
		endDate: addDays(date, 7),
		notes: ['Take with meals', "Don't take on empty stomach"],
		medicationStatus: 'Inactive'
	},
	{
		id: 2,
		name: "Metformin",
		img: drug,
		size: "550mg",
		time: [{schedule:addHours(date, -2), status: 'completed'}, {schedule: addHours(date, 8), status: 'pending'}],
		frequency: 2,
		interval: 'Daily',
		startDate: addDays(date, -5),
		endDate: addDays(date, 3),
		notes: ['Take with meals', "Don't take on empty stomach"],
		medicationStatus: 'Active'
	},
	{
		id: 6,
		name: "Metformin",
		img: drug,
		size: "550mg",
		time: [{schedule:addHours(date, 1), status: 'pending'}, {schedule: addHours(date, 14), status: 'pending'}],
		frequency: 2,
		interval: 'Daily',
		startDate: addDays(date, 6),
		endDate: addDays(date, 2),
		notes: ['Take with meals', "Don't take on empty stomach"],
		medicationStatus: 'Active'
	},
	{
		id: 3,
		name: "Metformin",
		img: drug,
		size: "550mg",
		time: [{schedule:addHours(date, 1), status: 'pending'}, {schedule: addHours(date, 14), status: 'pending'}],
		frequency: 2,
		interval: 'Daily',
		startDate: addDays(date, 6),
		endDate: addDays(date, 2),
		notes: ['Take with meals', "Don't take on empty stomach"],
		medicationStatus: 'Active'
	},
	{
		id: 4,
		name: "Metformin",
		img: drug,
		size: "550mg",
		time: [{schedule:addHours(date, 2), status: 'pending'}, {schedule: addHours(date, 11), status: 'pending'}],
		frequency: 2,
		interval: 'Daily',
		startDate: addDays(date, -7),
		endDate: addDays(date, 1),
		notes: ['Take with meals', "Don't take on empty stomach"],
		medicationStatus: 'Active'
	},
	{
		id: 5,
		name: "Metformin",
		img: drug,
		size: "550mg",
		time: [{schedule:addHours(date, -3), status: 'completed'}, {schedule: addHours(date, 12), status: 'pending'}],
		frequency: 2,
		interval: 'Daily',
		startDate: addDays(date, -3),
		endDate: addDays(date, 8),
		notes: ['Take with meals', "Don't take on empty stomach"],
		medicationStatus: 'Active'
	},
	{
		id: 8,
		name: "Metformin",
		img: drug,
		size: "550mg",
		time: [{schedule:addHours(date, 1), status: 'pending'}, {schedule: addHours(date, 14), status: 'pending'}],
		frequency: 2,
		interval: 'Daily',
		startDate: addDays(date, 6),
		endDate: addDays(date, 2),
		notes: ['Take with meals', "Don't take on empty stomach"],
		medicationStatus: 'Inactive'
	},
	{
		id: 7,
		name: "Metformin",
		img: drug,
		size: "550mg",
		time: [{schedule:addHours(date, 1), status: 'pending'}, {schedule: addHours(date, 14), status: 'pending'}],
		frequency: 2,
		interval: 'Daily',
		startDate: addDays(date, 6),
		endDate: addDays(date, 2),
		notes: ['Take with meals', "Don't take on empty stomach"],
		medicationStatus: 'Inactive'
	},
].sort((a, b) => {
	return a.startDate > b.startDate ? 1 : -1;
});


export const todayScheduleDb = mockDb.flatMap((medication) =>
	medication.time.filter(med => medication.medicationStatus === 'Active' && med.schedule.getDate() <= date.getDate() && med.schedule.getDate() <= date.getDate()).map(med => ({
			name: medication.name,
			size: medication.size,
			time: med.schedule,
			status: med.status,
	}))
).sort((a, b) => {
	return a.time > b.time ? 1 : -1;
});

export const timeOfDay = date.getHours() <= 11 ? 'Morning' : date.getHours() >= 12 && date.getHours() <= 15 ? 'Afternoon' : date.getHours() >= 16 && date.getHours() <= 19 ? 'Evening' : 'Night';
