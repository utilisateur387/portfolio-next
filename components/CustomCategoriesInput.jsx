import React from "react";

const CustomCategoriesInput = React.forwardRef((props, ref) => {
  const { 
    type, 
    value = [], 
    onChange, 
    readOnly, 
    placeholder  
  } = props;
  
  const categories = [
    { title: 'UX', value: 'ux' },
    { title: 'Coding', value: 'coding' },
    { title: 'Design', value: 'design' },
  ];

  const handleChange = (newValue) => {
    onChange({ patch: { type: 'set', value: newValue } });
  };

  return (
    <div>
      {categories.map((category) => (
        <div key={category.value}>
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
        </div>
      ))}
    </div>
  );
})

CustomCategoriesInput.displayName = 'CustomCategoriesInput';

export default CustomCategoriesInput