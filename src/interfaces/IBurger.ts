import { ModifiersType } from "./ModifierType";

type ImageType = {
  id: number;
  image: string;
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
