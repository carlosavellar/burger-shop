import React from "react";
import { MealTypes } from "@/interfaces/CardTypes";
import { FormGroup } from "reactstrap";

const HandlerModifiers = (item: MealTypes) => {
  if (item && item.modifiers) {
    const modifiersArr: Array<object[]> = [];
    for (const mod of item.modifiers) modifiersArr.push(mod.items as any);
    let mod2Item: any = [];
    for (const modItem of modifiersArr) mod2Item = modItem;
    return mod2Item.map((mod: any) => {
      return (
        <FormGroup className='container-flex radio-form' key={mod.id}>
          <label className='label-modifier' htmlFor={mod.id}>
            {mod.name}
            <span>R$ {mod.price.toFixed(2)}</span>
          </label>
          <input
            type='radio'
            id={mod.id}
            name='modifier'
            value={mod.price}
            onChange={(e) => {
              setSelectedModValue(e.target.value as any);
              setModifierName(mod.name);
            }}
          />
        </FormGroup>
      );
    });
  }
};

export default HandlerModifiers;
