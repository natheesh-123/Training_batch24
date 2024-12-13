import React from 'react'
import NavComp from '../Layout/NavComp'
function HomeComp() {
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
                    Welcome to BNK Jewellers
                </h2>
                <p style={{ margin: '10px 0' }}>
                    BNK Gold is the Top Best Gold Jewellery Manufacturer in India. They are one of the leading 
                    online jewellery stores in India. Having in-depth knowledge in jewellery and antiques, Satva 
                    Gold has been offering some of the best and unique jewellery designs so far in the men’s and women’s 
                    collections. 
                </p>
                <p style={{ margin: '10px 0' }}>
                    We visualise growing the brand in every possible aspect, including launching an online domain for 
                    gold jewellery shopping and focusing on customer needs. We have been customising jewellery and 
                    designs on orders.Satva Gold provides 18 
                    carat (18ct), 22 carat (22ct), and 916 hallmark gold jewellery.
                </p>

                <div style={{ marginTop: '20px' }}>
                    <h3 style={{
                        fontSize: '20px',
                        color: '#b8860b'
                    }}>
                        Our Mission
                    </h3>
                    <p>
                        Our mission is to bring timeless elegance and unparalleled craftsmanship to our customers by 
                        offering premium gold jewellery. We aim to redefine trust and innovation in the jewellery 
                        industry while ensuring every customer finds their perfect piece.
                    </p>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <h3 style={{
                        fontSize: '20px',
                        color: '#b8860b'
                    }}>
                        Our Values
                    </h3>
                    <p>
                        At BNK Gold, our values revolve around quality, transparency, and customer satisfaction. 
                        Integrity, innovation, and an unyielding commitment to excellence are the cornerstones of our business.
                    </p>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <h3 style={{
                        fontSize: '20px',
                        color: '#b8860b'
                    }}>
                        Our Products
                    </h3>
                    <ul style={{
                        marginTop: '10px',
                        listStyleType: 'square',
                        paddingLeft: '20px'
                    }}>
                        <li><strong>Mangal Sutras:</strong> Elegant and traditional designs for every occasion.</li>
                        <li><strong>Yellow Gold Jewellery:</strong> Timeless pieces crafted to perfection.</li>
                        <li><strong>Rose Gold Jewellery:</strong> Modern and chic styles for today’s fashionista.</li>
                        <li><strong>Italian Jewellery:</strong> Exquisite designs inspired by European artistry.</li>
                        <li><strong>Antique Jewellery:</strong> Vintage-inspired creations with a timeless appeal.</li>
                    </ul>
                </div>
            </div>
        </div>



    )
}

export default HomeComp
