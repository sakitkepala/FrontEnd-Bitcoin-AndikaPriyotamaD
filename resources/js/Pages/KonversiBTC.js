import * as React from "react";
import { useQuery } from "react-query";
import { apiClient } from "../utils";

function konversiIDRKeUSD(nominalAwal) {
    return nominalAwal / 14000;
}

export default function KonversiBTC() {
    const refInputNominal = React.useRef(null);
    const [inputNominal, setInputNominal] = React.useState(0);
    const nominalDalamUSD = konversiIDRKeUSD(inputNominal);

    const konversi = useQuery(["btc-dari-usd", nominalDalamUSD], async () => {
        return await apiClient(
            `https://blockchain.info/tobtc?currency=USD&value=${nominalDalamUSD}`
        );
    });

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
                <h1 className="heading-judul">Konversi Rupiah ke Bitcoin</h1>
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
                                setInputNominal(
                                    Number(refInputNominal.current.value)
                                );
                            }}
                        />
                        &#61; BTC
                        <span>{konversi.data || 0}</span>
                    </div>
                </form>
            </main>
        </div>
    );
}
