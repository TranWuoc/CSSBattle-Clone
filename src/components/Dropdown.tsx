import type { ReactNode } from 'react';
import { useState, useRef, useEffect } from 'react';

interface DropdownProps {
    trigger: ReactNode;
    children: ReactNode;
    className?: string;
}

function Dropdown({ trigger, children, className = '' }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ top: 0, right: 0 });
    const dropdownRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleToggle = () => {
        if (!isOpen && triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + 8,
                right: 0,
            });
        }
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <div ref={triggerRef} onClick={handleToggle} className="cursor-pointer">
                {trigger}
            </div>
            {isOpen && (
                <div
                    className={`animate-fadeIn fixed z-50 min-w-[200px] rounded-2xl px-5 py-2 font-[ClashGrotesk] font-semibold tracking-[0.02rem] shadow-[0_10px_80px_rgba(0,0,0,0.75)] backdrop-blur-[20px] ${className}`}
                    style={{
                        background: 'linear-gradient(94.5deg, rgba(29, 35, 43, .75) 0.19%, rgba(24, 29, 35, .563))',
                        top: `${position.top}px`,
                        right: `${position.right}px`,
                    }}
                >
                    {children}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
