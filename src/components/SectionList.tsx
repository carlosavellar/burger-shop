import { IMenuItems } from "@/store/slices/menuSlice";
import useToggle from "@/utils/toggleHook";
import { Avatar } from "@mui/material";
import React from "react";
import { Col } from "reactstrap";
import "./SectionList";

interface RenderSectionsProps {
  menuItems: IMenuItems;
  onToggleBurger: (id: any) => void;
  onToggleDrinks: (id: any) => void;
}

const SectionList: React.FC<RenderSectionsProps> = (
  props: RenderSectionsProps
) => {
  const { menuItems, onToggleBurger, onToggleDrinks } = props;
  return menuItems.sections?.map((section) => {
    return (
      <React.Fragment key={section.id}>
        <Col
          id="section-button"
          className="bg-white media-test  align-items-center justify-content-center vh-50"
          key={section.id}
          onClick={() => {
            if (section.id === 242403) {
              onToggleBurger(1);
            } else if (section.id === 242404) {
              onToggleDrinks(1);
            }
          }}
        >
          <div className="bg-white media-test d-flex align-items-center justify-content-center">
            <Avatar
              alt="Remy Sharp"
              src={section.images[0].image}
              style={{ width: "75px", height: "75px" }}
              className="bg-white media-test d-flex align-items-center justify-content-center vh-50"
            />
          </div>
          <div className="bg-white media-test d-flex align-items-center justify-content-center section-name">
            {section.name}
          </div>
        </Col>
      </React.Fragment>
    );
  });
};

export default SectionList;
