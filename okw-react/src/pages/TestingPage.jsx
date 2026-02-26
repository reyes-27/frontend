import { configureStore } from '@reduxjs/toolkit'
const TestingPage = () => {
    const counter = {value:0}
    const increment = () => {
        return{
            type: 'counter/increment'
        }
    }
    const selectCurrentValue = state => state.value
    const counterReducer = (state=counter, action) => {
        if (action.type === 'counter/increment'){
            return{
                ...state,
                value:state.value+1
            }
        }
        return state
    }

    const store = configureStore({reducer:counterReducer})
    console.log(store.getState())
    store.dispatch({type:'counter/increment'})
    console.log(store.getState())
    store.dispatch(increment())
    console.log(store.getState())
    console.log('current value: ', selectCurrentValue(store.getState()))
    return(
        <>
        
        </>
    )
}

export default TestingPage;