import React from 'react';

export default function ResourcesPage() {
    return <div className='container'>
        <div className='wrapper'>
        <div className='ribbon'>
            <div className='title'>
                WHITE PAPERS
            </div>
        </div>
        <div className='pdfRow'>
            <iframe className='pdf' src='IntroToPSE.pdf'/>
        </div>
        <div className='ribbon'>
            <div className='title'>
                PATENTS
            </div>
        </div>
        <div className='imageWrapper spaced'>
            <img src='/patentUsa.png' alt='logo' className='imgDocumentLarge' />
        </div>
        <div className='imageWrapper spaced'>
            <img src='/patentEurope.png' alt='logo' className='imgDocumentLarge' />
        </div>
        <div className='imageWrapper spaced'>
            <img src='/patentIndia.png' alt='logo' className='imgDocumentLarge' />
        </div>
        <div className='imageWrapper spaced'>
            <img src='/patentUruguay.png' alt='logo' className='imgDocumentLarge' />
        </div>
        <div className='ribbon'>
            <div className='title'>
                AWARDS
            </div>
        </div>
        <div className='imageWrapper spaced'>
            <img src='/bestPapers.png' alt='logo' className='imgDocumentLarge' />
        </div>
        <div className='ribbon'>
            <div className='title'>
                ARTICLES
            </div>
        </div>
        <div className='pdfRow'>
            <iframe className='pdf' src='corePrinciplesInfoPrivacy.pdf'/>
        </div>
        <h1 className='silver'>For more information, contact info@omegakrypto.com.</h1>
        </div>
    </div>
}