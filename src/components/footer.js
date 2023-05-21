import React from 'react';

export default function Nav() {
    const linkStyle = { border: '1px black', padding: '5px' };

    return (
        <nav className="main-header-menu">
            <section
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}
            >
                <div style={linkStyle}>
                    <a href="#">Footer content</a>
                </div>
            </section>
        </nav>
    );
}
