import React from 'react';
import './CourseProduct.css';
import '../Bootstrap/Bootstrap.css';
import { Row, Col, Button } from 'react-bootstrap';

const CourseProduct = (props) => {
    
    const {image, name, price, description, instructor, company, email} = props.courseProduct;
    return (
        <div className="course-product">

            <Row>
                <Col>
                    <div className="product-image">
                        <img src={image} alt={name}/>
                    </div>
                </Col>

                <Col xs={5}>
                    <div className="product-detail-first-part">
                        <h5>Course Name : {name}</h5>
                        <h6>Price : ${price}</h6>
                        <p><small>Description : {description}</small></p>
                        <p><small>Instructor : {instructor}</small></p>
                        
                    </div>

                </Col>
                <Col>
                    <div className="product-detail-second-part">
                        <Button variant="outline-secondary" onClick={() => props.handleAddCourse(props.courseProduct)}>Enrolled Now</Button>
                        <br/>
                        <br/>
                        <br/>
                        <p><small>Company : {company}</small></p>
                        <p><small>E-mail : {email}</small></p>

                    </div>
                </Col>
            </Row>

            

            

            


            
            
                
            
            
        </div>
    );
};

export default CourseProduct;