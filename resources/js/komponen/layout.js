import * as React from "react";

function Layout({ children }) {
    return (
        <div className="screen">
            <header className="header">
                <nav className="navigasi">
                    <div className="item-link">
                        <a href="/">Depan</a>
                    </div>
                    <div className="item-link">
                        <a href="/btc-ke-idr">BTC&rarr;IDR</a>
                    </div>
                    <div className="item-link">
                        <a href="/idr-ke-btc">IDR&rarr;BTC</a>
                    </div>
                </nav>
            </header>

            {children}
        </div>
    );
}

export { Layout };
