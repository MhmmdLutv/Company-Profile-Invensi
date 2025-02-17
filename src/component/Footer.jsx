import Image from '../assets/images/card1.png'


export const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section - Office Address & Social Media */}
        <div>
          {/* Office Address */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Office Address</h3>
            <p className="mt-2 text-gray-300 flex items-start">
              <i className="ri-map-pin-line text-xl text-blue-500 mr-2"></i>
              Jl. Muchtar Raya no 10. Bojongsari, Sawangan Depok<br></br>
              (Depan Pemadam Kebakaran Bojongsari, samping BSSN)
            </p>
          </div>

          {/* Social Media */}
          <div className="py-3">
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

        {/* Right Section - Opening Hours & Logo */}
        <div className="flex grid-cols-1 justify-between">
          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold">
              <a href="#" className="text-blue-400 hover:underline">Opening Hours</a>
            </h3>
            <p className="text-gray-300 mt-2">Monday - Friday</p>
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-flex items-center mt-2">
              <i className="ri-time-line mr-2"></i> 08:00 - 17:00 WIB
            </div>
          </div>

          {/* Company Logo (Opsional, bisa diganti dengan elemen lain jika tidak ada logo) */}
          <div className="mt-6 md:mt-0 flex justify-center md:justify-end">
            <img src={Image} alt="Company Logo" className="h-16" />
          </div>
        </div>
      </div>
    </div>
  );
};
