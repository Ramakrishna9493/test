import React, {useEffect, useState} from "react"
import { Card, Row, Col } from "antd"
import Header from "../../components/header"
import GETAPI from "../../components/GETAPI";
import POSTAPI from "../../components/POSTAPI"
import axios from "axios";
import "./index.css"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [showForm, setShowForm] = useState(false)

    const increentCounter = () =>{
        setCounter(counter+3)
    }

    const decrementCounter = () =>{
        setCounter(counter-3)
    }

    const formVisibility = (visible) =>{
        setShowForm(visible)
    }
    return (
        <div>
            <Row>
                <Header setShowForm={formVisibility}></Header>
            </Row>
            <Row justify="space-around">
                <Card onClick={decrementCounter}>
                    -
                </Card>
                
                <Card>
                    {counter}
                </Card>

                <Card onClick={increentCounter}>
                    +
                </Card>
                
            </Row>
            <GETAPI></GETAPI>
            <POSTAPI visible={showForm}
                setModalVisible={formVisibility}
            ></POSTAPI>
        </div>
    )
}
export default Counter