import { IMenuItems } from "@/store/slices/menuSlice";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AccordionBody, Card, CardBody, CardImg, CardTitle } from "reactstrap";
import FoodItem from "./ui/FoodItem";

interface RenderSectionProps {
  sectionId: number;
  menuItems: IMenuItems;
  isSectionImage?: boolean;
}
const ProductImageList: React.FC<RenderSectionProps> = (
  props: RenderSectionProps
) => {
  const { menuItems, isSectionImage } = props;
  const navigate = useNavigate();

  const filterSection = (sectionId: number) => {
    for (let key = 0; key < menuItems.sections?.length; key++) {
      let sectionItem = menuItems.sections[key];
      if (sectionItem.id === sectionId) {
        console.log(sectionItem.id);
        return sectionItem;
      }
    }
  };

  const navigateFoodParam = (getItemId: number) => {
    arrayList?.items
      .map((item) => {
        return item;
      })
      .find((item) => {
        if (item.id === getItemId) {
          navigate(`/foods/${item.id}`);
        }
      });
  };

  const arrayList = filterSection(props.sectionId);
  return arrayList?.items.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <AccordionBody accordionId="1">
          <Card className="d-flex flex-row">
            <CardBody
              onClick={() => {
                navigateFoodParam(item.id);
              }}
            >
              <CardTitle tag="h6">{item.name}</CardTitle>
              <data className="amount" value="18000.00">
                R${item.price}
              </data>
            </CardBody>

            {isSectionImage && arrayList?.images[0]?.image !== undefined && (
              <CardImg
                onClick={() => navigateFoodParam(item.id)}
                top
                width="100px"
                src={item.images[0].image}
                alt="Card image cap"
              />
            )}
          </Card>
          <FoodItem item={item} />
        </AccordionBody>
      </React.Fragment>
    );
  });
};

export default ProductImageList;
