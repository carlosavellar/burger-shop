import { ModifiersType } from "./ModifierType";

type IImage = {
  id: number;
  image: string;
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
