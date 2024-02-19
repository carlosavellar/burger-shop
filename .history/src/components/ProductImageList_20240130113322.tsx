import { IMenuItems } from "@/store/slices/menuSlice";
// import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AccordionBody, Card, CardBody, CardImg, CardTitle } from "reactstrap";
import ModalMealItem from "./ui/ModalMealItem";
import ModalCart from "./ui/ModalCart";

interface RenderSectionProps {
  sectionId: number;
  menuItems: IMenuItems;
  isSectionImage?: boolean;
}
const ProductImageList: React.FC<RenderSectionProps> = (
  props: RenderSectionProps
) => {
  const { menuItems, isSectionImage } = props;
  // const navigate = useNavigate();
  const [itemId, setItemId] = useState<number | null>(null);
  const [cart, setCart] = useState<boolean | null>(false);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleSetId = (idNum: number) => {
    setItemId(idNum);
  };

  const handleCloseModal = () => {
    setItemId(null);
  };
  const handleCloseModalCart = () => {
    setCart(false);
  };

  const filterSection = (sectionId: number) => {
    for (let key = 0; key < menuItems.sections?.length; key++) {
      let sectionItem = menuItems.sections[key];
      if (sectionItem.id === sectionId) {
        return sectionItem;
      }
    }
  };

  const handleOpenCart = () => {
    if (screenSize.width < 768) {
      setCart(!cart);
    }
    setItemId(null);
  };

  // const navigateFoodParam = (getItemId: number) => {
  //   arrayList?.items
  //     .map((item) => {
  //       return item;
  //     })
  //     .find((item) => {
  //       if (item.id === getItemId) {
  //         navigate(`/foods/${item.id}`);
  //       }
  //     });
  // };

  const arrayList = filterSection(props.sectionId);
  return arrayList?.items.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <AccordionBody accordionId="1">
          <Card className="d-flex flex-row">
            <CardBody
              onClick={() => {
                handleSetId(item.id);
              }}
            >
              <CardTitle tag="h6">
                <span>w</span>
                {item.name}
              </CardTitle>
              <data className="amount" value={`{item.price},00`}>
                R$ {item.price},00
              </data>
            </CardBody>
            {isSectionImage && arrayList?.images[0]?.image !== undefined && (
              <CardImg
                onClick={() => {
                  handleSetId(item.id);
                }}
                top
                width="100px"
                src={item.images[0].image}
                alt="Card image cap"
              />
            )}
          </Card>
          {itemId !== null && (
            <ModalMealItem
              item={item}
              closeModal={handleCloseModal}
              itemId={itemId}
              onOpenCart={handleOpenCart}
            />
          )}
          {cart && (
            <ModalCart
              item={item}
              isCart={cart}
              prodDefaultValue={item.price}
              closeModal={handleCloseModalCart}
            />
          )}
        </AccordionBody>
      </React.Fragment>
    );
  });
};

export default ProductImageList;
