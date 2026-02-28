import { type ChangeEventHandler } from 'react';

interface IProps {
  value: string;
  onChange: (newValue: string) => void;
}

export const Input = ({ value, onChange }: IProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};
