const initialState = {
  previousPhotoSize: null,
};

const SET_PREVIOUS_PHOTO = "SET_PREVIOUS_PHOTO"

export const previousPhotoDocReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PREVIOUS_PHOTO:
        return {...state, previousPhotoSize: action.payload}
    default:
      return state;
  }
};


export const setPreviousPhotoAction = payload => ({type: SET_PREVIOUS_PHOTO, payload})