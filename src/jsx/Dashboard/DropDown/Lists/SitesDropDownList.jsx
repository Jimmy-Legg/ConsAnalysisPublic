import React, { useState } from "react";
import Select from 'react-select';

import useDropdownContext from "../../../ContextElements/DropdownContext.jsx";

import DropDownIndicator from "../DropDownIndicator.jsx";
import { customStyles } from "../DropDownStyle.jsx";

export const SitesDropDownList = () => {

  const { setSite } = useDropdownContext();
  const options = [
    { value: 'MET', label: 'MET' },
    { value: 'CHB', label: 'CHB' },
    { value: 'CGP', label: 'CGP' },
    { value: 'CFL', label: 'CFL' },
    { value: 'CHL', label: 'CHL' },
    { value: 'UZE', label: 'UZE' },
    { value: 'SIT', label: 'SIT' },
    { value: 'MC8', label: 'MC8' },
    { value: 'PS1', label: 'PS1' },
    { value: 'Tous', label: 'Tous les sites' }
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [, setSelectedValue] = useState(options[9]);

  const handleChange = (selectedOption) => {
    setSelectedValue(selectedOption);
    setSite(selectedOption.value);
  };

  return (
    <div className="dropdownList Site">
      <Select
        options={options}
        styles={customStyles}
        isSearchable={false}
        defaultValue={options[9]}
        components={{
          DropdownIndicator: (props) => (
            <DropDownIndicator {...props} isDropdownOpen={isDropdownOpen} />
          ),
        }}
        onMenuOpen={() => setIsDropdownOpen(true)}
        onMenuClose={() => setIsDropdownOpen(false)}
        onChange={handleChange}
      />
    </div>
  );
};

export default SitesDropDownList;