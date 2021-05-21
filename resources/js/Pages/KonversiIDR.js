import * as React from "react";
import { useQuery, useQueryClient } from "react-query";
import { apiClient } from "../utils";
import { Layout } from "../komponen/layout";
import { KeteranganKurs } from "../komponen/keterangan-kurs";
import { KonverterBitcoin } from "../komponen/form-konversi";

export default function KonversiIDR() {
    const queryClient = useQueryClient();

    const [inputBTC, setInputBTC] = React.useState(1);

    const perUSD = useQuery(["btc-per-usd"], async () => {
        return await apiClient(
            "https://blockchain.info/tobtc?currency=USD&value=1"
        );
    });

    React.useEffect(() => {
        queryClient.invalidateQueries("btc-per-usd");
    }, [inputBTC]);

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

                <KonverterBitcoin
                    dari="BTC"
                    ke="IDR"
                    input={inputBTC}
                    hasil={perUSD.data ? hitungNominalIDR(perUSD.data) : 0}
                    onChangeInput={input => {
                        setInputBTC(input <= 0 ? 0 : input);
                    }}
                    isLoading={perUSD.isFetching}
                />
            </main>
        </Layout>
    );
}
