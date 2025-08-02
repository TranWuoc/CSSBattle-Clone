import type { ReactNode } from 'react';

interface DropdownItemProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    isDestructive?: boolean;
}

function DropdownItem({ children, href, onClick, className = '', isDestructive = false }: DropdownItemProps) {
    const baseClasses = 'block px-4 py-2 h-[36px] min-w-[209px]  transition-all duration-200';
    const destructiveClasses = isDestructive ? 'text-red-500' : '';
    const finalClasses = `${baseClasses} ${destructiveClasses} ${className}`;

    if (href) {
        return (
            <a href={href} className={finalClasses} onClick={onClick}>
                {children}
            </a>
        );
    }

    return (
        <button className={`${finalClasses} rounded-2xl text-left`} onClick={onClick}>
            {children}
        </button>
    );
}

export default DropdownItem;
