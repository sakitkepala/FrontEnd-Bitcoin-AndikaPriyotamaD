import * as React from "react";

const MATA_UANG = ["AUD", "EUR", "GBP", "JPY", "USD"];

function filterDataKurs(data, daftarMataUang) {
    return daftarMataUang.reduce(
        (nilai, simbol) => ({ ...nilai, [simbol]: data[simbol] }),
        {}
    );
}

export default function Monitor() {
    const [dataKurs, setDataKurs] = React.useState(null);

    React.useEffect(() => {
        fetch("https://blockchain.info/ticker").then(async respon => {
            const data = await respon.json();

            if (!respon.ok) {
                return Promise.reject(error => error);
            }

            const listHarga = filterDataKurs(data, MATA_UANG);
            setDataKurs(listHarga);
        });
    }, []);

    return (
        <div>
            {dataKurs &&
                `Jual: ${dataKurs.USD.sell}, Beli: ${dataKurs.USD.buy}`}
        </div>
    );
}
