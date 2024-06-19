import { ChangeEvent, ComponentProps, useEffect, useState } from 'react';
import styled from 'styled-components';

interface DebouncedInputProps {
  onChange: (value: string) => void;
  shouldReset: boolean;
  delay?: number;
  placeholder?: string;
}

export const DebouncedInput = ({
  onChange,
  shouldReset,
  delay = 500,
  placeholder,
}: ComponentProps<typeof Input> & DebouncedInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedInputValue, setDebouncedInputValue] = useState('');

  useEffect(() => {
    onChange(debouncedInputValue);
  }, [debouncedInputValue, onChange]);

  useEffect(() => {
    if (shouldReset) {
      setInputValue('');
      setDebouncedInputValue('');
    }
  }, [shouldReset]);

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
