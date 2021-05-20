import * as React from "react";
import { useQuery } from "react-query";

function apiClient(url) {
    return fetch(url).then(async respon => {
        const data = await respon.json();

        if (!respon.ok) {
            return Promise.reject(error => error);
        }

        return data;
    });
}

function persiapkanDataSource(dataAPI) {
    const MATA_UANG = {
        AUD: "Dollar Australia",
        EUR: "Euro Eropa",
        GBP: "Poundsterling",
        JPY: "Yen Jepang",
        USD: "Dollar Amerika"
    };

    return Object.keys(MATA_UANG).reduce(
        (nilai, kode) => [
            ...nilai,
            {
                key: kode,
                mataUang: MATA_UANG[kode],
                jual: `${dataAPI[kode].symbol}${dataAPI[kode].sell}`,
                beli: `${dataAPI[kode].symbol}${dataAPI[kode].buy}`
            }
        ],
        []
    );
}

export default function Monitor() {
    const kurs = useQuery(["kurs"], async () => {
        return await apiClient("https://blockchain.info/ticker");
    });

    return (
        <div className="screen">
            <header className="header">
                <nav className="navigasi">
                    <a>Depan</a> <a>BTC &rarr; IDR</a> <a>IDR &rarr; BTC</a>
                </nav>
            </header>

            <main className="main">
                <h1 className="heading-judul">Harga Bitcoin Hari Ini</h1>

                {!kurs.data ? (
                    <div className="tabel-kurs memuat">
                        Sedang mengambil data...
                    </div>
                ) : (
                    <table className="tabel-kurs">
                        <thead>
                            <tr>
                                <th className="kolom-mata-uang">Mata Uang</th>
                                <th className="kolom-harga">Beli</th>
                                <th className="kolom-harga">Jual</th>
                            </tr>
                        </thead>

                        <tbody>
                            {persiapkanDataSource(kurs.data).map(record => (
                                <tr key={record.key}>
                                    <td>{record.mataUang}</td>
                                    <td className="kolom-harga">
                                        {record.beli}
                                    </td>
                                    <td className="kolom-harga">
                                        {record.jual}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </main>
        </div>
    );
}
