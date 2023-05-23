import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FaGithub, FaStackOverflow, FaLinkedin } from 'react-icons/fa';


export default function Nav() {
    return (
        <div style={{display: 'flex', flexDirection: 'column' }}>
            <footer className="main-header-menu">
                <section
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'space-around',
                    }}
                >
                    <div>
                        <a href="https://github.com/whitneywishart" target='blank' style={{ marginRight: '1rem' }}>
                            <FaGithub size={20} />
                        </a>
                        <a href="https://stackoverflow.com/users/21943870/wew" target='blank' style={{ marginRight: '1rem' }}>
                            <FaStackOverflow size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/whitney-wishart/" target='blank'>
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </section>
            </footer>

        </div>
    );
}
