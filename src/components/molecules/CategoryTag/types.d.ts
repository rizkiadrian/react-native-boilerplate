import {ICategory} from 'src/general-typings';

export interface ICategoryProps {
  tag: ICategory;
  isActive?: boolean;
  onPress?: (tag: string) => void;
}
