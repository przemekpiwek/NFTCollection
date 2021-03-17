import produce from "immer";

export default function reducers(state, action) {
  console.log(action.type);
  console.log(action);
  switch (action.type) {
    case "SELECT_COLLECTION":
      return produce(state, (draftState) => {
        draftState.selectedCollection = action.payload;
      });
    default: {
      return {
        ...state,
      };
    }
  }
}
