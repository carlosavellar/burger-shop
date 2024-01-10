type IImage = {
  id: number;
  image: string;
};
export type ModItemsType = {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: boolean;
  qty?: number;
};

type ModifiersType = {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModItemsType[];
};

export type IDrink = {
  id: number;
  name: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  images: IImage[];
  description?: string;
  availabilityType: string;
  sku: string;
  available: boolean;
  modifiers?: ModifiersType[];
};

export default interface IDrinksSection {
  id: number;
  name: string;
  position: number;
  images: IImage[];
  items: IDrink[];
}
