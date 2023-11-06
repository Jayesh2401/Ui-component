import React, { FC, MouseEvent, ReactNode } from 'react';

interface ButtonProps {
    text?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    styleType?: 'primary' | 'secondary' | 'danger';
    loading?: boolean;
    loadingText?: string;
    className?: string;
    children?: ReactNode; // Use children to support custom content
}

const Button: FC<ButtonProps> = ({
    text,
    onClick = null,
    disabled = false,
    styleType = 'primary',
    loading = false,
    loadingText,
    className,
    children,
}) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (!disabled && !loading) {
            if (onClick) {
                onClick(event);
            }
        }
    };

    const getButtonStyle = () => {
        switch (styleType) {
            case 'secondary':
                return 'bg-gray-500 text-white hover:bg-gray-700';
            case 'danger':
                return 'bg-red-500 text-white hover:bg-red-700';
            default:
                return 'bg-blue-500 text-white hover:bg-blue-700';
        }
    };

    return (
        <button
            {...(onClick && { onClick: handleClick })}
            className={`py-2 px-4 rounded ${getButtonStyle()} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
            disabled={disabled || loading}
        >
            {loading ? (
                <div className="flex items-center">
                    <div className={`animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2 ${className}`}></div>
                    {loadingText || "loading"}
                </div>
            ) : (
                children || text || "click me"
            )}
        </button>
    );
};

export default Button;
