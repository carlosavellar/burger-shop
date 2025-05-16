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

export type ModifiersType = {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModItemsType[];
};
