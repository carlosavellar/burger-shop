import { IMenuItems } from "@/store/slices/menuSlice";
import { Avatar } from "@mui/material";
import React from "react";
import { Col } from "reactstrap";

interface RenderSectionsProps {
  menuItems: IMenuItems;
}

const SectionList: React.FC<RenderSectionsProps> = (
  props: RenderSectionsProps
) => {
  const { menuItems } = props;
  return menuItems.sections?.map((section) => {
    return (
      <>
        <Col
          id="section-button"
          className="bg-white media-test  align-items-center justify-content-center vh-50"
          key={section.id}
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
      </>
    );
  });
};

export default SectionList;
