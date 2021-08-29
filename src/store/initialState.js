const auto = {
	pending: false,
	items: [],
	error: false,
};

const disks = {
	pending: false,
	items: [],
	error: false,
};

const cart = {
	pending: false,
	items: [],
	error: false,
};

const personal = {
	pending: false,
	isAuth: '',
	user: {},
	disks:[],
	garage: [],
	error: false,
	errorText: '',
};

const initialState = {
	auto,
	disks,
	cart,
	personal
};

export default initialState;
