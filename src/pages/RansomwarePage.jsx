import React from 'react';

export default function RansomwarePage() {
    return <div className='container'>
        <div className='wrapper'>
            <div className='ribbon'>
            <div className='title'>RANSOMWARE</div>
            </div>
            <div className='quoteRibbon'>
            <p><em>
                "Data exfiltration has surged by 39% since last year, becoming the preferred goal for the attackers that gain access to a company’s network to download sensitive data to sell on the darknet. Ransomware certainly appears to have reached a critical sea change, even as organizations are investing more in safety nets like cyber insurance which have [a portion of] ransomware payouts included in coverage policies.  So, cybercriminals have concluded that using stealth tactics to stay under the radar and steal sensitive, valuable information to sell is the better investment of their effort.”</em></p>
                <p>- Rick Hanson, President, Delinea</p>
            </div>
            <div className='fullscreenTextWrapperSection'>
                <p>Unless one believes they have the expertise and technology capable of creating an impenetrable cybersecurity wall (a first!), the only remaining measure to protect sensitive and valuable enterprise data is encryption.</p>
                <p>Although encryption has been around since 1500 BC, it has fallen out of favor in the IT world for various reasons, such as:</p>
                <ul>- Being difficult to understand and implement</ul>
                <ul>- Potentially degrading system performance; and</ul>
                <ul>- Limiting data visibility and usability</ul>
                <p>While some of these concerns were once valid, many - if not all - no longer hold true. Considering what's at stake - sometimes the very survival of a company, CISO's are starting to reconsider their stance, and believe it may be worth accepting potential trade-offs for enhanced security.</p>
                <p>Omega Krypto's patented encryption, <span>IMMUNE</span>,  has addressed most, if not all, of the traditional barriers to implementing encryption. Working in concert with existing cybersecurity measures, Omega Krypto’s <span>IMMUNE</span> encryption is specifically designed to shield and preserve sensitive data and PII, perpetually remaining “unreadable and useless” to any bad actor or cyberthreat groups.</p>
                <p>Thanks to its low computational, memory, and power requirements, it's incredibly simple to implement and has a negligible impact on system performance.   This makes the <span>IMMUNE</span> encryption ideal for "edge" devices such as mobile phones, drones, utility meters, and any IoT implementation.</p>
                <p>This methodology also allows selective encryption of different portions of the data, one that provides total visibility of data whether in transit, at rest or at use.  Most importantly, its ciphers are impervious to attacks of Quantum Computers, and will therefore remain impenetrable for the foreseeable future. </p>
                <p>To demonstrate <span>IMMUNE</span>’s simplicity and speed, we have developed a web demo in JavaScript that you can test for yourself.   We also invite you to review our “Introduction to Poly-Substitution Encryption” white paper.</p>
            </div>
            <div className='imageWrapper border'>
            <img src='/simplifyTheComplex.png' alt='logo' className='imgLarge' />
        </div>

        <div className='subsectionRibbon'>
                <div className='subsectionTitle'>
                    THE STATE OF RANSOMWARE
                </div>
            </div>
            <div className='quoteRibbon'>
            <p><em>“There’s a ransomware attack somewhere in the world every 11 seconds.”</em></p>
                    <p>-Clare Sullivan, Executive Director, Georgetown University’s Cyber Smart Research Centre (12/4/23)
                        </p>
            </div>
            <div className='fullscreenTextWrapperSection'>
                <p>Remarkably resourceful, inventive, and creative, cybercriminals have no problem staying current with – and ahead of - a digital-first, cloud-first environment.</p>
                <p>Baseline security practices using perimeter controls such as next generation firewalls, secure email/web gateways and focusing on closing vulnerability gaps alone have not been sufficient to prevent ransomware attacks. </p>
                <p>Organizations of all shapes and sizes are a ransomware target. Cyberattackers will just as quickly strike a hospital as a Fortune 500 organization.  Bad actors’ priorities are solely focused on finding an initial point of access, encrypting networks, and, when possible, extracting sensitive data to exert pressure on victims for extortion purposes.</p>
            </div>

            <div className='alternatingTextWrapper'>
                <div className='textWrapperHalf leftText'>
                    <p>The short- and long-term consequences of a ransomware attack can be catastrophic.</p>
                    <p>The primary challenge facing Fortune 500 companies is to safeguard critical data and personally identifiable information (“PII”) from being abducted by unauthorized processes and users.</p>
                </div>
                <div className='imageWrapperHalf right border'>
                    <img src='/ransomPayment.png' alt='logo' className='imgMedium' />
                </div>
            </div>

            <div className='quoteRibbon medium smSpaced'>
                <p><em>“Digital freedom stops where that of users begins.  Nowadays, digital evolution must no longer be offered to a customer in trade-off between privacy and security.  Privacy is not for sale.  It’s a valuable asset to protect.”</em></p>
                <p>-Stephane Nappo, Global Head Information Security, Société Générale International Banking.
</p>
            </div>
            <div className='subsectionRibbon'>
                <div className='subsectionTitle'>RANSOMWARE TACTICS</div>
            </div>
            <div className='fullscreenTextWrapperSection'>
                <p>To deploy a ransomware attack, cyberattackers must first gain access to a victim’s
corporate environment, devices, and data.  Threat actors typically use four main
approaches to gain entry:</p>
<ul>- Using compromised credentials to log in, i.e., legitimate access that had previously been stolen.
</ul>
<ul>- Exploiting vulnerabilities in cyber applications and tools used by the business.
</ul>
<ul>- Using social engineering to obtain legitimate credentials.</ul>
<ul>- Taking advantage of users’ naivety through fake messages (phishing)</ul>
            </div>
            <div className='roeSubtitle'>"CONVENTIONAL RANSOMWARE"</div>    
            <div className='fullscreenTextWrapperSection'>
                <p>Ransomware is a code of malicious software or malware that cryptographically encodes files and data, effectively locking up the information and, in turn, prevents the victim (organization) from accessing computer files, systems, or networks. </p>
                <p>The data is not actually extracted – it remains on your computer system.  Cybercriminals will demand that a “ransom” or  payment is received prior to the attacker’s delivery of a decryption key to unlock the victim’s files and data.</p>
            </div>
            <div className='roeSubtitle'>EXFILTRATION</div>
            <div className='fullscreenTextWrapperSection'>
                <p>As the sophistication of cyberattackers’ arsenal and tools increases, they are quickly pivoting to next- generation tactics via the deployment of multiple ransomware variants against the same victim and the use of data-destruction methods to increase pressure on victims and expedite the ransom payment.</p>
            </div>
            <div className='alternatingTextWrapper'>
                <div className='textWrapperHalf leftText'>
                <p>Today’s ransomware incorporates a sinister dimension by surreptitiously pilfering files.   Contrary to “conventional ransomware,” cybercriminals are extracting or exfiltrating critical business and sensitive data and transferring it to a remote system under the attacker’s control.  Sensitive data – ranging from intellectual property to PII - is now in the control of cyberattackers.</p>
                </div>
                <div className='imageWrapperHalf right border'>
                    <img src='/ransomMotivation.png' alt='logo' className='imgMedium' />
                </div>
            </div>
            <div className='fullscreenTextWrapperSection'>
            <p>Reflecting the cybercriminals’ abilities to fine-tune the extortion process, data exfiltration in 2023 increased to 64% and the disruption of supply chains to 55%, while a simple ‘money grab’ decreased to 34%.</p>
            <p>These covert tactics provide attackers continuous access, enabling them to ramp up the damage – and ransom amount - at any time. Cybercriminals can also threaten a second layer of extortion:</p>
            <ul>- Release a bit of data at a time, creating additional pressure for the victim to pay the ransom</ul>
            <ul>- Expose the data publicly, in whole or in part, unless the victim pays; and/or, </ul>
            <ul>- Sell the data to other criminals who will weaponize it for alternative crimes.
</ul>
            </div>
            <div className='alternatingTextWrapper'>
                <div className='imageWrapperHalf left border'>
                    <img src='/ransomwareFrequency.png' alt='logo' className='imgMedium' />
                </div>
                <div className='textWrapperHalf rightText'>
                <p className='medium'>
                The impact from ransomware remains high.  81% of surveyed organizations were affected at least once in the past 12 months, with 48% being impacted by a ransom payment.   39% of the organizations paying a ransom stated the cost was at least $1M.
    </p>
                </div>
            </div>
            <div className='fullscreenTextWrapperSection'>
                <p>Compared to an abrupt shutdown of an organization’s operations, cyberattackers exfiltrating data can more easily stay under a cybersecurity team’s radar, steadily operating without raising alarms and without disrupting the victim’s business operations. </p>
                <p>Many organizations do not detect breaches on their own. On average, an organization’s security team only identifies one out of three data breaches. In other cases, the breaches were found by a third party, or the attackers informed organizations they’ve been infiltrated. </p>
            </div>
            <div className='alternatingTextWrapper'>
                <div className='imageStack left border'>
                    <img src='/timeBreach.png' alt='logo' className='imgMedium' />
                </div>
                <div className='imageStack'>
                <div className='spacer'></div>
                <div className='imageWrapperHalf right border'>
                    <img src='/costBreach.png' alt='logo' className='imgMedium' />
                </div>
            </div>
            </div>
            <div className='fullscreenTextWrapperSection'>
            </div>
            <div className='alternatingTextWrapper'>
            <div className='imageWrapperHalf left border'>
                    <img src='/fundingSource.png' alt='logo' className='imgMedium' />
                </div>
                <div className='textWrapperHalf rightText'>
                <p>Funding a ransomware payment usually involves multiple monetary sources.</p>
                    <p>In 2023, insurance providers contributed toward the ransom in 83% of 5,000 surveyed attacks (Sophus). However, cyber insurance providers rarely (1%) covered the full amount.  In 79% of reported cases, the insurer funded less than half the payment.</p>
                </div>
            </div>
            <div className='roeSubtitle'>DATA BACKUPS</div>
            <div className='fullscreenTextWrapperSection'>
                <p>The transition from encryption-only practices to threats, extortion, and theft is an alarming trend in the ransomware space.   Many of today’s most prominent ransomware groups will conduct covert surveillance on their targets, steal data, and will threaten to publish information online unless a ransom demand is met.</p>
                <p>Many companies have begun generating data backups to receive usable data with the intent of not of having to pay a ransom.</p>
                <p>Why? Two theories:</p>
                <ul>-An assumption that stealing data is not a concern, as the organization’s protection methods such as firewalls, multi-factor identification, and data backups will at minimum keep attackers out and prevent the necessity to negotiate ransom payments. </ul>
                <ul>-It may seem simpler to process unencrypted data, so they opt to not complicate things by encrypting it.</ul>
                <p>However, backups are no longer a sufficient defense.  Cyberattackers are very aware that victims – especially larger corporations with adequate resources - may have generated data backups and possibly encrypted sensitive information using today’s best available encryption, which, needs to be said, is vulnerable to quantum computing.</p>
                <p>If cybercriminals gain access to backup storage, they will encrypt whatever they find there.  If not, they will attempt to compromise data backups by surreptitiously encrypting the oldest and least used data first, making a copy of the data before encrypting it.  The result: The data is automatically backed up and will replace old clean data, with cyberattackers finally encrypting and using the data for their final attack.</p>
                <p>Known as “store now, decrypt later,” cybercriminals don’t mind stealing encrypted data and keep it stored, waiting for the time quantum computing will allow them to decrypt and use it for extortion.</p>
                <p>As seen in many situations, organizations may not be aware of the exfiltration of their data for days, weeks, or many months.</p>
                <ul>
                    -“Store now, decrypt later” can have a calamitous affect upon organizations that need to protect personally identifiable information and other sensitive data for a lifetime within medical records, financial information, and academic records
                </ul>
                <ul>
                    -This process enables the attacker to intensify the extortion process.
                </ul>
            </div>
            
            <div className='alternatingTextWrapper'>
                    <div className='imageWrapperHalf left border'>
                        <img src='/successRate.png' alt='logo' className='imgMedium' />
                    </div>
                    <div className='textWrapperHalf rightText'>
                    <p>Sophos’ 2024 global survey reports 94% of organizations hit by ransomware stated the cybercriminals attempted to compromise their backups during the attack, with an average success rate of 57%  across all sectors. </p>
                    </div>
                </div>

                <div className='alternatingTextWrapper'>
                <div className='textWrapperHalf leftText lineHeight'>
                <p>Organizations with compromised data backups experienced considerably worse outcomes than those whose backups were not breached. </p>
                    <ul>- On average, ransom demands were more than double ($2.3M vs. $1M median initial ransom demand)</ul>
                    <ul>- Almost twice as likely to pay the ransom to recover encrypted data (67% vs. 36%)</ul>
                    <ul>- Median overall recovery costs: $3M</ul>
                </div>

                <div className='imageWrapperHalf right border'>
                    <img src='/compromisedBackups.png' alt='logo' className='imgMedium' />
                </div>
            </div>
            <div className='subsectionRibbon'>
                <div className='subsectionTitle'>BIG GAME HUNTING</div>
            </div>
            <div className='quoteRibbon'>
            <p><em>“CEOs are fully aware of the threats to their business from cyberattacks.  Yet, our research shows most lack confidence in their organization’s ability to avert or minimize such attacks.  They learn how to be cyber resilient only after their organization experiences a breach.  This reactionary way of treating cybersecurity results in greater risk of attacks and higher costs to remediate them.”</em></p>
                <p>-Accenture, The Cyber-Resilient CEO 2023</p>
            </div>
            <div className='imageWrapper border'>
            <img src='/globalCost.png' alt='logo' className='imgMedium' />
        </div>
        <div className='alternatingTextWrapper spaced'>
                    <div className='imageWrapperHalf left border'>
                        <img src='/ransomwareGrowth.png' alt='logo' className='imgMedium' />
                    </div>
                    <div className='textWrapperHalf rightText medium'>
                    <p>Reported global ransomware attacks in 2022 totaled 2,531, with financially motivated cybercrime accounting for the highest volume of incidents (74%).  Ransomware or malicious scripts represented 82% of those attacks.</p>
                    </div>
                </div>
                <div className='alternatingTextWrapper'>
                <div className='textWrapperHalf leftText medium'>
                <p>In 2023, the frequency, scope, and complexity of global ransomware attacks – inclusive of record–breaking payments -  increased by a staggering 84% over 2022, generating 4,667 reported ransomware incidents. </p>
                </div>

                <div className='imageWrapperHalf right border'>
                    <img src='/ransomwareGrowth2.png' alt='logo' className='imgMedium' />
                </div>
            </div>
            <div className='alternatingTextWrapper spaced'>
                    <div className='imageWrapperHalf left border'>
                        <img src='/regionalRansomware.png' alt='logo' className='imgMedium' />
                    </div>
                    <div className='textWrapperHalf rightText medium'>
                    <p>North America remains the most targeted area, accounting for 50% (2,330) of global ransomware attacks in 2023.  </p>
                    </div>
                </div>
                <div className='quoteRibbon'>
                <p><em>"The bad guys have figured out it's not the number of attacks. It's where you attack.  So, they're gaining access to data databases that have large volumes of data.”</em></p>
<p>John Riggi, National Cybersecurity Advisor, American Hospital Association</p>
            </div>
            <video controls>
                <source src="/Ransomware_Breach_Examples.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
            </video>
        <div className='quoteRibbon'>
                <p><em>“It quickly dawned on us how ill-prepared we were and how little we actually knew about the real risks of being hit by something like that. We did not understand how severe the risk could be. We couldn’t even imagine it.”
</em></p>
<p>CEO of a $5 billion European company.  The CEO Report on Cyber Resilience, Istari & Oxford University</p>
            </div>
            <div className='imageWrapper border spaced'>
            <img src='/globalIncidents.png' alt='logo' className='imgLarge' />
        </div>
        <div className='imageWrapper border spaced'>
            <img src='/globalIncidents2.png' alt='logo' className='imgLarge' />
        </div>
        <div className='fullscreenTextWrapperSection medium spaced'>Neither paying the ransom nor hoping cyber insurance will cover losses is an effective strategy for mitigating an attack.</div>
        <div className='alternatingTextWrapper spaced'>
                    <div className='imageWrapperHalf left border'>
                        <img src='/cyberInsurance.png' alt='logo' className='imgMedium' />
                    </div>
                    <div className='textWrapperHalf rightText medium'>
                    <p>Almost half (41%) of organizations with cyber insurance did not receive as much coverage as they expected and, in some cases, did not receive any coverage due to an exception by the insurer.</p>
                    </div>
                </div>
                <div className='alternatingTextWrapper'>
                <div className='textWrapperHalf leftText medium'>
                <p>Ransomware actors have intensified their operations, demanding larger sums by carefully choosing victims for both their inability to tolerate a crippling attack and their ability to pay.</p>
                </div>

                <div className='imageWrapperHalf right border'>
                    <img src='/breachCost.png' alt='logo' className='imgMedium' />
                </div>
                </div>

                <div className='alternatingTextWrapper spaced'>
                    <div className='imageWrapperHalf left border'>
                        <img src='/paymentsReceived.png' alt='logo' className='imgMedium' />
                    </div>
                    <div className='textWrapperHalf rightText medium'>
                    <p>Cybercriminals reached an unprecedented milestone, surpassing $1B in payments from victimized organizations.</p>
                    </div>
                </div>

                <div className='fullscreenTextWrapperSection'>
                    <p>This $1.1 Billion ransom payment and additional “costs” to remedy the situation does not include the harmful short- or long-term consequences of these organizations’ apparent inability to protect and shield the PII of their clientele, students, employees, or customers.</p>
                    <p>Beyond the actual ransom payments, the average cost of each ransomware attack was over $5M.Beyond the actual ransom payments, the average cost of each ransomware attack was over $5M.</p>
                </div>

                <div className='imageWrapper border'>
                    <img src='/totalCost.png' alt='logo' className='imgLarge' />
                </div>

                <div className='fullscreenTextWrapperSection'>
                    <p>As ransomware groups are drawn to carry out more attacks in what they consider a lucrative industry, many experts suggest that the highly public nature of ransomware serves as a kind of advertising, constantly pulling in more opportunistic attacks.</p>
                </div>

                <div className='quoteRibbon spaced'>
                <p><em>"Everybody sees all these ransomware attacks. Like sharks that smell blood in the water, criminals tend to flock to where the money is being made."</em></p>
<p>-Allan Liska, Threat Analyst, Recorded Future</p>
            </div>

                    <div className='subsectionRibbon'>
                    <div className='subsectionTitle'>
                        United States of America
                    </div>
                
        </div>

        <div className='fullscreenTextWrapperSection smSpaced'><p>The United States continues to lead all countries and global regions with an average cost per data breach of $9.48M.</p></div>
        <div className='imageWrapper border'>
                    <img src='/ransomwareUsa.png' alt='logo' className='imgLarge' />
                </div>

                

                <div className='alternatingTextWrapper spaced'>
                <div className='imageStack left border'>
                    <img src='/infrastructure.png' alt='logo' className='imgMedium' />
                </div>
                <div className='imageStack'>
                <div className='spacer'></div>
                <div className='imageWrapperHalf right border spaced'>
                    <img src='/crimeType.png' alt='logo' className='imgMedium' />
                </div>
                 </div>
                 </div>


            <div className='subsectionRibbon spaced'>
                    <div className='subsectionTitle'>
                        SMALL AND MIDSIZE BUSINESSES
                    </div>
            </div>

            <div className='fullscreenTextWrapperSection smSpaced'><p>While companies of all sizes have experienced a substantial increase in cyberattacks and ransomware, there’s been a dramatic spike in attacks focused on small and midsize businesses (SMBs) in recent years.</p></div>

            <div className='imageWrapper border'>
                    <img src='/businessAffected.png' alt='logo' className='imgLarge' />
                </div>

            <div className='fullscreenTextWrapperSection'><p>SMBs account for 40% and 50%, respectively, of the GDP.</p></div>
            <div className='fullscreenTextWrapperSection'><p>43% of cyberattacks In the US are targeted at SMBs, 
yet only 14% are adequately prepared to defend themselves. </p></div>

            <div className='roeSubtitle center'>Accenture Cybercrime Study</div>
            <div className='fullscreenTextWrapperSection'>
                <p>While there are no universally accepted criteria for differentiating small businesses from midsize companies, these companies have fewer employees, less revenue, and assets than large enterprises:</p>
                <ul>Small Business:  Fewer than 100 employees and/or less than $50M in annual revenue.</ul>
                <ul>Midsize Business: Fewer than 1,000 employees and/or between $50M and $1B annual revenue.</ul>
                <p>As SMBs move their operations to the cloud and adopt more advanced technologies to stay competitive, they’ve also become more vulnerable to cyber attacks. These attacks disrupt normal operations as well as  cause damage to critical IT assets and infrastructure that are nearly impossible to recover from without the budget or resources to do so.  Additionally, the result of an attack on SMBs can have a serious adverse affect on their reputation – directly attributing to a loss of customer confidence as well as customers taking their business elsewhere.</p>
                <p>Cybercriminals understand that SMBs have limited financial and IT resources. They rely on this knowledge to extort SMBs since they believe SMBs will be limited in their options to recover their data.  This makes them more vulnerable to cyberattacks for several reasons, including:</p>
                    <ul><span className='greenSpan'>Limited IT Expertise: </span>Many SMBs rely on vendors to develop their IT systems and relatively few have dedicated IT teams. Of those who do, they still often have limited cybersecurity knowledge.</ul>
                    <ul><span className='greenSpan'>Budget Constraints: </span>Small companies have limited resources and don’t have the money to spend on complex cybersecurity measures.</ul>
                    <ul><span className='greenSpan'>Security Gaps: </span>SMB IT management often do not have the expertise to implement concepts such as Zero Trust, multi-factor authentication (MFA), and disaster recovery (DR) planning.</ul>
                    <ul><span className='greenSpan'>Valuable Data: </span>Despite their size, mid-market companies often handle significant amounts of valuable data, including personal customer information, financial records, and intellectual property.</ul>
                    <ul><span className='greenSpan'>Attractive Targets: </span>Cybercriminals view this data as highly lucrative, making these companies high payoff targets.</ul>
            </div>
            <div className='quoteRibbon'>
                <p><em>“The companies that do the best job on managing a user’s privacy will be the companies that ultimately are the most successful.”</em></p>
<p>-Fred Wilson, Co-Founder Union Square Ventures</p>
            </div>
            <h1 className='silver'>For more information, contact info@omegakrypto.com.</h1>
            </div>
    </div>
}