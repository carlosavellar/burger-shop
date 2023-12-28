type IImage = {
  id: number;
  image: string;
};

type IDrink = {
  id: number;
  name: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  available: boolean;
};

export default interface IDrinksSection {
  id: number;
  name: string;
  position: number;
  images: IImage[];
  items: IDrink[];
}
