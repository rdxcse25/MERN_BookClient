import React from 'react';

const SidebarLogo = ({ href, img, imgAlt, displayName }) => {
    return (
        <a href={href} className="flex items-center space-x-2">
            {img && (
                <img src={img} alt={imgAlt} className="w-16 h-16 rounded-full" />
            )}
            <div>
                <p className="font-semibold text-gray-800">{displayName || "Demo User"}</p>
                {/* Additional user information or menu */}
            </div>
        </a>
    );
};

export default SidebarLogo;
