import React from 'react';
export default () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="c-site-footer u-pv++">
            <div className="o-wrap">
                <p className="u-type-minion-bold">{`© Copyright ${year} Mintuz.com`}</p>
            </div>
        </footer>
    );
}