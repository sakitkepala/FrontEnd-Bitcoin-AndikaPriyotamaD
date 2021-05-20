import * as React from "react";

function hitungKonversi(nominalAwal) {
    const btcPerUsd = 0.0000251;
    return (nominalAwal / 14000) * btcPerUsd;
}

export default function KonversiIDR() {
    const [inputNominal, setInputNominal] = React.useState(0);
    const hasilKonversi = hitungKonversi(inputNominal);

    const refInputNominal = React.useRef(null);

    return (
        <div className="screen">
            <header className="header">
                <nav className="navigasi">
                    <a href="/">Depan</a>
                    <a href="/btc-ke-idr">BTC&rarr;IDR</a>
                    <a href="/idr-ke-btc">IDR&rarr;BTC</a>
                </nav>
            </header>

            <main className="main">
                <h1 className="heading-judul">Konversi Bitcoin ke Rupiah</h1>
                <p>Kurs USD1 &#61; IDR14,000.00</p>

                <form className="form-konversi">
                    <div className="input-konversi">
                        IDR
                        <input
                            className="input-nominal"
                            ref={refInputNominal}
                            type="number"
                            value={inputNominal}
                            onChange={() => {
                                setInputNominal(refInputNominal.current.value);
                            }}
                        />
                        &#61; BTC
                        <span>{hasilKonversi}</span>
                    </div>
                </form>
            </main>
        </div>
    );
}
