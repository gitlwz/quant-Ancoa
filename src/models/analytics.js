export default {
    namespace: 'analytics',

    state: {
        echartsArray: []
    },

    effects: {
        *echartSizeChange({ payload }, { select }){
            let echartsArray = yield select(({analytics})=>analytics.echartsArray);
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
        },
    },
};
