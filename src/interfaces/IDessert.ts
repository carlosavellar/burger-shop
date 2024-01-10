type IImage = {
  id: number;
  image: string;
};
type ModItemsType = {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: boolean;
};

type ModifiersType = {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModItemsType[];
};
export type IDessert = {
  id: number;
  name: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  images: IImage[];
  description?: string;
  available: true;
  modifiers?: ModifiersType[];
};

export default interface IDessertsSection {
  id: number;
  name: string;
  position: number;
  images: IImage[];
  items: IDessert[];
}
