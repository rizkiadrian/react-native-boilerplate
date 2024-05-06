import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {REDUX_KEY} from 'src/configs/key-configs';
import {IActCategory} from 'src/general-typings';

interface IhomepageReducer {
  activeCategory: string;
  onProductFetch: boolean;
}

const initialState: IhomepageReducer = {
  activeCategory: '1',
  onProductFetch: false,
};

const homepageSlice = createSlice({
  name: REDUX_KEY.Homepage,
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<IActCategory>) => {
      return {...state, activeCategory: action.payload.activeCategory};
    },
    setProductFetch: (state, action: PayloadAction<boolean>) => {
      return {...state, onProductFetch: action.payload};
    },
  },
});

export const {setActiveCategory, setProductFetch} = homepageSlice.actions;
export const reducer = homepageSlice.reducer;
