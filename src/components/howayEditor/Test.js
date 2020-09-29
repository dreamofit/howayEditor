import React, { Component } from 'react';
import HowayEditor from './HowayEditor';
import { BoldOutlined,ItalicOutlined,UnderlineOutlined,StrikethroughOutlined } from '@ant-design/icons';

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
        
        return (
            <div>
                <HowayEditor
                    iconBlod={iconBlod}
                    iconItalic={iconItalic}
                    iconUderline={iconUderline}
                    iconStriket={iconStriket}
                />
            </div>
        );
    }

}
export default Test;