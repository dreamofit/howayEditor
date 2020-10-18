import React, { Component } from 'react';
import HowayEditor from './HowayEditor';
import { BoldOutlined,ItalicOutlined,AlignCenterOutlined,AlignLeftOutlined,AlignRightOutlined,
    UndoOutlined,RedoOutlined,DeleteOutlined,
    UnderlineOutlined,StrikethroughOutlined,FileImageOutlined,MenuOutlined } from '@ant-design/icons';

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
    const iconCenter = <AlignCenterOutlined />;
    const iconLeft = <AlignLeftOutlined />;
    const iconRight = <AlignRightOutlined />;
    const iconFull = <MenuOutlined />;
    const iconUndo =<UndoOutlined />;
    const iconRedo = <RedoOutlined />;
    const iconDelete = <DeleteOutlined />;
    const styles={
        width: "60%",
        height: "100%",
        marginLeft: '20%',
        float:"none"
    }
        
        return (
            <div>
                <HowayEditor
                    onChange={(e)=>{console.log(e)}}
                    //iconBlod={iconBlod}
                    //iconItalic={iconItalic}
                    //iconUderline={iconUderline}
                    //iconStriket={iconStriket}
                    //iconImg={iconImg}
                    //iconCenter={iconCenter}
                    //iconLeft={iconLeft}
                    //iconRight={iconRight}
                    //iconFull={iconFull}
                    //iconUndo={iconUndo}
                    //iconRedo={iconRedo}
                    //iconDelete={iconDelete}
                    styles={styles}
                    upload={"http://localhost:8081/img/upload"}
                />
            </div>
        );
    }

}
export default Test;