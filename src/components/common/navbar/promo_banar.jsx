import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className='w-100 solde d-flex align-items-center justify-content-around '>
                <p className='text-center p-0 m-0'>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</p>
                <p className="p-0 m-0">
                    Until the end of the sale: <b>47</b> days <b>06</b> hours <b>55</b> minutes <b>51</b> sec.
                </p>
            </div>
        </>
    );
};

const styles = {
    nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        background: '#222',
        color: '#fff',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '1.5rem',
        margin: 0,
        padding: 0,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1rem',
    },
    cart: {
        fontSize: '1rem',
    },
};

export default Navbar;