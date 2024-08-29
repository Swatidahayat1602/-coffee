import React,{useEffect} from 'react'
const Gallery = () => {
    useEffect(() => {
        document.title = "Gallery - Coffee Shop";
      }, []);
        return (
            <>
                <div className="h-full w-screen font-serif bg-gradient-to-r bg-no-repeat bg-center relative top-0 from-yellow-900 to-yellow-600">
                <div className="bg-yellow-900 absolute h-full w-screen top-0 opacity-65 "></div>
                <div className="flex justify-end items-center">
                </div>
                    <div className="text-center relative z-50 text-white text-7xl m-32 font-semibold bottom-2/3">Gallery</div>
                    <div className="flex gap-4 m-52 bottom-36 relative">
                        <img className="rounded-lg h-96 w-2/3 hover:scale-110 transition-transform 0.6s " src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-01-free-img.jpg" alt="" />
                        <img className="rounded-lg h-96 w-1/3 hover:scale-110 transition-transform 0.6s" src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-02-free-img.jpg" alt="" />
                        <img className="rounded-lg h-96 w-1/3 hover:scale-110 transition-transform 0.6s " src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-03-free-img.jpg" alt="" />
                    </div>
                    <div className="grid grid-cols-3 m-56 relative bottom-52 gap-3">
                        <img className="h-56 rounded-lg hover:scale-110 transition-transform 0.6s" src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-08-free-img.jpg" alt="" />
                        <img className="h-56 rounded-lg hover:scale-110 transition-transform 0.6s" src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-09-free-img.jpg" alt="" />
                        <img className="h-56 rounded-lg hover:scale-110 transition-transform 0.6s" src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-06-free-img.jpg" alt="" />
                        <img className="h-56 rounded-lg hover:scale-110 transition-transform 0.6s" src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-07-free-img.jpg" alt="" />
                        <img className="h-56 rounded-lg hover:scale-110 transition-transform 0.6s" src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-05-free-img.jpg" alt="" />
                        <img className="h-56 rounded-lg hover:scale-110 transition-transform 0.6s" src="https://websitedemos.net/coffee-shop-04/wp-content/uploads/sites/727/2020/11/gallery-04-free-img.jpg" alt="" />
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
export default Gallery;