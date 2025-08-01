import React, { useState } from 'react';
import Kalkulator from './kalkulator';
import Suggest from './suggest';

export default function Hasil() {
    const [hasilKalori, setHasilKalori] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleHitung = (hasil) => {
        setHasilKalori(hasil);
        setShowModal(true);
    };

    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-start gap-8 p-4 sm:flex-row sm:gap-4 md:gap-8 lg:gap-16 xl:gap-24">
                <Kalkulator onHitung={handleHitung} />
            </div>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 ">
                    <div className="relative">
                        <Suggest hasil={hasilKalori} />
                        <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center">&times;</button>
                    </div>
                </div>
            )}
        </>
    );
}
