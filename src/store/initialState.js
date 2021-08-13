let auto = {
	pending: false,
	items: [],
	error: false,
};

let disks = {
	pending: false,
	items: [],
	error: false,
};

let cart = {
	pending: false,
	items: [],
	error: false,
};

const initialState = {
	auto,
	disks,
	cart
};

export default initialState;
