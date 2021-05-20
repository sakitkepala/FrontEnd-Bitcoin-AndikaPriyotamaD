import * as React from "react";
import { VscLoading } from "react-icons/vsc";
import { formatKurs } from "../utils";

function FormKonversi({
    ke,
    inputNominal,
    onChangeInput,
    displayHasil,
    isLoading
}) {
    if (!ke) {
        throw new Error("Mata uangnya belum diset.");
    }

    const refInputNominal = React.useRef(null);

    return (
        <div className="form-konversi">
            <div className="input-konversi">
                {ke !== "IDR" ? "IDR" : "BTC"}
                <input
                    className="input-nominal"
                    ref={refInputNominal}
                    type="number"
                    value={inputNominal}
                    onChange={() => {
                        onChangeInput(Number(refInputNominal.current.value));
                    }}
                />
            </div>

            <div className="sama-dengan">&#61;</div>

            <div className="hasil-konversi">
                {isLoading && (
                    <span className="loading-animasi">
                        <VscLoading />
                    </span>
                )}

                <span className="hasil-konversi-angka">
                    {formatKurs(displayHasil, ke)}
                </span>
            </div>
        </div>
    );
}

export { FormKonversi };
