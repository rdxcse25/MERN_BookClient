import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const DynamicText1 = () => {
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    const content = "for the best prices";

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
            <span className='text-blue-700'>
                {text}
                <span className={classNames("inline-block ml-1", { 'opacity-100': showCursor, 'opacity-0': !showCursor })}>|</span>
            </span>
        </div>
    );
};

export default DynamicText1;