import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { menuData } from './menuData';
import './MegaMenu.css';

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
    const menuRef = useRef<HTMLDivElement>(null);

    // Close on mouse leave from both navbar and menu
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!isOpen) return;

            const trigger = document.querySelector('.nav-item-wrapper');
            const menuContainer = menuRef.current;

            if (!trigger || !menuContainer) return;

            const triggerRect = trigger.getBoundingClientRect();
            const menuRect = menuContainer.getBoundingClientRect();

            // Safe zone: A bounding box that covers both trigger and menu
            // with a small horizontal buffer
            const safeRect = {
                top: triggerRect.top,
                bottom: menuRect.bottom,
                left: Math.min(triggerRect.left, menuRect.left) - 20,
                right: Math.max(triggerRect.right, menuRect.right) + 20
            };

            const isMouseInSafeZone =
                event.clientX >= safeRect.left &&
                event.clientX <= safeRect.right &&
                event.clientY >= safeRect.top &&
                event.clientY <= safeRect.bottom;

            // Also check if we are in the "gap" between trigger and menu
            // We'll just rely on the safe zone for now as top: calc(100% - 1px) prevents gaps

            if (!isMouseInSafeZone) {
                onClose();
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isOpen, onClose]);

    return (
        <div
            className={`mega-menu-container ${isOpen ? 'active' : ''}`}
            ref={menuRef}
        >
            <div className="mega-menu-content">
                {menuData.map((category, idx) => (
                    <div key={idx} className="mega-menu-column">
                        <div className="mega-menu-title">{category.title}</div>
                        <div className="column-items">
                            {category.items.map((item, itemIdx) => (
                                <Link
                                    key={itemIdx}
                                    to={item.path}
                                    className="mega-menu-item"
                                    onClick={onClose}
                                >
                                    <div className="mega-menu-icon">
                                        <item.icon size={20} />
                                    </div>
                                    <div className="mega-menu-item-text">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MegaMenu;
