export const MPESAReducer = (state = false, action) => {
	switch (action.type) {
		case 'MPESA':
			return action.payload;
		default:
			return state;
	}
};
