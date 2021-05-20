import * as React from "react";
import { useQuery } from "react-query";
import { apiClient } from "../utils";
import { Layout } from "../komponen/layout";
import { KeteranganKurs } from "../komponen/keterangan-kurs";
import { FormKonversi } from "../komponen/form-konversi";

export default function KonversiIDR() {
    const [inputBTC, setInputBTC] = React.useState(1);

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
                <h1 className="heading-judul">
                    Konversi Bitcoin{" "}
                    <span className="konversi-stabilo">ke Rupiah</span>
                </h1>
                <KeteranganKurs />

                <FormKonversi
                    ke="IDR"
                    inputNominal={inputBTC}
                    onChangeInput={input => setInputBTC(input)}
                    displayHasil={
                        perUSD.data ? hitungNominalIDR(perUSD.data) : 0
                    }
                    isLoading={perUSD.isLoading}
                />
            </main>
        </Layout>
    );
}
