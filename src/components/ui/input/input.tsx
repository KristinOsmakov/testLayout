import { InputHTMLAttributes } from 'react';
import s from './input.module.scss'

type InputVariant = 'email' | 'name' | 'file';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant: InputVariant;
  label?: string;
  name: InputVariant
};
export const Input = ({ name, variant, label, ...props }: InputProps) => {
    const variantProps = {
      email: {
        type: 'email',
        placeholder: 'Ваш e-mail',
      },
      name: {
        type: 'text',
        placeholder: 'Ваше имя',
      },
      file: {
        type: 'file',
      }
    }[variant];
  
    return (
      <div className="input-wrapper">
        {label && <label className="input-label">{label}</label>}
        <input
          name={name}
          className={s.input}
          {...variantProps}
          {...props}
        />
      </div>
    );
  };