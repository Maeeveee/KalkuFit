export default function Suggest({ hasil }) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm p-5 dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-center text-white">Hasil Kalori</h2>
            {hasil !== null ? (
                <>
                    <p className="text-white text-lg mb-2">Kebutuhan kalori harian Anda adalah:</p>
                    <p className="text-3xl font-bold text-green-400">{hasil} kalori</p>
                    <p className="mt-4 text-sm text-gray-300">Gunakan angka ini untuk menyesuaikan pola makan Anda agar sesuai dengan tujuan kesehatan Anda.</p>
                </>
            ) : (
                <p className="text-white text-center">Isi formulir untuk melihat hasil</p>
            )}
        </div>
    );
}
