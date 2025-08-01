import React, { useState } from 'react';
import Kalkulator from './kalkulator';
import Suggest from './suggest';

export default function Hasil() {
    const [hasilKalori, setHasilKalori] = useState(null);

    return (
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 p-4 sm:flex-row sm:gap-4 md:gap-8 lg:gap-16 xl:gap-24">
            <Kalkulator onHitung={setHasilKalori} />
            <Suggest hasil={hasilKalori} />
        </div>
    );
}
