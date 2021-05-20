function apiClient(url) {
    return fetch(url).then(async respon => {
        const data = await respon.json();

        if (!respon.ok) {
            return Promise.reject(error => error);
        }

        return data;
    });
}

const formatKurs = (angka, kurs) => {
    if (!kurs) {
        console.info(
            "Set dulu parameter `kurs`-nya biar eksplisit dan hasilnya lebih ketebak."
        );
    }
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: kurs || "IDR",
        currencyDisplay: "code",
        minimumFractionDigits: 2,
        maximumFractionDigits: kurs === "BTC" ? 10 : 2
    }).format(angka);
};

export { apiClient, formatKurs };
