import React,{useEffect} from 'react'
const First = () => {
    useEffect(() => {
        document.title = "Home - Coffee Shop";
      }, []);
    const items = [{ image: 'https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-01-free-img.png', text1: '$ 4.20', text2: 'Cappuccino', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.', buttonLabel: 'Get Delivery' },
    { image: 'https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-02-free-img.png', text1: '$ 3.15', text2: 'Cafe Latte', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.', buttonLabel: 'Get Delivery' },
    { image: 'https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-03-free-img.png', text1: '$ 2.75', text2: 'Dark Coffee', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.', buttonLabel: 'Get Delivery' }];
    const colors = ['hover:bg-gradient-to-br from-teal-950 to-yellow-300 to bg-gradient-to-tl from-teal-950 to-yellow-300', 'hover:bg-gradient-to-br from-red-950 to-yellow-600 to bg-gradient-to-tl from-red-950 to-yellow-600 ', 'hover:bg-gradient-to-br from-slate-950 to-slate-600 to bg-gradient-to-tl from-slate-950 to-slate-600'];
    return (
        <div>
            <div className="w-screen font-serif bg-gradient-to-r bg-no-repeat bg-center relative from-yellow-900 to-yellow-600">
                <div className="flex justify-end items-center">
                    <img className="h-screen w-5/12 relative bottom-52" src="backcoff.jpg" alt="" />
                </div>
                <div className="bg-yellow-900 absolute h-full w-screen top-0 opacity-65 ">
                    <div className=" left-44 top-24 relative m-auto">
                        <h1 className="text-white text-4xl font-semibold">Welcome!</h1>
                        <h1 className="text-white text-7xl font-bold w-1/3 text tracking-wide relative z-50">
                            We serve the richest coffee in this city!
                        </h1>
                        <h1 className="text-white relative top-20 text-2xl font-semibold w-1/4">
                            {" "}
                            ▷ High quality in every cup of coffee we serve...
                        </h1>
                    </div>
                </div>
                <img className="relative bottom-60 left-1/3 z-50" src="cof.png" alt="" />
                <div className="text-center text-white relative z-50 bottom-72">
                    <h1 className="text-7xl m-10">Drinks</h1>
                    <p className="w-1/3 left-1/3 relative">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                        repellat similique ad ipsam voluptatum assumenda?
                    </p>
                    <a
                        className="text-2xl m-10 hover:text-slate-300 relative top-10"
                        href="http://172.20.10.3:3000/"
    
                    >
                        &gt; All Drinks
                    </a>
                </div>

                <section>
                    <div className="flex relative z-50 gap-2 m-44 bottom-96">
                    {items.map((item, index) => (
                            <><div
                                key={item.id}
                                className={`flex items-center drop-shadow-2xl shadow-black p-4 rounded ${colors[index % colors.length]}`}
                            >
                                <div className="text-white text-center">
                                    <img className="h-72 p-3 hover:scale-110 transition-transform 0.6s" src={item.image} alt="" />
                                    <h1 className="text-4xl">{item.text1}</h1>
                                    <h1 className="text-5xl m-3 font-semibold">{item.text2}</h1>
                                    <p className="text-xl" >{item.content}</p>
                                    <button className="w-50 h-10 m-10 rounded-xl text-black transition duration-300 hover:bg-slate-300 to bg-slate-50" ><a href="http://172.20.10.3:3002/">{item.buttonLabel}</a> </button>
                                </div>
                            </div>
                            </>
                        ))}
                    </div>
                </section>
                <div className="flex bottom-96 relative left-40">
                    <div className="text-white relative z-50">
                        <h1 className="text-2xl m-10">From $2.50</h1>
                        <h1 className="text-7xl m-10">Croissants</h1>
                        <h1 className="m-10 text-3xl">Duis aute irure quasi</h1>
                        <p className="m-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, commodi!</p>
                        <a className="text-2xl m-10 hover:text-slate-300 " href="http://172.20.10.3:3000/" >
                            &gt; All Croissants
                        </a>
                    </div>
                    <img src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/croissant-01-free-img.png" alt="" />
                </div>
                <div className="bottom-96 left-52 flex transition duration-700 hover:bg-gradient-to-br from-amber-950 to-amber-800 to bg-gradient-to-tr from-amber-950 to-amber-800  shadow-xl shadow-black  justify-center items center h-3/4 w-3/4 rounded-2xl relative z-50 ">
                    <img src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/coffee-01-free-img.png" alt="" />
                    <div className="flex-col text-white">
                        <h1 className="text-2xl m-10">From $19.50</h1>
                        <h1 className="text-7xl m-10">Buy for Home</h1>
                        <h1 className="m-10 text-3xl">Duis aute irure quasi</h1>
                        <p className="m-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, commodi!</p>
                        <a className="text-2xl m-10 hover:text-slate-300 " href="http://172.20.10.3:3000/" >
                            &gt; All Coffee
                        </a>
                    </div>
                </div>
                <div className="text-white text-center relative bottom-80 ">
                    <h1 className="text-7xl m-10">About</h1>
                    <div className="border-1 m-5 relative left-1/3 border-white w-96" />
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, inventore repellat dolorum optio eligendi praesentium?</p>
                </div>
                <div className="flex justify-center relative bottom-72 text-white">
                    <div className="relative left-32">
                        <h1 className="m-5 text-2xl">Tailred-Made Coffee</h1>
                        <h1 className="text-7xl w-2/3 m-5">We offer a unique coffee house environment unlike any other in N.Y.</h1>
                    </div>
                    <div className="">
                        <h1 className="m-5 text-2xl">The perfect place to enjoy your coffee</h1>
                        <p className="m-5">Consectetur adipisicing elit,homkmhjbbhhnmm jifjr jrji  jvijij ijvjeiv Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, incidunt. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <p className="m-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        <p className="m-5">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <a className="text-2xl m-10 hover:text-slate-300 " href="http://172.20.10.3:3000/" >
                            &gt; Read More
                        </a>
                    </div>
                </div>
                <div className="bottom-72 text-white left-52 flex transition duration-700 hover:bg-gradient-to-br from-amber-950 to-amber-800 to bg-gradient-to-tr from-amber-950 to-amber-800  shadow-xl shadow-black justify-center h-3/4 w-3/4 rounded-2xl relative z-50 ">
                    <div className="relative left-40">
                        <h1 className="text-8xl m-10">Barista Party</h1>
                        <h1 className="m-10 text-3xl font-semibold">Every Friday & Saturday</h1>
                        <p className="m-10">Lorem ipsum dolor optio soluta ratione, consectetur molestiae laboriosam necessitatibus distinctio cumque autem odit! Ipsam eveniet, quae, ad beatae magnam at illo omnis delectus eaque vero laudantium?</p>
                        <a className="text-2xl m-10 hover:text-slate-300 " href="http://172.20.10.3:3000/" >
                            &gt; Make Reservation
                        </a>
                    </div>
                    <img className="relative right-5 z-50" src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/bg-02-free-img.png" alt="" />
                    <div className="bg-gradient-to-bl from-teal-800 to-yellow-200 text-left w-1/2 relative right-40 rounded-2xl">
                        <h1 className="text-5xl m-20 relative right-10 font-semibold">Location</h1>
                        <p className="m-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, molestias at. Dolorem libero accusantium a!</p>
                        <h1 className="m-5 text-3xl">&#9906; Address</h1>
                        <p className="m-5">123 Fifth Avenue, New York, NY 10160</p>
                        <a className="text-2xl m-5 hover:text-slate-300 " href="http://172.20.10.3:3000/" >
                            &gt;See on Google Maps
                        </a>
                    </div>
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
        </div>

    );
}


export default First;