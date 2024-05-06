import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {REDUX_KEY} from 'src/configs/key-configs';
import {IActCategory} from 'src/general-typings';

interface IhomepageReducer {
  activeCategory: string;
}

const initialState: IhomepageReducer = {
  activeCategory: '1',
};

const homepageSlice = createSlice({
  name: REDUX_KEY.Homepage,
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<IActCategory>) => {
      return {...state, activeCategory: action.payload.activeCategory};
    },
  },
});

export const {setActiveCategory} = homepageSlice.actions;
export const reducer = homepageSlice.reducer;
