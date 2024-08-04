import React, { ChangeEvent, FC } from 'react';

// Types
interface SearchInputProps {
  onChange: (value: string) => void;
  placeholder: string;
  className: string;
}

// ------------------------------------|| SEARCH INPUT - COMMON ||------------------------------------------------------

const SearchInput: FC<SearchInputProps> = ({
  placeholder,
  onChange,
  className,
  ...props
}) => {
  // Methods
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type='text'
      placeholder={placeholder}
      onChange={handleChange}
      className={`bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
      {...props}
    />
  );
};

export default SearchInput;
