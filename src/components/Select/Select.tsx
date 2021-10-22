/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useState } from 'react';

import Typography from 'components/Typography/Typography';
import { useClickOutside } from 'hooks/useClickOutside';

import {
  SelectArrow,
  SelectContainer,
  SelectedItem,
  SelectItem,
  SelectItemsUl
} from './Select.styles';

type Option = {
  label: string;
  value: string;
};

export type SelectProps = {
  options: Option[];
  onChange: (value: string) => void;
  selectedValue: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Select = ({
  onChange,
  options,
  selectedValue
}: SelectProps): JSX.Element => {
  const getOptionWithValue = (value: string) =>
    options.find((option) => option.value === value);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  const clickOutSideRef = useClickOutside(() => setIsOpen(false));

  return (
    <SelectContainer
      ref={clickOutSideRef}
      onClick={() => handleToggle()}
      value={selectedValue}
    >
      <SelectedItem component="span" variant="body">
        {getOptionWithValue(selectedValue)?.label} <SelectArrow open={isOpen} />
      </SelectedItem>
      {isOpen && (
        <SelectItemsUl>
          {options.map((option) => (
            <SelectItem
              data-value={option.value}
              key={option.value}
              onClick={(e) =>
                e.currentTarget.dataset.value &&
                onChange(e.currentTarget.dataset.value)
              }
            >
              <Typography component="span" variant="body">
                {option.label}
              </Typography>
            </SelectItem>
          ))}
        </SelectItemsUl>
      )}
    </SelectContainer>
  );
};
