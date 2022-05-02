import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@store'

const initialState = {
  summary: {
    postsCount: null,
    usersCount: null
  },
  posts: null,
  users: null
}

const userSlice: any = createSlice({
  name: 'admin',

  initialState,

  reducers: {
    fetchAdminSummary: (admin, action) => {
      admin.summary.postsCount = action.payload.postsCount
      admin.summary.usersCount = action.payload.usersCount
    },
    fetchAdminPosts: (admin, action) => {
      admin.posts = action.payload
    },
    fetchAdminUsers: (admin, action) => {
      admin.users = action.payload
    }
  }

  // extraReducers: (builder) => {
  //   builder.addCase(admin, (state, action) => {
  //     return {
  //       ...state,
  //       ...action.payload.admin
  //     }
  //   })
  // }

})

export const {
  fetchAdminSummary,
  fetchAdminPosts,
  fetchAdminUsers
} = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.admin

export default userSlice.reducer
