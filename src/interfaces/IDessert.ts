import { ModifiersType } from "./ModifierType";

type IImage = {
  id: number;
  image: string;
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
