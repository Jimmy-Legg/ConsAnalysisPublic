import React, { useState } from "react";
import Select from 'react-select';

import useDropdownContext from "../../../ContextElements/DropdownContext.jsx";

import DropDownIndicator from "../DropDownIndicator.jsx";
import customStyles from "../DropDownStyle.jsx";

export const GMDropDownList = () => {

    const { setGm } = useDropdownContext();
    const options = [
        { value: 'GR2', label: 'GR2' },
        { value: 'GR3', label: 'GR3' },
        { value: 'GR5', label: 'GR5' },
        { value: 'GR6', label: 'GR6' },
        { value: 'GR8', label: 'GR8' },
        { value: 'Tous', label: 'Tous les GM' }
    ];

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [, setSelectedValue] = useState(options[5]);

    const handleChange = (selectedOption) => {
        setSelectedValue(selectedOption);
        setGm(selectedOption.value);
    };

    return (
        <div className="dropdownList GM">
            <Select
                options={options}
                styles={customStyles}
                isSearchable={false}
                defaultValue={options[5]}
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

export default GMDropDownList;