export const customStyles = {

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? 'orange' : state.isSelected ? '#323232' : '#3A3A3A',
    color: state.isSelected ? 'white' : 'white',
    border: state.isSelected ? '3px solid orange' : 'none',

  }),

  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#3A3A3A',
    border: '2px solid #3A3A3A',
    outline: 'none',
    ':hover': {
      border: state.isFocused ? '2px solid orange' : '2px solid orange',
    },
  }),

  singleValue: (provided) => ({
    ...provided,
    color: 'white',
    width: '100%',
    textAlign: 'center',
    marginLeft: '18px',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  menu: (provided) => ({
    ...provided,
    height: '0',
    padding: '0',
    borderRadius: '5px'
  }),

  menuList: (base) => ({
    ...base,

    "::-webkit-scrollbar": {
      width: "12px",
      height: "0px", // Rounded corners for the track
    },
    "::-webkit-scrollbar-track": {
      background: "#1c1c1c",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "50px", // Rounded corners for the thumb
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  })
};

export default customStyles;
