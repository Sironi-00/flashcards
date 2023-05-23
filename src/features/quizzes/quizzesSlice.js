import { createSlice } from '@reduxjs/toolkit';

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const {id, name, topicId, cardIds} =  action.payload;
      state.quizzes[id] = {id, name, topicId, cardIds};
    }
  }
});

export const createQuiz = (payload) => {
  return (dispatch) => {
    dispatch(addQuiz(payload));
    const {name, topicId, cardIds, id} = payload;
    dispatch( addQuizId({topicId: topicID, QuizId: id}) )
  };
};

export const selectQuizzes = state => state.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;