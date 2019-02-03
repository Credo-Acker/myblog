import { createStore } from 'redux';

let store = createStore(function (state = {
  WXArticles: [],
  FEArticles: [],
  totleViewNum: 0
}, action) {
    switch (action.type) {
      case "CHANGE_ARTICLES":
        state.FEArticles = action.FEArticles;
        state.WXArticles = action.WXArticles;
        break;
      default:
        return state;
        break;
    }
    return state;
});

export default store;
