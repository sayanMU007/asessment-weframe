import React from "react";

type SwitchProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
};

const Switch: React.FC<SwitchProps> = ({ checked, onChange, disabled = false, label }) => {
    return (
        <label style={{ display: "inline-flex", alignItems: "center", cursor: disabled ? "not-allowed" : "pointer" }}>
            <input
                type="checkbox"
                checked={checked}
                onChange={e => onChange(e.target.checked)}
                disabled={disabled}
                style={{ display: "none" }}
            />
            <span
                style={{
                    width: 40,
                    height: 20,
                    background: checked ? "#4f46e5" : "#ccc",
                    borderRadius: 20,
                    position: "relative",
                    transition: "background 0.2s",
                    display: "inline-block",
                }}
            >
                <span
                    style={{
                        position: "absolute",
                        left: checked ? 20 : 2,
                        top: 2,
                        width: 16,
                        height: 16,
                        background: "#fff",
                        borderRadius: "50%",
                        transition: "left 0.2s",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    }}
                />
            </span>
            {label && <span style={{ marginLeft: 8 }}>{label}</span>}
        </label>
    );
};

export default Switch;