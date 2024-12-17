import React from 'react';

const Card = ({ imgSrc, author, title, duration, students, level, lessons, originalPrice, price, link }) => {
    return (
        <div className="flex mt-4 ml-[15px] justify-start border border-[gray] w-[1000px] rounded-[20px] "> {/* Добавлен отрицательный отступ */}
            <img className="w-[410px] object-cover" src={imgSrc} alt="img"/>
            <div className="ml-[15px] w-full">
                <p className="w-[148px] mt-[20px] font-jost text-[16px] font-normal leading-[24px] text-left decoration-transparent">
                    {author}
                </p>
                <h3 className="text-[black] mt-[10px]  font-exo text-[18px] font-semibold leading-[24px] text-left">
                    {title}
                </h3>
                <div className="mt-[20px] flex space-x-4">
                    <div className="flex items-center">
                        <img src={duration.icon} alt="time icon" className="mr-2"/>
                        <span>{duration.text}</span>
                    </div>
                    <div className="flex items-center">
                        <img src={students.icon} alt="students icon" className="mr-2"/>
                        <span>{students.text}</span>
                    </div>
                    <div className="flex items-center">
                        <img src={level.icon} alt="level icon" className="mr-2"/>
                        <span>{level.text}</span>
                    </div>
                    <div className="flex items-center">
                        <img src={lessons.icon} alt="lessons icon" className="mr-2"/>
                        <span>{lessons.text}</span>
                    </div>
                </div>
                <hr className="mt-[60px]"/>
                <div className="mt-[10px] flex items-center">
                    <span
                        className="text-gray-500 mr-2 mb-[10px] text-[16px] font-medium text-[gray] leading-[27px] text-left font-jost">
                        {originalPrice}
                    </span>
                    <span
                        className="text-[16px] font-medium mb-[10px] leading-[27px] text-left font-jost text-[#55be24]">
                        {price}
                    </span>
                    <a className="ml-[380px] text-[18px] font-medium leading-[27px] text-right" href={link}>
                        View More
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Card;



// import React from 'react';
// import { Img1, W1, W2, W3, W4 } from "./assets/index.js";
//
// const App = () => {
//     return (
//         <div className="flex mt-4 ml-[15px] border border-[gray]    "> {/* Контейнер для Img1 и всего текста */}
//
//             {/* Изображение Img1 */}
//             <img className="w-[410px]" src={Img1} alt="img" />
//
//             {/* Контейнер с текстами, который будет располагаться справа от Img1 */}
//             <div className="ml-[20px]  "> {/* Отступ для разделения с изображением */}
//
//                 {/* Информация о создателе */}
//                 <p className=" w-[148px] mt-[20px] font-jost text-[16px] font-normal leading-[24px] text-left decoration-transparent">
//                     byDeterminedPoitras
//                 </p>
//
//                 {/* Заголовок */}
//                 <h3 className="text-[black] mt-[0px] mt-[10px] font-exo text-[20px] font-semibold leading-[24px] text-left">
//                     Create an LMS Website with LearnPress
//                 </h3>
//
//                 {/* Контейнер для элементов с иконками */}
//                 <div className="mt-[20px] flex space-x-4">
//                     <div className="flex items-center">
//                         <img src={W1} alt="time icon" className="mr-2" />
//                         <span>2 weeks</span>
//                     </div>
//                     <div className="flex items-center">
//                         <img src={W2} alt="time icon" className="mr-2" />
//                         <span>156 Students</span>
//                     </div>
//                     <div className="flex items-center">
//                         <img src={W3} alt="time icon" className="mr-2" />
//                         <span>All levels</span>
//                     </div>
//                     <div className="flex items-center">
//                         <img src={W4} alt="time icon" className="mr-2" />
//                         <span>20 Lessons</span>
//                     </div>
//                 </div>
//
//
//                 <hr className={"mt-[80px]"}/>
//                 {/* Стоимость и кнопка "View More" */}
//                 <div className="mt-[20px] flex items-center">
//                     <span
//                         className="text-gray-500 line-through mr-2 mb-[15px] text-[18px] font-medium text-[gray] leading-[27px] text-left font-jost">
//                         49$
//                     </span>
//
//                     <span
//                         className="text-[18px] font-medium mb-[15px] leading-[27px] text-left font-jost text-[#55be24]">
//                         Free
//                     </span>
//
//                     <a className="ml-[165px] text-[18px]  mb-[15px] "
//                        href="">
//                         View More
//                     </a>
//                 </div>
//
//             </div>
//         </div>
//     );
// };
//
// export default App;

