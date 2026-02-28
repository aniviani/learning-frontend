import { type ChangeEventHandler } from 'react';

interface IProps {
  id: string;
  name: string;
  checked: boolean;
  onCheck: (params: { id: string; newChecked: boolean }) => void;
}

export const Task = ({ id, name, checked, onCheck }: IProps) => {
  const handleCheckedChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onCheck({ id, newChecked: event.target.checked });
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckedChange}
        />
        {name}
      </div>
    </div>
  );
};
