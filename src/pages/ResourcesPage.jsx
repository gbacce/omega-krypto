import React from 'react';

export default function ResourcesPage() {
    return <div>
        <div className='ribbon'>
            <div className='title'>
                PATENTS
            </div>
        </div>
        <div className='imageWrapper spaced'>
            <img src='/patentUsa.png' alt='logo' width={1440} />
        </div>
        <div className='imageWrapper spaced'>
            <img src='/patentEurope.png' alt='logo' width={1440} />
        </div>
        <div className='imageWrapper spaced'>
            <img src='/patentIndia.png' alt='logo' width={1440} />
        </div>
        <div className='imageWrapper spaced'>
            <img src='/patentUruguay.png' alt='logo' width={1440} />
        </div>
    </div>
}