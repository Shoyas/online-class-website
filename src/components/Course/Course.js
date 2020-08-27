import React, { useState } from 'react';
import './Course.css';
import fakeData from '../fakeData/fakeData';
import CourseProduct from '../CourseProduct/CourseProduct';
import Cart from '../Cart/Cart';

const Course = () => {
    
    const [courses, setcourses] = useState(fakeData);
    //console.log(courses);

    const [cart, setCart] = useState([]);

    const handleAddCourse = (product) => {
        console.log(product);
        let newCart = [...cart, product];
        setCart(newCart);

    }

    return (
        <div className="course-container">
            
            <div className="course-side">
                <h3>{courses.length} Courses are available now</h3>
                {
                    courses.map( course => <CourseProduct 
                    handleAddCourse = {handleAddCourse}

                    courseProduct ={course}>

                    </CourseProduct> )
                }
            </div>
            <div className="course-cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;