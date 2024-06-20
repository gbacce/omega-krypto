import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
    return <div className='container'>
            <div className="wrapper">
            <div className="logoContainer">
            <img src='/logo.png' alt='logo' className='homeLogo' />
        </div>
        <div className="tagline">
            <h3>IMMUNIZE YOUR SENSITIVE DATA</h3>
        </div>
                <div className="alternatingTextWrapper" >
                    <div className='imagestack left border'>
                        <img src='/privacy.png' alt='logo' className='imgMedium' />
                    </div>
                    <div className='imagestack right border'>
                    <div className='spacer' />
                    <div className='imageWrapperHalf right border'>
                    <img src='/infoprivacy.png' alt='logo' className='imgMedium' />
                    </div>
                    </div>
                </div>
                <div className="fullscreenTextWrapperSection smSpaced">
                    <p>As more digital data and personally identifiable information (“PII”) are stored in and moved across private and public clouds, databases, apps and services, the discovery of any crack or hole in digital security defenses by unauthorized individuals or groups immediately becomes an insidious and expensive threat to individuals, small businesses, enterprises and governments.</p>
                    <p>All of us are at risk of experiencing a data breach or cyber attack.  Hackers and cybercriminals come up with new ways every day to steal sensitive information and PII that they can publicly disclose, ask for ransom, or sell on the dark web. Even if it is encrypted today with existing standards, cybercriminals can store information until a later date and then decrypt it - using it in the same way as if the data were not encrypted.</p>
                    <p>Companies, hospitals, universities, and government agencies are struggling to protect themselves from cyberattacks.  Despite these efforts, data breaches continue to increase year-over-year.</p>
                </div>
                <div className='imageWrapper border spaced'>
                    <img src='/databreaches.png' alt='logo' className='imgMedium' />
                </div>
                <div className="quoteRibbon spaced">
                    <p>Continuing the current path of pursuing increasingly complex algorithms cannot guarantee either secrecy or unbreakability.</p>
                    <p>Increasing the complexity while they remain vulnerable does not seem to be the right approach.</p>
                </div>
                <div className='fullscreenTextWrapperSection'>
                    <p>
                    Omega Krypto has created an entirely new, disruptive category in cryptography.
Surpassing Shannon’s constraints to Vigenère and Vernam ciphers for perfect secrecy,
Omega Krypto’s patented <span>IMMUNE©</span> encryption is characterized by its simplicity in implementation, low computational, memory and power requirements while ensuring
complete at-rest or in-transit cyberprivacy of images, documents, and any confidential
information.
                    </p>
                </div>
                <div className="alternatingTextWrapper">
                    <div className="textWrapperHalf2">
                    <p>
                    Complementing rather than replacing current cybersecurity measures, <span>IMMUNE</span> safeguards the privacy of digital assets and prevents the theft, abduction, or public disclosure of sensitive information in the event of a cybersecurity breach.
                    </p>
                    <p>
                    Post Quantum by design, <span>IMMUNE</span> will remain impervious to brute force and
cryptanalytic attacks by any means, including quantum computing.
                    </p>
                    <p>
                    Totally suitable for edge devices such as IoT, PLCs, and mobile phones, <span>IMMUNE</span>'s encryption can be embedded in any hardware or software and is natively cross- platform for Android, IOS, Linux, Windows, etc.
                    </p>
                    </div>
                    <div className='imageWrapperHalf right'>
                        <img src='/immune.png' alt='logo' className='imgMedium' />
                    </div>
                </div>
                <div className='fullscreenTextWrapperSection'>
                    <p>
                    Omega Krypto’s <span>IMMUNE</span> tools and processes exceed best practices for compliance
and data privacy standards and mandates, including PCI DSS, HIPAA, GDPR, and many
others.</p>
<p className='center'><NavLink to='/login' className='inlineLink'>Click here</NavLink> to see Omega Krypto’s <span>IMMUNE</span> system in action.</p>
                </div>
                <video controls>
                    <source src="/Home.mp4" type="video/mp4" />
                    Sorry, your browser doesn't support videos.
                </video>
                <div className="alternatingTextWrapper">
                    <div className="textStack leftText">
                        <p>Accounting for 87% of all comprised data, customer and employee personal identifiable information, or PII, were the most egregious.</p>
                        <p>As in 2021 and 2022, IBM’s Cost of Data Breach report confirms that Customer PII continues to be the foremost breached record type, accounting for 47% of all compromised data.  And, these numbers only continue to climb.</p>
                        <p>Employee PII accounts for 40% of all breaches.</p>
                    </div>
                    <div className="imageStack">
                        <div className='stackedImage border alignRight'>
                            <img src='/firstPlace.png' alt='logo' className='imgSmall' />
                        </div>
                        <div className='stackedImage border alignRight'>
                            <img src='/secondPlace.png' alt='logo' className='imgSmall' />
                        </div>
                    </div>
                </div>
                <div className="alternatingTextWrapper spaced">
                    <div className='imageWrapperHalf left border'>
                        <img src='/dataBreachCost.png' alt='logo' className='imgMedium' />
                    </div>
                    <div className="textWrapperHalf rightText">
                    <p>
                    In 2023, customer PII, such as names and Social Security numbers, cost organizations  $183 per record, with employee PII close behind at $181 per record.
                    </p>
                    </div>
                </div>
                <div className='fullscreenTextWrapper largeText spaced'>
                    <p>A prime example of much higher per record costs:</p>
                    <p>Healthcare:  $408 per records</p>
                    <p>(US Dept. Health & Human Services, Cybersecurity Unit, 2022)</p>
                </div>
                <div className="quoteRibbon">
                <em>“I would posit that if somebody’s saying I want something protected for at least
10 years, they should seriously consider whether they should start moving to
alternate encryption techniques now.”</em>
                <p>
                - Arvind Krishna, Chairman & CEO, IBM
                </p>
                </div>
                <h1 className='silver'>For more information, contact info@omegakrypto.com.</h1>
        </div>
    </div>
}