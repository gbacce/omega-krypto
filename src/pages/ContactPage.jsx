import React from 'react';

export default function ContactPage() {
    return <div className='container'>
        <div className='wrapper'>
            <div className='ribbon'>
                <div className='title'>
                    ABOUT
                </div>
            </div>
            <div className='spaced'>
            <img src='/whyOmega.png' alt='logo' className='imgDocument' />
            </div>
            <div className=''>
                <img src='/leadershipRow.png' alt='logo' className='fullScreen' />
            </div>
            <div className='spaced'>
                <img src='/rudy.png' alt='logo' className='imgDocument' />
            </div>
            <div className='spaced'>
            <img src='/julian.png' alt='logo' className='imgDocument' />
            </div>
            <div className='spaced'>
            <img src='/donna.png' alt='logo' className='imgDocument' />
            </div>
            <h1 className='silver'>For more information, contact info@omegakrypto.com.</h1>
        </div>
    </div>
}