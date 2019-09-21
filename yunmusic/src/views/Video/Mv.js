import React from "react";
import { Tabs, Radio } from 'antd';
import axios from "axios";
export default class Mv extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
           id:[]
        };
    }

    render(){
        return (
            <div>
                {/*<video src="http://vodkgeyttp9c.vod.126.net/vodkgeyttp8/68sKFbGS_1328070069_hd.mp4?wsSecret=9182eed84907fa54ae5c47e35017d40f&wsTime=1568729196&ext=NnR5gMvHcZNcbCz592mDGUGuDOFN18isir07K1EOfL1%2F8Cd4XKBbjwVMU8FsANATyQtNewqXIXs5fRnqat1X20dZZ84eo02zBHqa6FrlQIF4XC%2BCkCM7KhXfdDTOtz67Y%2FB9JKaEaTyL1Xs66Oly7phV6YNfpViZmrsNbMhCg%2BDKu3AxNzAgMpg2mfC8%2FXGoZOlYYrF5WT7fF3Bm5c3G1AaUHT65bBV%2Bb1hFf%2FBGED13JGa1sB8Uf3KnM4De15y2"></video>*/}
                {/*<video src="http://vodkgeyttp9c.vod.126.net/vodkgeyttp8/68sKFbGS_1328070069_hd.mp4?wsSecret=9182eed84907fa54ae5c47e35017d40f&wsTime=1568729196&ext=NnR5gMvHcZNcbCz592mDGUGuDOFN18isir07K1EOfL1%2F8Cd4XKBbjwVMU8FsANATyQtNewqXIXs5fRnqat1X20dZZ84eo02zBHqa6FrlQIF4XC%2BCkCM7KhXfdDTOtz67Y%2FB9JKaEaTyL1Xs66Oly7phV6YNfpViZmrsNbMhCg%2BDKu3AxNzAgMpg2mfC8%2FXGoZOlYYrF5WT7fF3Bm5c3G1AaUHT65bBV%2Bb1hFf%2FBGED13JGa1sB8Uf3KnM4De15y2"></video>*/}
                <video src="http://vodkgeyttp9c.vod.126.net/vodkgeyttp8/68sKFbGS_1328070069_hd.mp4?wsSecret=bc9ff8fc8ef1315c0d249c69e84b7b0b&wsTime=1568730273&ext=NnR5gMvHcZNcbCz592mDGUGuDOFN18isir07K1EOfL1%2F8Cd4XKBbjwVMU8FsANATyQtNewqXIXs5fRnqat1X20dZZ84eo02zBHqa6FrlQIF4XC%2BCkCM7KhXfdDTOtz67g5pR%2B1O3OX00AjnvpBaGbg%2BhvBAGddki4aaenjMgnIrnFpYw7oCXH%2BLEf35Knd6SUsaI0mWwSZdK1b9kngi5%2F1Vyz48ljul4nRY%2BgQfEo1TvQTNYIxtUI34XKJ6LCOk5"controls="controls" autoplay="autoplay"></video>
            </div>

        )
    }
    async getVideoList(id){
        const {mList}= await axios.get(`http://localhost:4000/video/url`);
        this.setState({
            // VideoList:mList.data.splice(0,8)
        })
        // console.log(this.state.mList)
    }

    componentDidMount(){
        // this.getVideoList(this.props.id);

    }
}