// const quizReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_NAME":
//       return {
//         ...state,
//         username: action.payload,
//       };
//     case "ANSWER":
//       return {
//         ...state,
//         index: state.index + 1,
//         score:
//           action.payload == curquetion.answer ? state.score + 1 : state.score,
//       };
//     case "FINISH":
//       return {
//         ...state,
//         completed: true,
//       };
//     case "RESET":
//       return {
//         username: "",
//         index: 0,
//         score: 0,
//         completed: false,
//         questions,
//       };
//     default:
//       return state;
//   }
// };

// export default quizReducer;
