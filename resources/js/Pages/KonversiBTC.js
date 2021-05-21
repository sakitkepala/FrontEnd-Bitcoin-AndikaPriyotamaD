import * as React from "react";
import { useQuery } from "react-query";
import { apiClient } from "../utils";
import { Layout } from "../komponen/layout";
import { KeteranganKurs } from "../komponen/keterangan-kurs";
import { KonverterBitcoin } from "../komponen/form-konversi";

export default function KonversiBTC() {
    const [inputIDR, setInputIDR] = React.useState(14000);

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

                <KonverterBitcoin
                    dari="IDR"
                    ke="BTC"
                    input={inputIDR}
                    hasil={nominalBTC.data || 0}
                    onChangeInput={input => {
                        setInputIDR(input <= 0 ? 0 : input);
                    }}
                    isLoading={nominalBTC.isFetching}
                />
            </main>
        </Layout>
    );
}
