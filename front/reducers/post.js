export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'test',
    },
    content: '첫 번째 게시글 #해시태그 #냥냥이',
    Images: [{
      src: 'https://i.pinimg.com/564x/c3/a0/22/c3a0224bf4d1eb00dca790910ccc620d.jpg'
    }, {
      src: 'https://i.pinimg.com/564x/af/e6/d5/afe6d5b3467da0d01b6affa24559bb77.jpg'
    }, {
      src: 'https://i.pinimg.com/564x/cf/fa/83/cffa83ebe67a00b3dfead14ce35060e9.jpg'
    }],
    Comment: [{
      User: {
        nickname: 'test1',
      },
      content: '너무너무 귀여워요!',
    }, {
      User: {
        nickname: 'test2',
      },
      content: '저도 키우고 싶어요',
    }]
  }],
  imagePaths: [],
  postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
}

const dummyPost = {
  id: 2,
  content: '테스트 글 입니다',
  User: {
    id: 1,
    nickname: 'hwan',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      }
    default:
      return state;
  }
}

export default reducer;