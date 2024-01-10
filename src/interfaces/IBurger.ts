type ImageType = {
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

export interface IBurger {
  id: number;
  name: string;
  description?: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  // modifiers?: ModifiersType[];
  modifiers?: ModifiersType[];
  images: ImageType[];
  available: true;
}

export default interface IBurgerSection {
  id: number;
  name: string;
  description: string | null;
  position: number;
  visible: number;
  images: ImageType[];
  items: IBurger[];
}
