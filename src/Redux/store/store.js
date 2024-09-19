import {configureStore} from '@reduxjs/toolkit'
import dataslice from '../action/dataslice';

const store= configureStore({
    reducer:{
        data:dataslice,
    },
    // window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
})
export default store;