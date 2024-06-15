import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

interface DebouncedInputProps {
  onChange: (value: string) => void;
  delay?: number;
  placeholder?: string;
}

export const DebouncedInput = ({
  onChange,
  delay = 500,
  placeholder,
}: DebouncedInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedInputValue, setDebouncedInputValue] = useState('');

  useEffect(() => {
    onChange(debouncedInputValue);
  }, [debouncedInputValue, onChange]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [delay, inputValue]);

  return (
    <Input
      type="text"
      value={inputValue}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
};

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  height: 32px;
  padding-left: 8px;
`;