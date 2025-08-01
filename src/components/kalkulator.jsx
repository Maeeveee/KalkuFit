import React, { useState } from 'react';


export default function Kalkulator({ onHitung }) {
    const [jenisKelamin, setJenisKelamin] = useState('Laki-laki');
    const [usia, setUsia] = useState('');
    const [berat, setBerat] = useState('');
    const [tinggi, setTinggi] = useState('');
    const [aktivitas, setAktivitas] = useState('sedentari');

    const handleSubmit = (e) => {
        e.preventDefault();

        const aktivitasMultiplier = {
            sedentari: 1.2,
            ringan: 1.375,
            sedang: 1.55,
            berat: 1.725,
            sangat_berat: 1.9,
        };

        let bmr;
        if (jenisKelamin === 'Laki-laki') {
            bmr = 10 * berat + 6.25 * tinggi - 5 * usia + 5;
        } else {
            bmr = 10 * berat + 6.25 * tinggi - 5 * usia - 161;
        }

        const totalKalori = bmr * aktivitasMultiplier[aktivitas];

        onHitung(Math.round(totalKalori));
    };

    return (
        <section className="bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] flex items-center justify-center">
            <div className="max-w-2xl bg-white border border-gray-200 rounded-lg shadow-sm p-5 dark:bg-gray-800 dark:border-gray-700">
                <h2 className="text-6xl font-bold mb-4 text-center text-white">Kalkulator Kalori</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <select value={jenisKelamin} onChange={(e) => setJenisKelamin(e.target.value)} className="w-full p-2 rounded bg-gray-700 text-white">
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                    <input type="number" placeholder="Usia (tahun)" value={usia} onChange={(e) => setUsia(e.target.value)} className="w-full p-2 rounded bg-gray-700 text-white" required />
                    <input type="number" placeholder="Berat Badan (kg)" value={berat} onChange={(e) => setBerat(e.target.value)} className="w-full p-2 rounded bg-gray-700 text-white" required />
                    <input type="number" placeholder="Tinggi Badan (cm)" value={tinggi} onChange={(e) => setTinggi(e.target.value)} className="w-full p-2 rounded bg-gray-700 text-white" required />
                    <select value={aktivitas} onChange={(e) => setAktivitas(e.target.value)} className="w-full p-2 rounded bg-gray-700 text-white">
                        <option value="sedentari">Sedentari (minim aktivitas)</option>
                        <option value="ringan">Aktivitas ringan</option>
                        <option value="sedang">Aktivitas sedang</option>
                        <option value="berat">Aktivitas berat</option>
                        <option value="sangat_berat">Aktivitas sangat berat</option>
                    </select>
                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Hitung Kalori
                    </button>
                </form>
            </div>
        </section>
    );
}
