import * as React from "react";
import { formatKurs } from "../utils";

const KeteranganKurs = () => (
    <p className="deskripsi">
        Kurs {formatKurs(1, "USD")} &#61; {formatKurs(14000, "IDR")}
    </p>
);

export { KeteranganKurs };
