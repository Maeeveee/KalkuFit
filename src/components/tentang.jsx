export default function Tentang() {
    return (
        <section className="lg:h-[100vh] flex items-center justify-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 bg-green-400 rounded-3xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 ">
                    <div className="text-information flex flex-col justify-center">
                        <h1 className="text-4xl font-extrabold tracking-tight leading-none text-white mb-4 sm:mb-2 sm:text-3xl lg:text-6xl">Mengenal KalkuFit</h1>
                        <p className="mb-4 text-lg font-normal text-justify text-gray-100 sm:text-sm lg:text-xl">
                            KalkuFit adalah platform kesehatan berbasis website yang membantu pengguna memantau asupan kalori harian mereka. Dengan fitur seperti kalkulator kalori, informasi gizi, dan tips kesehatan, KalkuFit memudahkan orang untuk menjaga pola makan seimbang dan mendorong gaya hidup sehat secara berkelanjutan.
                        </p>
                    </div>
                    <div className="image-information hidden lg:flex justify-center items-center">
                        <img src="/Tentang.jpg" className="rounded-2xl w-full sm:w-3/4" alt="Tentang KalkuFit" />
                    </div>
                </div>
            </div>
        </section>
    );
}
