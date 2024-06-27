import React from 'react';
import Demo from '../components/Demo';

export default function DemoPage() {
    return <div className='container'>
        <div className='wrapper'>
            <div className='tagline'>
                <p>Poly-Substitution Encryption</p>
            </div>
            <Demo />
        </div>
    </div>
}