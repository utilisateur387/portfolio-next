import React from "react";

const CustomCategoriesInput = (props, ref) => {
  const { 
    type, 
    value, 
    onChange, 
    readOnly, 
    placeholder  
  } = props;
  
  const categories = [
    { title: 'UX', value: 'ux' },
    { title: 'Coding', value: 'coding' },
    { title: 'Design', value: 'design' },
    // Add more categories as needed
  ];

  const handleChange = (newValue) => {
    onChange({ patch: { type: 'set', value: newValue } });
  };

  return (
    <div>
      {categories.map((category) => (
        <>
          <label key={category.value}>
            <input
              type="checkbox"
              value={category.value}
              checked={value?.includes(category.value)}
              onChange={(e) => {
                const isChecked = e.target.checked;
                const updatedValue = isChecked
                  ? [...value, category.value]
                  : value.filter((item) => item !== category.value);
                handleChange(updatedValue);
              }}
            />
            {category.title}
          </label>
        </>
      ))}
    </div>
  );
};

export default CustomCategoriesInput