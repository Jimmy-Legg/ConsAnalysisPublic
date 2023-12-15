import React from "react";
import { components } from 'react-select';
import arrowImage from "../../../img/img_for_dropdown_list.png";

export const DropDownIndicator = ({ isDropdownOpen, ...props }) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <img
          src={arrowImage}
          alt="Custom Indicator"
          style={{
            width: '20px',
            height: '20px',
            transform: `rotate(${isDropdownOpen ? '90deg' : '0deg'})`,
            transition: 'transform 0.3s ease'
          }} />
      </components.DropdownIndicator>
    )
  );
};

export default DropDownIndicator;