import React from "react";

type Option = {
    value: string;
    label: string;
};

type SelectProps = {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    label?: string;
    id?: string;
};

const Select: React.FC<SelectProps> = ({ options, value, onChange, label, id }) => {
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <select
                id={id}
                value={value}
                onChange={e => onChange(e.target.value)}
            >
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;