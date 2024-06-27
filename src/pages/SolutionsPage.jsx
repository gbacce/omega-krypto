import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SolutionsPage() {
    return <div className='container'>
        <div className='wrapper'>
            <div className='ribbon'>
            <div className='title'>
                IMMUNE
            </div>
        </div>
        <div className='quoteRibbon'>
                <em>“There are only two types of organizations. Those that have been hacked and
those that don’t know it yet.”</em>
<p>- John Chambers, Former Executive Chairman &
CEO, Cisco</p>
        </div>
        <video controls>
            <source src="/Solutions.mp4" type="video/mp4" />
            Sorry, your browser doesn't support videos.
        </video>
        <div className='subsectionRibbon'>
            <section id='pse'>
            <div className='subsectionTitle' >
                POLY-SUBSTITUTION ENCRYPTION
            </div>
            </section>
        </div>
        <div className='quoteRibbon'>
        <em>“Companies often have three-to-four year cybersecurity upgrade cycles. If
there’s a possibility quantum computing can crack keys within five years, and
your upgrade cycle is three to four years, you have to start taking action now.”</em>
<p>- Jeff Wong, Global Chief Innovation Officer, Ernst & Young</p>
        </div>
        <div className="fullscreenTextWrapperSection smSpaced">
            <p>Omega Krypto’s patented <span>IMMUNE</span> system simplifies the complex while preserving and shielding your sensitive data and confidential information from prying eyes and/or unauthorized users.</p>
        </div>
        <div className="imageWrapper" >
            <div className='imageWrapperHalf left border'>
                <img src='/simplify1.png' alt='logo' className='imgMedium' />
            </div>
            <div className='imageWrapperHalf right border'>
                <img src='/simplify2.png' alt='logo' className='imgMedium' />
            </div>
        </div>
        <div className='fullscreenTextWrapperSection spaced'>
            <p>Poly-Substitution encryption cannot prevent hacking or system intrusions, yet makes the effort fruitless and useless.  The content remains irretrievable and indecipherable to hackers, eliminating any leverage for extortion or public disclosure.</p>
            <p className='center'><NavLink to='/demo' className='inlineLink'>Click here</NavLink> to see Omega Krypto’s <span>IMMUNE</span> system in action.</p>
        </div>
        <div className='subsectionRibbon'>
            <div className='subsectionTitle'>
                FORMAT-PRESERVING ENCRYPTION
            </div>
        </div>
        <div className='alternatingTextWrapper'>
            <div className='textWrapperHalf largeText centerText'>
                <h3>The Question:</h3>
                <p>How do you protect private and confidential data information without a significant investment in money and time to modify data structures and software codes?</p> 
            </div>
            <div className='imageWrapperHalf right border'>
                <img src='/integration.png' alt='logo' className='imgMedium' />
            </div>
        </div>
        <div className='fullscreenTextWrapperSection spaced'>
            <p>Format Preserving Encryption (“FPE”) preserves the unconditional security and the advantage that the encryption process timing can be accurately estimated based on the size of the information to be encrypted or decrypted independently of its content.  Due to their intrinsic simplicity, all these substitutions are very fast.  An algorithm using them and complying with IMMUNE’s seven-step process can easily be implemented within existing systems without the need of massive investments in computational power or data structures’ modification.</p>
            <p>FPE is also a method that respects both the length of what you want to encrypt and its
type of data:</p>
        </div>
        <div className='imageWrapper border smSpaced'>
            <img src='/encryptionLength.png' alt='logo' className='imgLarge' />
        </div>
        <video controls>
            <source src="/Format-Preserving_Encryption.mp4" type="video/mp4" />
            Sorry, your browser doesn't support videos.
        </video>
        <div className='fullscreenTextWrapperSection'>
         <p className='center'><NavLink to='/demo' className='inlineLink'>Click here</NavLink> to see Omega Krypto’s <span>IMMUNE</span> system in action.</p>
        </div>
        <div className='subsectionRibbon'>
            <div className='subsectionTitle'>
                CYBERSECURITY vs CYBERPRIVACY
            </div>
        </div>
        <div className='quoteRibbon'>
        <em>
        “Cybersecurity and privacy are independent disciplines,
but in certain circumstances their objectives overlap.”
        </em>
        <p>
        United States’ National Institute of Standards (NIST), Cybersecurity Framework 2.0
        </p>
        </div>
        <div className='alternatingTextWrapper'>
            <div className='textWrapperHalf leftText'>
                <p>From tech giants to small businesses, the significant growth of cloud computing is primarily attributable to the rapid migration of server-side applications to multiple data centers spread across the globe.  Many of these organizations now face the escalating expense of continuously expanding their cybersecurity infrastructure – also known as the “Walls of Defense.”</p>
            </div>
            <div className='imageWrapperHalf right border'>
                <img src='/wallsOfDefense.png' alt='logo' className='imgMedium' />
            </div>
        </div>
        <div className='fullscreenTextWrapperSection smSpaced'>
            <p>Accenture’s Cyber-Resilient CEO states, “Businesses are not yet cyber resilient, and CEOs are unsure that their businesses are on the right track.”</p>
        </div>
        <div className='alternatingTextWrapper'>
            <div className='imageWrapperHalf left border'>
                <img src='/ceoCybersecurity.png' alt='logo' className='imgMedium' />
            </div>
            <div className='textWrapperHalf rightText'>
                <p>While 91% of CEOs reportedly feels cybersecurity is a technical function and only 27% of organizations’ leadership make cybersecurity, trust, and privacy a brand differentiator, it seems a significant portion continue to consider cybersecurity as an incident-driven situation.  </p>
            </div>
        </div>
        <div className='alternatingTextWrapper'>
            <div className='textWrapperHalf leftText'>
                <p>In the interim, there is little evidence of attention or resources being given to ensure the protection of their customers’ confidential information and sensitive data.</p>
            </div>
            <div className='imageWrapperHalf right border'>
                <img src='/securityPrivacy.png' alt='logo' className='imgMedium' />
            </div>
        </div>
        <div className='textWrapper spaced'>
            <h1>Why?</h1>
        </div>
        <div className='imageWrapper border'>
            <img src='/why.png' alt='logo' className='imgLarge' />
        </div>
        <div className='quoteRibbon'>
            <em>“If a customer trusts you with their data, you owe it to them to protect it and
ensure it is safe. Many organizations are having to pay massive financial
penalties for such data breaches, and it is only afterwards that the cost of a
breach now outweighs the potential savings from not investing in cyberprivacy
management solutions."</em>
<p>- Francis Gaffney, Director of Threat Intelligence,
Mimecast</p>
        </div>
        <video controls>
                    <source src="/Cybersecurity_vs_Cyberprivacy.mp4" type="video/mp4" />
                    Sorry, your browser doesn't support videos.
                </video>
        <h1 className='silver'>For more information, contact info@omegakrypto.com.</h1>
        </div>
    </div>
}