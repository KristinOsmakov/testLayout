import { useState } from 'react';
import s from './select.module.scss';

type Option = {
  id: number;
  text: string;
};

export const Select = () => {
  const [selected, setSelected] = useState<Option | null>(null);
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleDropdown = () => setIsOpen(!isOpen);

  // const handleSelect = (option: Option) => {
  //   setSelected(option);
  //   setIsOpen(false);
  // };


  const selectArr: Option[] = [
    { id: 1, text: 'Sed ut perspiciatis' },
    { id: 2, text: 'Nemo enim ipsam' },
    { id: 3, text: 'Et harum quidem' },
    { id: 4, text: 'Temporibus autem' },
    { id: 5, text: 'Itaque earum rerum' },
  ];

  return (
    <select className={s.select} value={selected?.id || ''} onChange={(e) => {
      const selectedOption = selectArr.find(opt => opt.id === Number(e.target.value));
      if (selectedOption) setSelected(selectedOption);
    }}>
      <option className={s.placeholder}>Выберите тип системы</option>
      {selectArr.map((el) => (
        <option key={el.id} value={el.id}>{el.text}</option>
      ))}
    </select>
  );
};
