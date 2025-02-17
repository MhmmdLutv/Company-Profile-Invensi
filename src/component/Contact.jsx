export const Contact = () => {
    return (
        <section className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Kiri: Deskripsi */}
                <div className="space-y-6 animate__animated animate__fadeIn animate__delay-1s">
                    <h2 className="text-3xl font-bold text-yellow-400">
                         Invensi <span className="text-white">membantu Anda:</span>
                    </h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 animate__animated animate__fadeIn animate__delay-2s">
                            <span className="text-green-500 text-2xl">✔</span>
                            <span dangerouslySetInnerHTML={{ __html: "Mengurangi <b>Biaya Operasional</b> Secara Signifikan" }} />
                        </li>
                        <li className="flex items-start gap-3 animate__animated animate__fadeIn animate__delay-3s">
                            <span className="text-green-500 text-2xl">✔</span>
                            <span dangerouslySetInnerHTML={{ __html: "Meningkatkan <b>Efisiensi Kerja</b> dan Produktivitas Tim" }} />
                        </li>
                        <li className="flex items-start gap-3 animate__animated animate__fadeIn animate__delay-4s">
                            <span className="text-green-500 text-2xl">✔</span>
                            <span dangerouslySetInnerHTML={{ __html: "Menawarkan <b>Solusi Teknologi</b> yang Tepat untuk Setiap Kebutuhan Bisnis Anda" }} />
                        </li>
                        <li className="flex items-start gap-3 animate__animated animate__fadeIn animate__delay-5s">
                            <span className="text-green-500 text-2xl">✔</span>
                            <span dangerouslySetInnerHTML={{ __html: "Memberikan <b>Solusi IT</b> dengan Tim Profesional dan Pengalaman" }} />
                        </li>
                        <li className="flex items-start gap-3 animate__animated animate__fadeIn animate__delay-6s">
                            <span className="text-green-500 text-2xl">✔</span>
                            <span dangerouslySetInnerHTML={{ __html: "Menyediakan <b>Teknologi Terbaru</b> untuk Mengoptimalkan Bisnis Anda" }} />
                        </li>
                    </ul>
                </div>

                {/* Kanan: Form */}
                <div className="bg-slate-800 p-8 rounded-lg shadow-xl animate__animated animate__fadeIn animate__delay-1s">
                    <h3 className="text-white text-xl font-semibold mb-6">
                        Isi form berikut! Tim kami segera menghubungi Anda.
                    </h3>
                    <form className="space-y-6">
                        <input
                            type="text"
                            placeholder="Nama *"
                            className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email *"
                            className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
                            required
                        />
                        <input
                            type="text"
                            placeholder="No Telp (WhatsApp) *"
                            className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Nama Perusahaan *"
                            className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
                            required
                        />
                        <textarea
                            placeholder="Jelaskan kebutuhan Anda *"
                            className="w-full p-4 h-32 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
                            required
                        />
                        <button type="submit" className="w-full bg-sky-600 text-white py-3 rounded-md text-lg font-bold hover:bg-sky-700 transition-all duration-500 ease-in-out transform hover:scale-105">
                            Kirim Pesan
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
