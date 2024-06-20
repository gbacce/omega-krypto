import React from 'react';

export default function PrivacyPage() {
    return <div className='container'>
        <div className='wrapper'>
            <div className='ribbon'>
                <div className='title'>
                    DATA PRIVACY
                </div>
            </div>
            <div className='quoteRibbon'>
            <p><em>“It is increasingly vital for organizations to approach privacy management as
                    table-stakes, as consumers and regulators alike put privacy rights at the
                    forefront.”</em></p>
                    <p>-Jason Wesbecher, CEO at TrustArc
                        </p>
            </div>
            <div className='subsectionRibbon'>
            <div className='subsectionTitle'>
                THE STATE OF ENCRYPTION
                </div>
            </div>

            <div className='alternatingTextWrapper'>
                <div className='textWrapperHalf centerText medium'>
                    <h2>Cryptography or encryption?</h2>
                </div>
                <div className='imageWrapperHalf right border'>
                    <img src='/cryptographyEncryption.png' alt='logo' className='imgMedium' />
                </div>
            </div>


            <div className='alternatingTextWrapper'>
                <div className='imagestack marginRight'>
                    <div className='stackedImage border'>
                    <img src='/mesopotamia.png' alt='logo' className='imgMedium' />
                    </div>
                    <div className='spacer'/>
                    <div className='stackedImage border'>
                    <img src='/netscape.png' alt='logo' className='imgMedium' />
                    </div>
                </div>
                <div className='imagestack border'>
                    <div className='spacer'/>
                    <div className='spacer2'/>
                    <div className='stackedImage alignRight border'>
                    <img src='/worldwar.png' alt='logo' className='imgMedium' />
                    </div>
                </div>
                    
            </div>

            <div className='fullscreenTextWrapperSection'>
                <p>Advanced Encryption Standard (AES) is a specification for the encryption of
electronic data established by the U.S National Institute of Standards and Technology
(NIST) in 2001. AES is widely used today as it is a much stronger than DES and triple DES
despite being harder to implement.</p>
            </div>
            <div className="imageWrapper border smSpaced" >
                <img src='/aes.png' alt='logo' className='imgLarge' />
            </div>
            <div className='fullscreenTextWrapperSection'>
                <p>An essential tool for digital security and cyberprivacy, encryption technologies are now
used to protect confidential digital information stored on computer systems (data-at-rest),
and data transmitted via computer networks, including the Internet (data-in-transit).</p>
            </div>
            <div className='fullscreenTextWrapperSection'>
                <p>Today’s de-facto standard of encryption is AES-256, labeled as “sufficient” by the US
government for the transmission of Top Secret/SCI information. At the same time,
significant work is now being dedicated to Post Quantum Computing (PQC) encryption
algorithms as well as other alternative solutions.</p>
            </div>  
            <div className='fullscreenTextWrapperSection'>
                <p>While symmetric ciphers like AES plans to use 512 bit keys and public key ciphers like
RSA plan to use 4,096 bit keys in an attempt to resist a quantum attack, as the number
of qubits keeps growing, their key length requirements exponentially expand as well.
Soon Megabit-long keys will be used, subsequently increased to Gigabit-long keys,
Terabit-long keys, and so on.</p>
            </div>              
            <video controls>
            <source src="/State_of_Encryption.mp4" type="video/mp4" />
            Sorry, your browser doesn't support videos.
        </video>
            <div className='quoteRibbon'>
                <p><em>“Treating cloud environments as an extension of existing infrastructure while
maintaining exclusive control and security of data, especially sensitive data, is
key to cloud security.</em></p>
                <p><em>“Customer control of encryption is essential as it allows organizations to leverage
the scalability, cost efficiency, and accessibility benefits of the cloud while
ensuring the utmost integrity and confidentiality of their valuable data.”
                    </em></p>
<p>Sebastien Cano, Senior Vice President, Thales</p>
            </div>
            <div className='subsectionRibbon'>
            <div className='subsectionTitle'>
                DATA TRAILS
            </div>
                
            </div>
            <div className='quoteRibbon'>
            <p><em>
            “How existing data might not be safe is something that’s a little bit scary, so
someone can steal your data now which is fully encrypted now according to
everything that can be done to it and, you know, in five – ten years that data
might not be private anymore.”
                </em></p>
                <p>-Kam Moler, Senior Associate Dean for Natural
Sciences and Professor of Physics at Stanford University
                    </p>
            </div>
            <div className='fullscreenTextWrapperSection'>
                <p>A direct impact of today’s digital data information management lifecycle is the
endurance of any information digitally stored or transmitted - be it images, documents,
trade secrets, healthcare, financial, or academic records, and most certainly PII. In
short, any information digitally transmitted or stored leaves a “trail.”</p>
</div>
<div className='alternatingTextWrapper'>
<div className="textWrapperHalf2">
<p>Transmitted data leaves traces and copies between the source and the destination.
Digital information relayed through secure connections - traveling from router to router
and from server to server from the point of origin to the destination point - can be
copied during transit without being noticed. Stored data also leaves a trail of copies
behind.</p>
<p>Additionally, organizations are increasingly apprehensive how to protect their sensitive
data against “store-now, decrypt later” attacks. Even if the information is encrypted
using today’s strongest encryption, cybercriminals are already collecting such
encrypted data that, once quantum computers become big enough and reliable
enough, they will decrypt that information and use it for their devious plans.</p>
</div>
<div className='imageWrapperHalf border right'>
                        <img src='/simplifycomplex.png' alt='logo' className='imgMedium' />
                    </div>
</div>
<div className='fullscreenTextWrapperSection'>
</div>
                
            <div className='subsectionRibbon'>
            <div className='subsectionTitle'>
            DATA RULES OF ENGAGEMENT
        </div>
                </div>
        <div className='fullscreenTextWrapperSection'>
                <p>The data privacy landscape has changed considerably in recent years. In an era
where every click, tap, or keystroke leaves a digital trail, people are becoming much
more aware of and disconcerted about how companies use their personal data,
hackers stealing their data, and businesses facing ransomware attacks. Protection is
needed, yet inasmuch as internet privacy regulations vary by country, the likelihood of
a systemic global solution is improbable.</p>
                <p>
                Businesses today must navigate a complex data economy in which an increasing
number of multinational regulations require strict adherence to fully protect personally
identifiable information (“PII”) throughout the collection, storage, and processing of
personal data.
                </p>
                <p>Proactively managing privacy risks is increasingly critical for any organization. The
proliferation of sensitive data across the Web, continual data breaches, ransomware,
and challenges to comply with regulations such as the European Union’s General Data
Protection Regulation (“GDPR”) and the California Consumer Privacy Act (“CCPA”)
present organizations with an urgent undertaking.</p>
                <p>As a comparison, we look at both the United States and the European Union to
evaluate differences between their respective privacy data regulations and current
legislation.</p>
            </div>
            <div className='roeSubtitle'>
                European Union (“EU”)
            </div>
            <div className='fullscreenTextWrapperSection'>
                <p>
                Historical and cultural differences between the EU and the US have a significant role in
their respective data privacy laws. Exemplifying the different approaches is how The EU
Charter of Fundamental Rights establishes data privacy protection as a fundamental
right. This privacy-first mindset reflects a long history of privacy invasions - individuals’
personal information being used for nefarious purposes during the days of National
Socialism and Communism.
                </p>
                </div>
                <div className="alternatingTextWrapper">
                    <div className="textWrapperHalf2">
                    <p>
                Enacted in 20 , the EU established comprehensive standards for acquiring, managing,
and processing the personal data of EU citizens and their residents. Within the scope of
GDPR, personal data is any information that links to an identifiable person or “data
sub ect”.
                </p>

                    <p>Under the umbrella of personally identifiable information (“PII”), all organizations –
regardless of the locality of their headquarters - operating in EU countries that sells
goods or services to EU citizens or monitors the behavior of data sub ects must comply
with GDPR:</p>
                    </div>
                    <div className='imageWrapperHalf right border'>
                        <img src='/gdpr.png' alt='logo' className='imgMedium' />
                    </div>
                </div>
            
            <div className='fullscreenTextWrapperSection'>
                <p>Many see the EU’s GDPR as the first comprehensive data privacy protection law to go
into effect. As a result, many experts say similar legislation will follow suit in other parts of
the world. To stay ahead, many companies are beginning to change their tactics to
ensure compliance.</p>
            </div>
            <div className='roeSubtitle'>
                UNITED STATES
            </div>
            <div className='fullscreenTextWrapperSection'>
                <p>
                In 2023, 3,205 cases of data compromises took place in the United States – an astounding 72% increase since 2021. Over 353 million individuals were affected by these data compromises, including data breaches, leakage, and exposure.
                </p>
            </div>

            <div className='alternatingTextWrapper'>
                <div className='imageWrapperHalf left border'>
                    <img src='/usa1.png' alt='logo' className='imgMedium' />
                </div>
                <div className='textWrapperHalf rightText'>
                <p>
    While these are three different events, they have one thing in common:  An unauthorized threat actor accessed Sensitive and Confidential data.
    </p>
                    <p>Compared to the EU, there are notable gaps in the scope and strength of US data privacy laws. To date, the US has traditionally taken a more hands-off approach that seemingly favors companies that collect, use, and/or sell personal data for commercial purposes.</p>
                </div>
            </div>

            <div className="alternatingTextWrapper">
                    <div className="textWrapperHalf2">
                    <p>
                    Apart from federal legislation that protects privacy data in certain situations, such as healthcare (HIPPA) and financial records (Gramm-Leach-Bliley Act), the US does not have federal regulations specifically addressing internet privacy or PII as a whole.

                    </p>
                    <p>
                    Federal law does require U.S.-based software companies and IT service providers to ensure that authorities can have access to all stored data, including data stored on foreign servers. Furthermore, it guards U.S. service providers from having to tell customers whether authorities have requested their data.
                    </p>
                    </div>
                    <div className='imageWrapperHalf right border'>
                        <img src='/usa2.png' alt='logo' className='imgMedium' />
                    </div>
                </div>

                <div className='alternatingTextWrapper'>
                <div className='imageWrapperHalf left border'>
                    <img src='/usa3.png' alt='logo' className='imgMedium' />
                </div>
                <div className='textWrapperHalf rightText'>
                <p>
                As the media continues to announce new data leaks, data breaches, ransomware attacks as well as congressional hearings targeting social media tech giants, more individuals are voicing their “concern and confusion” about their personal data.
    </p>
                    <p>Compared to the EU, there are notable gaps in the scope and strength of US data privacy laws.  To date, the US has traditionally taken a more hands-off approach that seemingly favors companies that collect, use, and/or sell personal data for commercial purposes.</p>
                </div>
            </div>

                <div className="alternatingTextWrapper">
                    <div className="textWrapperHalf2">
                    <p>
                    In the interim, it seems many Americans choose to believe that their online behavior being tracked is possibly in their best interests or is a price to pay for getting free or discounted products.  While a significant 58% admittedly click on “Agree” without reading privacy policies or adjusting cookie settings, it should be noted that 34% (of 5,000 surveyed) have been victimized by hackers or data breaches

                    </p>

                    </div>
                    <div className='imageWrapperHalf right border'>
                        <img src='/usa4.png' alt='logo' className='imgMedium' />
                    </div>
                </div>
                


           
            <div className='fullscreenTextWrapperSection'>
                <p>
                The lack of a comprehensive privacy-first approach in America’s disparate data privacy regulations is, in part, due to the current patchwork of inconsistent legislation across the nation. 
                </p>
            <p>
            Led by California’s Consumer Privacy Act (“CCPA”), an additional 14 states  have passed some form of data privacy laws. These state laws, in addition to European privacy laws, currently have the most influence over companies.
            </p>
            <p>
            As data breaches continue to cause havoc, mindsets are somewhat shifting towards better protecting individuals.  However, it will take more time to fully develop and enforce specific data privacy laws – thus, bringing the US in fuller alignment with the EU’s mindset and laws.
            </p>
            </div>
            <h1 className='silver'>For more information, contact info@omegakrypto.com.</h1>
        </div>
    </div>
}