import React from "react";
import {Link} from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;


export default function Admin(){
    return(
        <div>
            <h2>Cards</h2>

            <Link to = "/admin/modulo1">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Modulo 1" />
                </Card>
            </Link>

            <Link to = "/admin/modulo2">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Modulo 2" />
                </Card>
            </Link>

            <Link to = "/admin/modulo3">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Modulo 3" />
                </Card>
            </Link>
            
        </div>
    )
}