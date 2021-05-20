import * as React from "react";
import { useQuery } from "react-query";
import { apiClient } from "../utils";
import { Layout } from "../komponen/layout";
import { KeteranganKurs } from "../komponen/keterangan-kurs";

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
                <h1 className="heading-judul">
                    Konversi Rupiah{" "}
                    <span className="konversi-stabilo">ke Bitcoin</span>
                </h1>
                <KeteranganKurs />

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
                        <span className="hasil-konversi">
                            {nominalBTC.data || 0}
                        </span>
                    </div>
                </form>
            </main>
        </Layout>
    );
}
