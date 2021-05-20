import * as React from "react";
import { useQuery } from "react-query";
import { apiClient } from "../utils";
import { Layout } from "../komponen/layout";

export default function KonversiIDR() {
    const refInputNominal = React.useRef(null);
    const [inputBTC, setInputBTC] = React.useState(0);

    const perUSD = useQuery(["btc-per-usd"], async () => {
        return await apiClient(
            "https://blockchain.info/tobtc?currency=USD&value=1"
        );
    });

    function hitungNominalIDR(perUSD) {
        return (inputBTC / perUSD) * 14000;
    }

    return (
        <Layout>
            <main className="main">
                <h1 className="heading-judul">Konversi Bitcoin ke Rupiah</h1>
                <p>Kurs USD1 &#61; IDR14,000.00</p>

                <form className="form-konversi">
                    <div className="input-konversi">
                        BTC
                        <input
                            className="input-nominal"
                            ref={refInputNominal}
                            type="number"
                            value={inputBTC}
                            onChange={() => {
                                setInputBTC(
                                    Number(refInputNominal.current.value)
                                );
                            }}
                        />
                        &#61; IDR
                        <span>
                            {perUSD.data ? hitungNominalIDR(perUSD.data) : 0}
                        </span>
                    </div>
                </form>
            </main>
        </Layout>
    );
}
