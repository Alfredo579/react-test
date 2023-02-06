import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
  alert: '',
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  ).then((response) => response.json());
  return response;
});

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (params) => {
    const { title, body } = params;
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());

    return response;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    makeAlert(state, action) {
      state.alert = action.payload;
    },
    postUpdated(state, action) {
      const { id, title, body } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.body = body;
      }
    },
    postDeleted(state, action) {
      const { id } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        let index = state.posts.indexOf(existingPost);
        state.posts.splice(index, 1);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createPost.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = state.posts.concat([action.payload]);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { postUpdated, postDeleted } = postsSlice.actions;
export const selectAllPosts = (state) => state.posts.posts;
export const selectPostMessage = (state) => state.posts.message;
export const { makeAlert } = postsSlice.actions;
export default postsSlice.reducer;
