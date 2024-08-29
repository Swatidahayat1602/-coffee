import React,{useEffect} from 'react'
const About = () => {
    useEffect(() => {
        document.title = "About - Coffee Shop";
      }, []);
        return (
            <>
                <div className="h-full w-screen font-serif bg-gradient-to-r bg-no-repeat bg-center relative top-0 from-yellow-900 to-yellow-600">
                <div className="bg-yellow-900 absolute h-full w-screen top-0 opacity-65 "></div>
                <div className="flex justify-end items-center">
                </div>
                <div className="flex justify-end">
                    <div className="text-center relative z-50 text-white text-7xl m-36 right-44 font-semibold bottom-2/3">About</div>
                    <img className="relative z-50 bottom-9 h-96" src="Spill.png" alt="" /></div>
                <div className="flex">
                    <img className="relative z-50 size-96 bottom-32 right-20" src="cof.png" alt="" />
                    </div>
                    <h1 className="text-white m-10 relative bottom-64 left-52 text-2xl">Tailored-Made Coffee</h1>
                    <h1 className="text-white m-10 relative bottom-64 left-52 text-7xl w-2/3">We offer a unique coffee house environment unlike any other in N.Y.</h1>
                    <div className="border-1 border-white w-3/4 left-52 relative bottom-64"></div>
                    <div className="flex text-white justify center items-center bottom-64 relative">
                        <div>
                            <h1 className="m-5 relative left-40 text-5xl w-2/3">We are excited to introduce our Coffee Shop magna aliqua. Ut enim ad minim veniam, quis nostrud.</h1>
                            <h1 className="m-5 relative left-40 text-xl">Tailored-Made Coffee</h1>
                        </div>
                        <div>
                            <h1 className="m-5 text-2xl relative z-50">The perfect place to enjoy your coffee</h1>
                            <p className="m-5 relative z-50">Consectetur adipisicing elit,homkmhjbbhhnmm jifjr jrji  jvijij ijvjeiv Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, incidunt. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <p className="m-5 relative z-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                            <p className="m-5  relative z-50">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

                        </div>
                    </div>
                    <div className="flex relative bottom-64">
                        <div>
                            <h1 className="text-5xl text-white w-2/3 text-balance relative left-40 m-5">Our coffee offering include a wide variety of lorem ipusm dolor.</h1>
                            <p className="text-xl text-white m-5 left-40 relative w-2/4 text-balance">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Consectetur adipisicing elit.</p>
                            <a className="text-2xl text-white relative left-40 m-10 hover:text-slate-300 " href="http://172.20.10.3:3000/about" >
                            &gt; Our Gallery
                        </a>
                        </div>
                        <img className="relative right-10" src="cof.png" alt="" />
                    </div>
                    <div className="grid grid-cols-3 m-48 gap-2 bottom-80 relative">
                        <img className="rounded-xl relative right-5" src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/about-01-free-img.jpg" alt="" />
                        <img className="row start-2 rounded-xl row-span-2" src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/about-02-free-img.jpg" alt="" />
                        <img className="rounded-xl" src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/about-03-free-img.jpg" alt="" />
                       <div className="grid grid-flow-col"> <img className="rounded-xl" src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/about-05-free-img.jpg" alt="" />
                        <img className="rounded-xl" src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/about-06-free-img.jpg" alt="" /></div>
                        <img className="rounded-xl col start-2" src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/about-04-free-img.jpg" alt="" />

                    </div>
                    <div className="border-1 border-white w-3/4 left-52 relative bottom-52"></div>
                <div className="flex text-white items-center justify-center relative bottom-40">
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
                <div className="border-1 border-white w-3/4 left-52 relative bottom-24"></div>
                <div className="text-white  text-center relative bottom-10">Copyright © 2024 Coffee Shop | Powered by Coffee Shop</div>
            </div>

                

            </>
        );
    }


export default About;