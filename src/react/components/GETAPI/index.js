import React, {useEffect, useState} from "react"
import { Card, Row, Col } from "antd"
import axios from "axios";

const GETAPI = () => {
    const [apiData, setAPIData] = useState([])
    const [cardData, setCardData] = useState([])

    useEffect(()=>{
        fetchData()
    }, [apiData])

    const gridStyle = {
        width: '33%',
        textAlign: 'center',
      };

    const fetchData = () =>{
       axios.get("https://admin.srkprojects.com/web/api/client/v1/projects/")
       .then(response=>{
            setAPIData(response)
            showCardData()
       })
    }

    const showCardData = () =>{
        var data = []
        if(apiData.data){
            data = apiData.data.map(data=>{
                return(<Card.Grid style={gridStyle}>{data.city}</Card.Grid>)
            })
        }
        setCardData(data)
    }

    return (
        <div>
            <Card title="Card Title">
                {cardData}
            </Card>
        </div>
    )
}
export default GETAPI