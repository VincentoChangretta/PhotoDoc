const initialState = {
  electroPhotoType: true,
  physicalPhotoType: false,
};

const SET_ELECTRO_TYPE = "SET_ELECTRO_TYPE";
const SET_PHYSICAL_TYPE = "SET_PHISICAL_TYPE";

export const currentPhotoTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ELECTRO_TYPE:
      return { ...state, electroPhotoType: action.payload };
    case SET_PHYSICAL_TYPE:
      return { ...state, physicalPhotoType: action.payload };
    default:
      return state;
  }
};

export const currentPhotoTypeElectro = payload => ({type: SET_ELECTRO_TYPE, payload})
export const currentPhotoTypePhysical = payload => ({type: SET_PHYSICAL_TYPE, payload})
