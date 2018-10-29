export default {
    namespace: 'trending',

    state: {
        echartsArray: []
    },

    effects: {
        *echartSizeChange({ payload }, { select }){
            let echartsArray = yield select(({trending})=>trending.echartsArray);
            echartsArray.forEach((ele)=>{
                try {
                    setTimeout(()=>{
                        ele.echart.resize()
                    },200)
                } catch (error) {
                    
                }
            })
        }   
    },

    reducers: {
        save(state, { payload }) {
            return {
                ...state,
                ...payload
            };
        }
    },
};
