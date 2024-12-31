import React from 'react'

function AboutComp() {
    return (
               <div>
            <div style={{
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.6',
                color: '#333',
                margin: '20px',
                padding: '20px',
                backgroundColor: '#f9f9f9',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '24px',
                    marginBottom: '15px',
                    color: '#b8860b'
                }}>
                    Who We Are
                </h2>
                <p style={{ margin: '10px 0' }}>
                    BNK Jeweller is India's leading fine jewellery discovery platform focusing on giving YOU 
                    an awesome jewellery buying experience. At BNK Jeweller we strive to provide you the 
                    largest collection of curated designs for every occasion. We are not just selling jewellery, 
                    but an unparalleled jewellery buying experience at your fingertips!
                </p>
                <p style={{ margin: '10px 0' }}>
                    Shining bright with a young team focused on innovation, customer happiness, and 
                    transparency, BNK Jeweller addresses the growing demands of today's always on-the-go 
                    consumers to discover, explore, buy and know more about their jewellery.
                </p>

                <div style={{ marginTop: '20px' }}>
                    <h3 style={{
                        fontSize: '20px',
                        color: '#b8860b'
                    }}>
                        Owner Information
                    </h3>
                    <p style={{ margin: '10px 0px' }}>
                        BNK Jeweller was founded by <strong>Ramesh Bhansali</strong>, a visionary entrepreneur 
                        with over 25 years of experience in the jewellery industry. His passion for quality and 
                        design excellence drives the company to deliver an unmatched jewellery shopping 
                        experience.
                    </p>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <h3 style={{
                        fontSize: '20px',
                        color: '#b8860b'
                    }}>
                        Our Partners
                    </h3>
                    <p style={{ margin: '10px 0px' }}>
                        We are proud to collaborate with some of the best in the business:
                    </p>
                    <ul style={{
                        marginTop: '10px',
                        listStyleType: 'square',
                        paddingLeft: '20px'
                    }}>
                        <li><strong>Sapphire Creations:</strong> Known for their exquisite gemstone jewellery.</li>
                        <li><strong>Golden Touch:</strong> Experts in crafting timeless gold ornaments.</li>
                        <li><strong>Diamond Dreams:</strong> Leaders in certified diamond jewellery.</li>
                        <li><strong>Artisan Silver:</strong> Specialists in handcrafted silver pieces.</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default AboutComp


