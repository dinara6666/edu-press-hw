import React from 'react';
import {
    L1,
    L6,
    L2,
    L3,
    L4,
    Img1,
    W1,
    W2,
    W3,
    W4,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Star,
    Star2,
    Star3, Star4, Star5
} from './assets/index.js';
import Card from './Card.jsx';
import SearchBar from './components/SearchBar.jsx';



const Checkbox = ({ label, count }) => (
    <label className="block mb-2 flex items-center mr-[300px] justify-between">
        <input type="checkbox" name="agree" value="yes" />
        {label}
        <span className="ml-auto text-left ">{count}</span>
    </label>
);

const App = () => {
    const cardData = [
        {
            imgSrc: Img1,
            author: 'byDeterminedPoitras',
            title: 'Create an LMS Website with LearnPress',
            duration: { icon: W1, text: '2 weeks' },
            students: { icon: W2, text: '156 Students' },
            level: { icon: W3, text: 'All levels' },
            lessons: { icon: W4, text: '20 Lessons' },
            originalPrice: '49$',
            price: 'Free',
            link: '#',
        },
        {
            imgSrc: Img2,
            author: 'byDeterminedPoitras',
            title: 'Create an LMS Website with LearnPress',
            duration: { icon: W1, text: '2 weeks' },
            students: { icon: W2, text: '156 Students' },
            level: { icon: W3, text: 'All levels' },
            lessons: { icon: W4, text: '20 Lessons' },
            originalPrice: '49$',
            price: 'Free',
            link: '#',
        },

        {
            imgSrc: Img3,
            author: 'byDeterminedPoitras',
            title: 'Create an LMS Website with LearnPress',
            duration: { icon: W1, text: '2 weeks' },
            students: { icon: W2, text: '156 Students' },
            level: { icon: W3, text: 'All levels' },
            lessons: { icon: W4, text: '20 Lessons' },
            originalPrice: '49$',
            price: 'Free',
            link: '#',
        },

        {
            imgSrc: Img4,
            author: 'byDeterminedPoitras',
            title: 'Create an LMS Website with LearnPress',
            duration: { icon: W1, text: '2 weeks' },
            students: { icon: W2, text: '156 Students' },
            level: { icon: W3, text: 'All levels' },
            lessons: { icon: W4, text: '20 Lessons' },
            originalPrice: '49$',
            price: 'Free',
            link: '#',
        },

        {
            imgSrc: Img5,
            author: 'byDeterminedPoitras',
            title: 'Create an LMS Website with LearnPress',
            duration: { icon: W1, text: '2 weeks' },
            students: { icon: W2, text: '156 Students' },
            level: { icon: W3, text: 'All levels' },
            lessons: { icon: W4, text: '20 Lessons' },
            originalPrice: '49$',
            price: 'Free',
            link: '#',
        },
        {
            imgSrc: Img6,
            author: 'byDeterminedPoitras',
            title: 'Create an LMS Website with LearnPress',
            duration: { icon: W1, text: '2 weeks' },
            students: { icon: W2, text: '156 Students' },
            level: { icon: W3, text: 'All levels' },
            lessons: { icon: W4, text: '20 Lessons' },
            originalPrice: '49$',
            price: 'Free',
            link: '#',
        },
        // Repeat for other cards
    ];

    const filterData = [
        {
            title: 'Course category',
            options: ['Commercial', 'Office', 'Shop', 'Educate', 'Academy', 'Single family home', 'Studio', 'University'],
        },
        {
            title: 'Instructors',
            options: ['Kenny White', 'John Doe'],
        },
        {
            title: 'Price',
            options: ['All', 'Free', 'Paid'],
        },
        {
            title: 'Level',
            options: ['All levels', 'Beginner', 'Intermediate', 'Expert'],
        },
    ];

    const reviewStars = [Star, Star2, Star3, Star4, Star5];

    return (

        <div className="flex flex-col min-h-screen">
            {/* Main content */}

            <SearchBar/>


            <div className="flex-1 mt-[100px] flex gap-6">
                <div className="flex-1">
                    {cardData.map((data, index) => (
                        <Card
                            key={index}
                            imgSrc={data.imgSrc}
                            author={data.author}
                            title={data.title}
                            duration={data.duration}
                            students={data.students}
                            level={data.level}
                            lessons={data.lessons}
                            originalPrice={data.originalPrice}
                            price={data.price}
                            link={data.link}
                        />
                    ))}
                </div>

                <div className="ml-[30px]">
                    {filterData.map((filter, index) => (
                        <div key={index}>
                            <h2 className="text-left text-2xl font-semibold leading-6 mb-[20px] mt-[25px]">
                                {filter.title}
                            </h2>
                            {filter.options.map((option, idx) => (
                                <Checkbox key={idx} label={option} count="15"/>
                            ))}
                        </div>
                    ))}

                    <h2 className="text-left text-2xl font-semibold leading-6 mb-[20px] mt-[25px]">
                        Review
                    </h2>
                    {reviewStars.map((StarIcon, index) => (
                        <label key={index} className="block mb-2 flex">
                            <input type="checkbox" name="agree" value="yes"/>
                            <img src={StarIcon} alt={`Star ${index + 1}`}/>

                        </label>
                    ))}
                </div>
            </div>

            {/* Footer */}

            <footer className="     mt-24 bg-gray-100 h-[591px] flex justify-center text-[black] w-full p-12 relative     ">
                <div className="container mx-auto">
                    <div className="flex justify-between mb-8">


                        <div className="viverra1 mt-20 ml-10 mr-40">
                            <div className="D flex items-center ml-9">
                                <img className={" "} src={L6} alt="Logo"/>
                                <h3 className="text-xl ml-2 font-semibold">
                                    <span className="mr-[50px] text-[black]">EduPress</span>
                                </h3>
                            </div>

                            <div className="viverra text-[black] mt-10 text-left text-base font-poppins">
                                <p className={" ml-[20px]"}>
                                    Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod
                                    tempor <br/> incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>


                        <div className="  flex flex-row mt-16 gap-8">
                            <div className="flex flex-col">
                                <h3 className="font-bold  mb-3 page mb-6">GET HELP</h3>
                                <ul>
                                    <li className={" mb-6"}>Contact Us</li>
                                    <li className={" mb-6"}>Latest Articles</li>
                                    <li className={" mb-6"}>FAQ</li>
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-bold  mb-3 page mb-6">PROGRAMS</h3>
                                <ul>
                                    <li className={" mb-6"}>Art & Design</li>
                                    <li className={" mb-6"}>Business</li>
                                    <li className={" mb-6"}>IT & Software</li>
                                    <li className={" mb-6"}>Languages</li>
                                    <li className={" mb-6"}>Programming</li>
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-bold  mb-3 page mb-6">CONTACT US</h3>
                                <ul>
                                    <li className={" mb-6"}>Address: 2321 New Design Str, Hudson Yards, USA</li>
                                    <li className={" mb-6"}>Tel: + (123) 2500-567-8988</li>
                                    <li className={" mb-6"}>Email: supportlms@gmail.com</li>

                                    <div className={"flex gap-6 mt-3"}>
                                        <img className={""} src={L1}/>
                                        <img className={""} src={L2}/>
                                        <img className={""} src={L3}/>
                                        <img className={""} src={L4}/>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 pt-6 mt-6 text-center text-sm">
                        <p>Copyright © 2024 LearnPress LMS | Powered by ThimPress</p>
                    </div>
                </div>
            </footer>
        </div>

    );
};            export default App;
