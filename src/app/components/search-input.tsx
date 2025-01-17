import Image from 'next/image';
import React from 'react';

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SearchInput({
  onSearchClick,
  ...rest
}: SearchInputProps) {
  return (
    <div className="relative w-[455px]">
      <input
        type="text"
        {...rest}
        className="w-full border border-solid border-gray-300  text-sm rounded p-3 placeholder:text-sm placeholder:font-medium max-h-11 outline-1 outline-gray-300"
        placeholder="Search..."
      />
      <button onClick={onSearchClick} className="absolute right-3 top-3">
        <Image
          width={20}
          height={20}
          src="/icons/search-icon.svg"
          alt="search icon"
        />
      </button>
    </div>
  );
}
