import {configureStore} from '@reduxjs/toolkit'
import users from '../Slice/index'

export default configureStore({
  reducer:{
    users,
  }
})



