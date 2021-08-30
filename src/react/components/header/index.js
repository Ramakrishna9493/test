import React from "react"
import { Row, Col, Button } from "antd"
import "./index.css"
import { OmitProps } from "antd/lib/transfer/ListBody"

const Header = (props) => {
    
    return (
        <div className="header-font">
            <Row>
                Counter
                <Button
                    style={{marginLeft: "30px", marginTop: "10px"}}
                    onClick={()=>props.setShowForm(true)}>
                    Post Data
                </Button>
            </Row>
            
        </div>
    )
}
export default Header