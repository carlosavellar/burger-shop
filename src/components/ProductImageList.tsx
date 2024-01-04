import { IMenuItems } from "@/store/slices/menuSlice";
import React from "react";
import { AccordionBody, Card, CardBody, CardImg, CardTitle } from "reactstrap";

interface RenderSectionProps {
  sectionId: number;
  menuItems: IMenuItems;
  isSectionImage?: boolean;
}
const ProductImageList: React.FC<RenderSectionProps> = (
  props: RenderSectionProps
) => {
  const { menuItems, isSectionImage } = props;
  const filterSection = (sectionId: number) => {
    for (let key = 0; key < menuItems.sections?.length; key++) {
      let sectionItem = menuItems.sections[key];
      if (sectionItem.id === sectionId) {
        return sectionItem;
      }
    }
  };

  const arrayList = filterSection(props.sectionId);
  return arrayList?.items.map((item) => {
    return (
      <AccordionBody accordionId="1">
        <Card className="d-flex flex-row">
          <CardBody>
            <CardTitle tag="h6">{item.name}</CardTitle>
            <data className="amount" value="18000.00">
              R${item.price}
            </data>
          </CardBody>
          {isSectionImage && arrayList?.images[0]?.image !== undefined && (
            <CardImg
              top
              width="100px"
              src={item.images[0].image}
              alt="Card image cap"
            />
          )}
        </Card>
      </AccordionBody>
    );
  });
};

export default ProductImageList;
