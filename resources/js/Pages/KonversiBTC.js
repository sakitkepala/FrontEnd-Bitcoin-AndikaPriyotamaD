import * as React from "react";
import { useQuery } from "react-query";
import { apiClient } from "../utils";
import { Layout } from "../komponen/layout";

export default function KonversiBTC() {
    const refInputNominal = React.useRef(null);
    const [inputIDR, setInputIDR] = React.useState(0);

    const nominalUSD = inputIDR / 14000;
    const nominalBTC = useQuery(["btc-dari-usd", nominalUSD], async () => {
        return await apiClient(
            `https://blockchain.info/tobtc?currency=USD&value=${nominalUSD}`
        );
    });

    return (
        <Layout>
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
                            value={inputIDR}
                            onChange={() => {
                                setInputIDR(
                                    Number(refInputNominal.current.value)
                                );
                            }}
                        />
                        &#61; BTC
                        <span>{nominalBTC.data || 0}</span>
                    </div>
                </form>
            </main>
        </Layout>
    );
}
