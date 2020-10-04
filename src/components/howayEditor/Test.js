import React, { Component } from 'react';
import HowayEditor from './HowayEditor';
import { BoldOutlined,ItalicOutlined,UnderlineOutlined,StrikethroughOutlined,FileImageOutlined } from '@ant-design/icons';

class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }
    render() {
        //const icons = <BlockOutlined />;
    const iconBlod = <BoldOutlined />;
    const iconItalic  = <ItalicOutlined />;
    const iconUderline = <UnderlineOutlined />;
    const iconStriket = <StrikethroughOutlined />;
    const iconImg = <FileImageOutlined />;
        
        return (
            <div>
                <HowayEditor
                    onChange={(e)=>{console.log(e)}}
                    iconBlod={iconBlod}
                    iconItalic={iconItalic}
                    iconUderline={iconUderline}
                    iconStriket={iconStriket}
                    iconImg={iconImg}
                    upload={"http://localhost:8081/img/upload"}
                />
            </div>
        );
    }

}
export default Test;