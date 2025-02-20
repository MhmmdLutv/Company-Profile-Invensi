import { useState } from "react";
import axios from "axios";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
    
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/send-email`, formData);
            alert(response.data.message);
        } catch (error) {
            alert("Gagal mengirim email");
        }
    
        setLoading(false); 
    };

    return (
        <section className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Bagian Alamat */}
                <div className="space-y-6">
                    
                    <div className="mb-6 mt-5">
                        <h3 className="text-lg font-semibold">WorkShop Address</h3>
                        <p className="mt-2 text-gray-300 flex items-start">
                            <i className="ri-map-pin-line text-xl text-blue-500 mr-2"></i>
                            Jl. Muchtar Raya no 10. Bojongsari, Sawangan Depok<br />
                            (Depan Pemadam Kebakaran Bojongsari, samping BSSN)
                        </p>
                        <p className="mt-5 text-gray-300 flex items-start">
                            <i className="ri-phone-line text-xl text-blue-500 mr-2"></i>
                            (021) 798 9671
                        </p>
                    </div>

                    {/* Tambahkan Google Maps */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            title="Lokasi Kantor"
                            width="100%"
                            height="300"
                            className="rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2731182955895!2d106.77000000000001!3d-6.235000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnMDguMCJTIDEwNsKwNDYnMjAuMCJF!5e0!3m2!1sen!2sid!4v1708192512723"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="py-14">
                        <h3 className="text-lg font-semibold">Follow Us</h3>
                        <div className="flex items-center gap-4 mt-3">
                            <i className="ri-facebook-circle-fill text-2xl text-blue-500 hover:text-blue-700 transition"></i>
                            <a href="https://www.linkedin.com/company/pt-invensi-digital-nusantara/posts/?feedView=all">
                                <i className="ri-linkedin-box-fill text-2xl text-blue-700 hover:text-blue-900 transition"></i>
                            </a>
                            <a href="https://www.instagram.com/invensidigitalnusantara/?hl=en">
                                <i className="ri-instagram-line text-2xl text-pink-500 hover:text-pink-700 transition"></i>
                            </a>
                            <i className="ri-twitter-fill text-2xl text-blue-400 hover:text-blue-600 transition"></i>
                            <i className="ri-youtube-fill text-2xl text-red-600 hover:text-red-800 transition"></i>
                            <i className="ri-tiktok-fill text-2xl text-gray-200 hover:text-white transition"></i>
                        </div>
                    </div>
                </div>


                {/* Bagian Form */}
                <div className="bg-slate-800 p-8 rounded-lg shadow-xl">
                    <h3 className="text-white text-xl font-semibold mb-6">
                        Isi form berikut! Tim kami segera menghubungi Anda.
                    </h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Nama *" className="w-full p-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-300 text-black" required onChange={handleChange} />
                        <input type="email" name="email" placeholder="Email *" className="w-full p-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-300 text-black" required onChange={handleChange} />
                        <input type="text" name="phone" placeholder="No Telp (WhatsApp) *" className="w-full p-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-300 text-black" required onChange={handleChange} />
                        <input type="text" name="company" placeholder="Nama Perusahaan *" className="w-full p-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-300 text-black" required onChange={handleChange} />
                        <textarea name="message" placeholder="Jelaskan kebutuhan Anda *" className="w-full p-4 h-32 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-300 text-black" required onChange={handleChange} />
                        <button type="submit" className="w-full bg-sky-600 text-white py-3 rounded-md text-lg font-bold hover:bg-sky-700 transition-all" disabled={loading}>
                            {loading ? "Mengirim..." : "Kirim Pesan"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
