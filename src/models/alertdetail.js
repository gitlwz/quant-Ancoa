import pathToRegexp from 'path-to-regexp';
import { delay } from 'dva/saga';

export default {
    namespace: 'alertdetail',

    state: {
        detailTableSource: {}
    },

    effects: {
        *fetch({ payload }, {call, put}) {
            console.log('payload: ', payload);
            const { id } = payload;
            yield call(delay, 2000);
            yield put({ type: 'save', payload: {
                detailTableSource: {
                    id,
                    type:'T3',
                    instanceName: 'Destoller Six',
                    submittedBy: 'Tomy Slock',
                    triggerTime: '2010-10-20',
                    issuanceTime: '2008-08-08',
                    status: 'Ongoing',
                    assigned: 'Tiger',
                    triggerSource: 'Wire Error',
                    severity: Math.floor(Math.random()*100),
                    priority: 'Medium',
                    classification: 'Class Eleven',
                    triggerSecurity: 'OECT',
                    triggerInstrumentType: '7',
                    triggerCurrency: 'USD',
                    broker: 'Silence',
                    client: 'Quene Solo',
                    trader: 'Arche Tinyer',
                    uniqueIDs: '12|32|33|89',
                    title: 'Immediately suit',
                    messages: 'All parameters can be provided a custom regexp, which overrides the default match ([^\/]+). For example, you can match digits in the path:',
                    description: 'Parameters can be suffixed with an asterisk (*) to denote a zero or more parameter matches. The prefix is taken into account for each match. ',
                }
            }})
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
    subscriptions: {
        initPage({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {

                const match = pathToRegexp('/alertdetail/:id').exec(pathname);
                
                if(match) {
                    const id = match[1];
                    dispatch({ type: 'fetch', payload: { id }})
                }
            })
        }
    }
};
