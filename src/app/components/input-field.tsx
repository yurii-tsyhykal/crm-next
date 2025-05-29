'use client';

import React from 'react';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, name, ...rest }, ref) => {
    return (
      <div className="flex flex-col">
        {label && (
          <label
            htmlFor={name}
            className=" mb-2 text-base font-normal text-gray-900 "
          >
            {label}
          </label>
        )}
        <input
          {...rest}
          id={name}
          name={name}
          ref={ref}
          {...rest}
          className="min-w-custom p-3 max-h-11 text-sm border border-solid border-gray-300 focus:border-gray-300 rounded shadow-custom outline-gray-300"
        />
      </div>
    );
  },
);
InputField.displayName = 'InputField';
export default InputField;

// export default function InputField({
//   label,
//   id,
//   name,
//   required,
//   ...rest
// }: InputFieldProps) {
//   return (
//     <div className="flex flex-col">
//       {label && (
//         <label
//           htmlFor={id}
//           className=" mb-2 text-base font-normal text-gray-900 "
//         >
//           {label}
//         </label>
//       )}
//       <input
//         {...rest}
//         id={id}
//         className="min-w-custom p-3 max-h-11 text-sm border border-solid border-gray-300 focus:border-gray-300 rounded shadow-custom outline-gray-300"
//       />
//     </div>
//   );
// }
