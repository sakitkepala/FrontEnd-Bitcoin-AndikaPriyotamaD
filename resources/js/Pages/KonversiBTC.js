import * as React from "react";
import { useQuery } from "react-query";
import { apiClient } from "../utils";
import { Layout } from "../komponen/layout";
import { KeteranganKurs } from "../komponen/keterangan-kurs";
import { FormKonversi } from "../komponen/form-konversi";

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

                <FormKonversi
                    ke="BTC"
                    inputNominal={inputIDR}
                    onChangeInput={input => setInputIDR(input)}
                    displayHasil={nominalBTC.data || 0}
                    isLoading={nominalBTC.isLoading}
                />
            </main>
        </Layout>
    );
}
