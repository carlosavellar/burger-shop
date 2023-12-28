type IImage = {
  id: number;
  image: string;
};

type IDessert = {
  id: number;
  name: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  images: IImage[];
  available: true;
};

export default interface IDessertsSection {
  id: number;
  name: string;
  position: number;
  images: IImage[];
  items: IDessert[];
}
