export default {
    namespace: 'alertdetail',

    state: {
        echartsArray:[]
    },

    effects: {

    },

    reducers: {
        save(state, { payload }) {
            return {
                ...state,
                ...payload
            };
        },
    },
};
