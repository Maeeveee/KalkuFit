export default function Tentang() {
    return (
        <section className="bg-green-400 rounded-4xl m-4 sm:m-2">
            <div className="py-8 px-4 mx-auto md:max-w-screen-xl sm:max-w-screen-sm text-left lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="text-information flex flex-col justify-center items-between">
                        <h1 className="text-4xl font-extrabold tracking-tight leading-none text-white mb-4 sm:mb-2 sm:text-3xl lg:text-6xl text-left">Mengenal KalkuFit</h1>
                        <p className="mb-4 text-lg font-normal text-justify text-gray-100 sm:text-sm lg:text-xl">
                            KalkuFit adalah platform kesehatan berbasis website yang membantu pengguna memantau asupan kalori harian mereka. Dengan fitur seperti kalkulator kalori, informasi gizi, dan tips kesehatan, KalkuFit memudahkan orang untuk menjaga pola makan seimbang dan mendorong gaya hidup sehat secara berkelanjutan.
                        </p>
                    </div>
                    <div className="image-information hidden lg:flex justify-end">
                        <img src="/Tentang.jpg" className="rounded-2xl w-full sm:w-3/4" alt="Tentang KalkuFit" />
                    </div>
                </div>
            </div>
        </section>
    );
}
