export default {
    namespace: 'trending',

    state: {
        echartsArray: []
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
        size(state, { payload }) {
            let item = state.echartsArray.find((ele) => ele.key == payload);
            if (!!item) {
                item.echart.resize()
            }
            return state;
        },
    },
};
