import * as React from "react";

function Layout({ children }) {
    return (
        <div className="screen">
            <header className="header">
                <nav className="navigasi">
                    <a href="/">Depan</a>
                    <a href="/btc-ke-idr">BTC&rarr;IDR</a>
                    <a href="/idr-ke-btc">IDR&rarr;BTC</a>
                </nav>
            </header>

            {children}
        </div>
    );
}

export { Layout };
