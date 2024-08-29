import React,{useEffect} from 'react'
const Contact = () => {
    useEffect(() => {
        document.title = "Contact - Coffee Shop";
      }, []);
        return (
            <div>
            <div className="w-screen font-serif bg-gradient-to-r bg-no-repeat bg-center relative from-yellow-900 to-yellow-600">
            <div className="bg-yellow-900 absolute h-full w-screen top-0 opacity-65 "></div>
            <div className="flex justify-end items-center">
                </div>
                <div className="flex justify-around">
                    <img className="relative z-50 size-96 bottom-32 right-28 top-64 " src="cof.png" alt="" />
                    <div className="text-center relative z-50 text-white right-6 text-7xl m-32 font-semibold">Contact</div>
                    <img className="relative z-50 bottom-9 h-96 left-11  " src="Spill.png" alt="" /></div>
                    <div className="flex justify-center">
                        <div className="m-10 relative left-24 bottom-10 text-white">
                            <h1 className="text-5xl m-5 font-semibold">Get in Touch</h1>
                            <p className="text-balance m-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
                            <div className="m-5">
                                <div className="flex items-center"><img className="size-8 m-1 rounded-lg" src="tele.png" alt="" /><h1 className="relative left-5">929-242-6686</h1></div>
                                <div className="flex items-center"><img className="size-8 m-1 rounded-lg" src="mes.png" alt="" /><h1 className="relative left-5">contact@info.com </h1></div>
                                <div className="flex items-center"><img className="size-8 m-1 rounded-lg" src="loc.png" alt="" /><h1 className="relative left-5">123 Fifth Avenue, New York, NY 10160 </h1></div>
                            </div>
                        </div>
                        <div className="m-10">
                            <div className="flex gap-3">
                                <input type="text" id="text" className="w-40 h-10 rounded-sm relative z-50" placeholder="First Name" />
                                <input type="text" className="w-52 h-10 rounded-sm relative z-50" placeholder="Last Name" />
                            </div>
                            <div className="flex-col">
                                <div><input type="email" className="w-96 rounded-sm h-10 relative top-5" placeholder="Email" /></div>
                                <div><input type="text" className="w-96 rounded-sm h-32 relative top-10" placeholder="Your Message" /></div>
                                <button className="w-80 h-10 top-16 bg-white rounded-sm relative border-2">Send Message</button>
                            </div>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7450.626467236234!2d-0.12724857406948542!3d51.50445259685104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sin!4v1720078202748!5m2!1sen!2sin"
                        width={1150}
                        height={450}
                        className="relative left-40 bottom-20"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="border-1 border-white w-3/4 left-52 relative bottom-10"></div>
                <div className="flex text-white items-center justify-center relative bottom-10">
                    <div className="relative left-40">
                        <h1 className="m-3 text-2xl">About Us</h1>
                        <p className="w-1/2 m-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consectetur cum voluptate exercitationem, eum repellendus.</p>
                        <div className="flex gap-3 m-3">
                            <img className="relative z-50 size-8" src="fb.png" alt="" />
                            <img className="relative z-50 size-8" src="tw.png" alt="" />
                            <img className="relative z-50 size-8" src="yt.png" alt="" />

                       </div>
                    </div>
                    <div className="relative right-52">
                        <h1 className="m-3 text-2xl ">Contact</h1>
                        <p className="m-3">13 Fifth Avenue, New York, NY 10160</p>
                        <p className="m-3">929-242-6868</p>
                        <p className="m-3">contact@info.com</p>
                    </div>
                    <div className="relative right-32">
                        <h1 className="m-3 text-2xl">Opening Hours</h1>
                        <p className="m-3">Mon - Fry - 8AM - 8PM</p>
                        <p className="m-3">Saturday - 8AM - 4PM</p>
                        <p className="m-3">Sunday - 8AM - 2PM</p>

                    </div>
                </div>
                <div className="border-1 border-white w-3/4 left-52 relative bottom-10"></div>
                <div className="text-white  text-center relative bottom-5">Copyright © 2024 Coffee Shop | Powered by Coffee Shop</div>
            </div>

                    



        
            </div>
        );
    }


export default Contact;