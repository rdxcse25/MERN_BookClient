import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const DynamicTextAnimation = () => {
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    const content = "Welcome to The Book Inventory, your premier destination for all things books!";

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            const newText = content.slice(0, text.length + 1);
            if (isMounted) {
                setText(newText);

                if (newText === content) {
                    clearInterval(interval);
                    setShowCursor(false); // Hide cursor after typing is done
                    setTimeout(() => {
                        setText(''); // Reset text after a delay
                        setShowCursor(true); // Show cursor to restart animation
                    }, 2000); // Adjust delay before resetting
                }
            }
        }, 100); // Adjust typing speed (milliseconds per character)

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, [text, content]);

    return (
        <div className="text-left">
            <p className="text-xl text-gray-600">
                {text}
                <span className={classNames("inline-block ml-1", { 'opacity-100': showCursor, 'opacity-0': !showCursor })}>|</span>
            </p>
        </div>
    );
};

export default DynamicTextAnimation;

