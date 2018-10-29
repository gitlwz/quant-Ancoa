export default {
    namespace: 'orderview',

    state: {
        echartsArray:[]
    },

    effects: {
        *echartSizeChange({ payload }, { select }){
            let echartsArray = yield select(({orderview})=>orderview.echartsArray);
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
