import * as React from "react";
import { useQuery } from "react-query";

function filterKurs(data, daftarMataUang) {
    return daftarMataUang.reduce(
        (nilai, simbol) => ({ ...nilai, [simbol]: data[simbol] }),
        {}
    );
}

function apiClient(url) {
    return fetch(url).then(async respon => {
        const data = await respon.json();

        if (!respon.ok) {
            return Promise.reject(error => error);
        }

        return filterKurs(data, ["AUD", "EUR", "GBP", "JPY", "USD"]);
    });
}

export default function Monitor() {
    const kurs = useQuery(["kurs"], async () => {
        return await apiClient("https://blockchain.info/ticker");
    });

    console.log(kurs);

    return (
        <div>
            {kurs.data &&
                `Jual: ${kurs.data.USD.sell}, Beli: ${kurs.data.USD.buy}`}
        </div>
    );
}