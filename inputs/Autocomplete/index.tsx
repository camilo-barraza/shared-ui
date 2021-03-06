import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FormInputLabel, MenuItem } from "../..";
import { Div, DivThemeCSSProps } from "../../styledConfig/utils";
import { chevronDown } from "../../Table/icons";
import { SelectMenu } from "../SelectMenu";
import { TextInput as TextInputBase } from "../TextInput";

const TextInput = styled(TextInputBase)(
  ({ theme: { colors, css: c } }) => css`
    ${(props: any) =>
      props.isDisabled &&
      css`
        cursor: not-allowed;
        pointer-events: none;
      `}
  `
);

const ClearIcon = styled(Div)(
  ({ theme: { colors, css: c } }) => css`
    pointer-events: auto;
  `
);

type Option = {
  label: any;
  value: any;
};

type Props = {
  label?: any;
  placeholder?: string;
  value: any;
  onChange: (v: string | null) => void;
  options: Option[];
  isInputDisabled?: boolean;
  onToggle?: (isOpen: boolean) => void;
} & DivThemeCSSProps;
const Autocomplete = ({
  label = null,
  isInputDisabled = false,
  placeholder = "Select Option",
  value,
  onChange,
  options,
  onToggle,
  ...props
}: Props) => {
  const [updatedText, setUpdatedText] = useState(false);
  const findOptionLabel = options.find((o) => o.value === value)?.label || "";
  const [text, setText] = useState(findOptionLabel);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (value) setText(findOptionLabel);
  }, [value]);

  useEffect(() => {
    setUpdatedText(true);
  }, [text]);

  useEffect(() => {
    setUpdatedText(false);
    setText(findOptionLabel);
    if (onToggle) onToggle(isMenuOpen);
  }, [isMenuOpen]);

  const onSelect = (v) => {
    setText(options.find((o) => o.value === v).label);
    onChange(v);
    setIsMenuOpen(false);
  };

  const filteredOptions = updatedText
    ? options.filter((o) => o.label.toLowerCase().includes(text.toLowerCase()))
    : options;

  const inputIconUI = text ? (
    <ClearIcon clickable dim={24} centered onClick={() => onChange(null)}>
      {clearIcon}
    </ClearIcon>
  ) : (
    <Div centered dim={24}>
      {chevronDown}
    </Div>
  );

  return (
    <Div w100 {...props}>
      <FormInputLabel>{label}</FormInputLabel>
      <Div onClick={() => setIsMenuOpen(true)}>
        <TextInput
          isDisabled={isInputDisabled}
          placeholder={placeholder}
          value={text}
          onChange={(v) => setText(v)}
          icon={inputIconUI}
        />
      </Div>
      <SelectMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        {filteredOptions.map((o, index) => (
          <Div key={index}>
            <MenuItem
              isLast={index === filteredOptions.length - 1}
              isSelected={value === o.value}
              onClick={() => onSelect(o.value)}
            >
              {o.label}
            </MenuItem>
          </Div>
        ))}
      </SelectMenu>
    </Div>
  );
};

const clearIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4L12.5161 12.5161"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 12.5161L12.5161 3.99998"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { Autocomplete };
