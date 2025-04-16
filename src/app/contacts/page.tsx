import Image from "next/image";

export default function Contacts() {

    return (
        <>
            <div className="w-[88%] sm:w-[74%] md:w-[73%] lg:w-[65%] mx-auto mt-22 sm:mt-27 flex flex-col justify-center">
                <h1 className="text-xl sm:text-2xl mb-8">
                    We’re always happy to hear from you! Contact us in any convenient way — our boutique is open every day, and the VERA team will be happy to answer all your questions and help you choose the perfect piece of jewelry.
                </h1>
                <h1 className="text-3xl sm:text-3.5xl font-extrabold mb-6">Contacts</h1>

                <div className="flex flex-row items-center gap-4 mb-4">
                    <Image src='/address.png' alt='vera logo' width={50} height={50} priority />
                    <div>
                        <h2 className="text-2xl sm:text-2.5xl font-extrabold">Address</h2>
                        <h2 className="text-2xl sm:text-2.5xl font-medium">Moscow, Tverskaya St., 1</h2>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4 mb-4">
                    <Image src='/phone.png' alt='vera logo' width={50} height={50} priority />
                    <div>
                        <h2 className="text-2xl sm:text-2.5xl font-extrabold">Phone</h2>
                        <h2 className="text-2xl sm:text-2.5xl font-medium">+7 (999) 123-45-67</h2>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4 mb-4">
                    <Image src='/mail.png' alt='vera logo' width={50} height={50} priority />
                    <div>
                        <h2 className="text-2xl sm:text-2.5xl font-extrabold">Email</h2>
                        <h2 className="text-2xl sm:text-2.5xl font-medium">info@vera-jewelyy.ru</h2>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4 mb-4">
                    <Image src='/hours.png' alt='vera logo' width={50} height={50} priority />
                    <div>
                        <h2 className="text-2xl sm:text-2.5xl font-extrabold">Opening Hours</h2>
                        <h2 className="text-2xl sm:text-2.5xl font-medium">Mon–Sun: 10:00 AM – 10:00 PM</h2>
                    </div>
                </div>
                <div className="mt-10 mb-10">
                    <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Write to Us</h2>
                    <form className="flex flex-col gap-4">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="border border-gray-300 rounded-lg p-3 text-lg"
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="border border-gray-300 rounded-lg p-3 text-lg"
                        />
                        <textarea 
                            placeholder="Your Message" 
                            rows={5}
                            className="border border-gray-300 rounded-lg p-3 text-lg resize-none"
                        ></textarea>
                        <button 
                            type="submit"
                            className="bg-black text-white py-3 px-6 rounded-lg text-lg hover:bg-gray-800 transition"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}