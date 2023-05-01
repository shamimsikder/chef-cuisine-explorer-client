import React from 'react';

import img1 from "../../assets/image1.jpg"
import img2 from "../../assets/image2.jpg"
import img3 from "../../assets/image3.jpg"
import img4 from "../../assets/image4.jpg"

const Blogs = () => {
    return (
        <div className='w-full max-w-6xl mx-auto mt-10 mb-10 p-5 md:p-0'>
            
            <div className='grid grid-cols-1 gap-[50px]'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center'>
                    <div className=''>
                        <h3 className=' text-2xl font-semibold mb-4'>What is the differences between uncontrolled and controlled components?</h3>
                        <p>An uncontrolled component is a component where the state is managed by the browser, rather than by React. In other words, the component's state is managed by the DOM itself, and the component doesn't have direct access to it.</p>
                        <p>A controlled component is a component where the state is managed by React, rather than by the browser. In a controlled component, the component's state is managed through React's state management system. </p>
                    </div>
                    <div className='order-first md:order-last'>
                        <img className='rounded-md' src={img1} alt="" />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center'>
                    <div>
                        <img className='rounded-md' src={img2} alt="" />
                    </div>
                    <div className=''>
                        <h3 className=' text-2xl font-semibold mb-4'>How to validate React props using PropTypes?</h3>
                        <p>An uncontrolled component is a component where the state is managed by the browser, rather than by React. In other words, the component's state is managed by the DOM itself, and the component doesn't have direct access to it.</p>
                        <p>A controlled component is a component where the state is managed by React, rather than by the browser. In a controlled component, the component's state is managed through React's state management system. </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center'>
                    <div className=''>
                        <h3 className=' text-2xl font-semibold mb-4'>What is the difference between Node.js and Express.js?</h3>
                        <p>Node.js is a server-side runtime environment that allows you to run JavaScript code on the server. It provides a platform for building scalable, high-performance applications that can handle a large number of simultaneous connections.</p>
                        <p>Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features and tools for building web applications, including routing, middleware, and templates.</p>
                    </div>
                    <div className='order-first md:order-last'>
                        <img className='rounded-md' src={img3} alt="" />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center'>
                    <div>
                        <img className='rounded-md' src={img4} alt="" />
                    </div>
                    <div className=''>
                        <h3 className=' text-2xl font-semibold mb-4'>What is a custom hook, and why will you create a custom hook?</h3>
                        <p>An uncontrolled component is a component where the state is managed by the browser, rather than by React. In other words, the component's state is managed by the DOM itself, and the component doesn't have direct access to it.</p>
                        <p>A controlled component is a component where the state is managed by React, rather than by the browser. In a controlled component, the component's state is managed through React's state management system. </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blogs;
