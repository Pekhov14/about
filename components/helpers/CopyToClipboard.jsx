'use client'

import React, { useState } from 'react';

const CopyToClipboard = ({value}) => {
    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div>
            <button onClick={handleCopyClick}>
                {copied
                    ? <svg className="h-5 w-5 flex-none" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
                              fill="#000"></path>
                    </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                           strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"/>
                    </svg>
                }
            </button>
        </div>
    );
};

export {CopyToClipboard}