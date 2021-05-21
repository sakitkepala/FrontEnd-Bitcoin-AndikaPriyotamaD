import * as React from "react";
import { VscLoading } from "react-icons/vsc";
import { formatKurs } from "../utils";

function DisplayHasilKonversi({ kurs, value, isLoading }) {
    const [valuePrevious, setValuePrevious] = React.useState(0);

    React.useEffect(() => {
        if (isLoading || value === valuePrevious) {
            return;
        }
        setValuePrevious(value);
    }, [isLoading, value, valuePrevious]);

    return (
        <div className="hasil-konversi">
            {isLoading && (
                <span className="loading-animasi">
                    <VscLoading />
                </span>
            )}

            <span className="hasil-konversi-angka">
                {formatKurs(isLoading ? valuePrevious : value, kurs)}
            </span>
        </div>
    );
}

function KonverterBitcoin({
    dari: kursAwal,
    ke: kursHasil,
    hasil,
    input,
    onChangeInput,
    isLoading
}) {
    if (!kursAwal || !kursHasil) {
        throw new Error("Mata uangnya belum diset.");
    }

    const refInputNominal = React.useRef(null);

    return (
        <div className="form-konversi">
            <div className="input-konversi">
                {kursAwal}
                <input
                    className="input-nominal"
                    ref={refInputNominal}
                    type="number"
                    value={input}
                    onChange={() => {
                        onChangeInput(Number(refInputNominal.current.value));
                    }}
                />
            </div>

            <div className="sama-dengan">&#61;</div>

            <DisplayHasilKonversi
                kurs={kursHasil}
                value={hasil}
                isLoading={isLoading}
            />
        </div>
    );
}

export { KonverterBitcoin };
