import React, { useEffect } from 'react'
const Menu = () => {
    useEffect(() => {
        document.title = "Our Menu - Coffee Shop";
    }, []);
    const items = [{ image: 'https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-01-free-img.png', text1: '$ 4.20', text2: 'Cappuccino', },
    { image: 'https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-02-free-img.png', text1: '$ 3.15', text2: 'Cafe Latte', },
    { image: 'https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-03-free-img.png', text1: '$ 2.75', text2: 'Dark Coffee', },
    { image: 'https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-01-free-img.png', text1: '$ 4.20', text2: 'Cappuccino', },
    { image: 'https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-02-free-img.png', text1: '$ 3.15', text2: 'Cafe Latte', },
    { image: 'https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-03-free-img.png', text1: '$ 2.75', text2: 'Dark Coffee', },
    { image: 'https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-01-free-img.png', text1: '$ 4.20', text2: 'Cappuccino', },
    { image: 'https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-02-free-img.png', text1: '$ 3.15', text2: 'Cafe Latte', },];
    const colors = ['hover:bg-gradient-to-br from-teal-950 to-yellow-300 to bg-gradient-to-tl from-teal-950 to-yellow-300', 'hover:bg-gradient-to-br from-red-950 to-yellow-600 to bg-gradient-to-tl from-red-950 to-yellow-600 ', 'hover:bg-gradient-to-br from-slate-950 to-slate-600 to bg-gradient-to-tl from-slate-950 to-slate-600'];
    const shops = [
        { image: 'https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-07-free-img.png', text1: '$ 19.90', text2: 'Liberica', },
        { image: 'https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-06-free-img.png', text1: '$ 24.20', text2: 'Arabica', },
        { image: 'https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-05-free-img.png', text1: '$ 29.50', text2: 'Robusta', },
        { image: 'https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/product-04-free-img.png', text1: '$ 34.90', text2: 'Excelsa', },
    ]
    return (
        <>
            <div className="h-full w-screen font-serif bg-gradient-to-r bg-no-repeat bg-center relative top-0 from-yellow-900 to-yellow-600">
                <div className="bg-yellow-900 absolute h-full w-screen top-0 opacity-65 "></div>
                <div className="flex justify-end items-center">
                </div>
                <div className="flex justify-end">
                    <div className="text-center relative z-50 text-white text-7xl m-36 right-28 font-semibold bottom-2/3">Our Menu</div>
                    <img className="relative z-50 bottom-9 h-96" src="Spill.png" alt="" /></div>
                <div className="flex">
                    <img className="relative z-50 size-96 bottom-32 right-20" src="cof.png" alt="" />
                    <div className="text-center relative left-52 z-50 text-white text-6xl m-5 font-semibold bottom-2/3">Drinks</div></div>
                <div className="text-center relative z-50 text-white text-xl m-5 font-semibold bottom-2/4 left-56 w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, pariatur.</div>

                <section>
                    <div className="grid relative z-50 bottom-20 m-44 gap-2 grid-cols-4">
                        {items.map((item, index) => (
                            <><div
                                key={item.id}
                                className={`flex items-center drop-shadow-2xl shadow-black p-4 rounded ${colors[index % colors.length]}`}
                            >
                                <div className="text-white text-center">
                                    <img className="h-40 p-3 relative left-2 hover:scale-110 transition-transform 0.6s " src={item.image} alt="" />
                                    <h1 className="text-xl">{item.text1}</h1>
                                    <h1 className="text-3xl font-semibold">{item.text2}</h1>
                                    <p className="text-center m-2" >Lorem ipsum dolor sit amet consectetur adipisici</p>
                                </div>
                            </div>
                            </>
                        ))}
                    </div>
                </section>
                <h1 className="text-center text-white relative bottom-40 text-7xl">Coffee for Home</h1>
                <div className="text-center relative z-50 text-white m-5 font-thin bottom-40 left-56 w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, pariatur.</div>
                <section>
                    <div className="grid relative z-50 bottom-60 m-44 gap-2 grid-cols-4">
                        {shops.map((shop, index) => (
                            <><div
                                key={shop.id}
                                className={`flex items-center drop-shadow-2xl shadow-black p-4 rounded ${colors[index % colors.length]}`}
                            >
                                <div className="text-white text-center">
                                    <img className="h-40 p-3 relative left-2 hover:scale-110 transition-transform 0.6s " src={shop.image} alt="" />
                                    <h1 className="text-xl">{shop.text1}</h1>
                                    <h1 className="text-3xl font-semibold">{shop.text2}</h1>
                                    <p className="text-center m-2" >Lorem ipsum dolor sit amet consectetur adipisici</p>
                                </div>
                            </div>
                            </>
                        ))}
                    </div>
                </section>
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


export default Menu;