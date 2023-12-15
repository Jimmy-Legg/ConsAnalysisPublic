import React, { useState } from "react";
import Select from 'react-select';

import useDropdownContext from "../../../ContextElements/DropdownContext.jsx";

import DropDownIndicator from "../DropDownIndicator.jsx";
import customStyles from "../DropDownStyle.jsx";

export const CDADropDownList = () => {

    const { setCda } = useDropdownContext();
    const options = [
        { value: '0025', label: '0025' },
        { value: '0765', label: '0765' },
        { value: '0045', label: '0045' },
        { value: '0820', label: '0820' },
        { value: '0190', label: '0190' },
        { value: '0173', label: '0173' },
        { value: '0049', label: '0049' },
        { value: '0054', label: '0054' },
        { value: '0285', label: '0285' },
        { value: '0815', label: '0815' },
        { value: '0425', label: '0425' },
        { value: '0206', label: '0206' },
        { value: '0765', label: '0765' },
        { value: 'Tous', label: 'Tous les CDA' }
    ];

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(options[13]);

    const handleChange = (selectedOption) => {
        setSelectedValue(selectedOption);
        setCda(selectedOption.value);
    };

    return (
        <div className="dropdownList CDA">
            <Select
                options={options}
                styles={customStyles}
                isSearchable={false}
                value={selectedValue}
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

export default CDADropDownList;