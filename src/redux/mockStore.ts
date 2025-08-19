import { RootState } from './store';
import { initialState as initialPostsState } from './reducers/postsReducer';
import { initialState as initialModalState } from './reducers/modalReducer';
import { initialState as initialAuthState } from './reducers/authReducer';

const mockStore: RootState = {
  posts: initialPostsState,
  modal: initialModalState,
  auth: initialAuthState,
};

export default mockStore;