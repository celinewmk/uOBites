import { useEffect, useState } from 'react';
import { CheckCircleFill, ArrowRight } from "react-bootstrap-icons";
import "../../OrderStatus.scss";
import { Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function OrderStatus3(props: { email: string; }) {
    
    const email = props.email;
    const navigate = useNavigate();
    
    // resizes the icons depending on the screen/window size
    const [iconSize, setIconSize] = useState(100);
    useEffect(() => {
        const calculateIconSize = () => {
            if (window.innerWidth > 768) {
                setIconSize(100);
            } else {
                setIconSize(70)
            }

        }
        window.addEventListener('resize', calculateIconSize)
    });

    return (
        <>
            <section className="statusContainer">
                <div className="progressBar">
                    <div className="iconGroup">
                        <CheckCircleFill size={iconSize} className='iconStyle' style={{color: "#90ee90"}}/>
                        <p>Order Received</p>
                    </div>
                    <ArrowRight size={75} className='arrowStyle'  />
                    <div className="iconGroup">
                        <CheckCircleFill size={iconSize} className='iconStyle' style={{color: "#90ee90"}}/>
                        <p>Order in progress</p>
                    </div>
                    <ArrowRight size={iconSize} className='arrowStyle' />
                    <div className="iconGroup">
                        <CheckCircleFill size={iconSize} className='iconStyle' style={{color: "#90ee90"}}/>
                        <p>Order Completed</p>
                    </div>
                </div>
            </section>
            <Alert style={{marginTop: "5vh"}} variant='success'>
                <Alert.Heading>Your order is complete!</Alert.Heading>
                <p>Please pick up your order.</p>
                <Button variant="success" onClick={() => navigate("/home", {state: {email}})}>Return to Home Page</Button>
            </Alert>
        </>
    )
}
