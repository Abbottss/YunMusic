import React from "react";
import { Row, Col } from 'antd';
import axios from "axios"
import "../../aseets/style/Discover/NewDish__NewSong.css";
export default class NewDish__NewSong extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            NewDishList:[],
            NewSongList:[],
            index:this.props.index
        }
    }
    changeIndex(index){
        this.setState({
            index
        })
     }
    render(){
        return (
            <div className="NewDish__NewSong">
                <div className="NewDish__NewSong-top">
                    <Row type="flex" justify="space-between">
                        <Col span={7}>
                            <span onClick={this.changeIndex.bind(this,0)} className={this.state.index===0?"active":"NewDish__NewSong-title"}>新碟</span>  |  <span onClick={this.changeIndex.bind(this,1)} className={this.state.index===1?"active":"NewDish__NewSong-title"}>新歌</span>
                        </Col>
                        <Col span={7}>
                            <span className="NewDish__NewSong-square">更多新碟</span>
                        </Col>
                    </Row>
                </div>
                <div className="NewDish-bottom" style={{display:this.state.index===0?"block":"none"}}>
                     <Row type="flex" justify="space-around">
                    {
                    (this.state.NewDishList).map((item,i)=>(
                    (
                        <Col span={7} className="NewDish__NewSong-Row" style={{"WebkitBoxOrient": "vertical",marginBottom:"0.14rem"}}>
                            <div>
                                <img style={{marginBottom:"0.15rem"}} src={item.blurPicUrl} style={{width:'100%'}}/>
                            </div>
                            <span className="NewDish-font">{item.name}</span>
                        </Col>
                    )
                    
                    ))
                    }
                            
                    </Row>
                </div>
                <div className="NewSong-bottom" style={{display:this.state.index===1?"block":"none"}}>
                     <Row type="flex" justify="space-around">
                    {
                    (this.state.NewSongList).map((item,i)=>(
                    (
                        <Col span={7} className="NewSong-Row" style={{"WebkitBoxOrient": "vertical",marginBottom:"0.14rem"}}>
                                <div>
                                    <img style={{marginBottom:"0.15rem"}} src={item.album.blurPicUrl} style={{width:'100%'}}/>
                                </div>
                                <span className="NewSong-font">{item.name}</span>
                            </Col>
                    )
                    
                    ))
                    }
                            
                    </Row>
                </div>
               
            </div>
        )
        
    }
    async getNewDishList(){
        const {data} =await axios.get(`http://49.232.53.60:8080/top/album?offset=0&limit=3`);
        this.setState({
            NewDishList:data.albums
        })
      }
    async getNewSongList(){
        const {data} =await axios.get(`http://49.232.53.60:8080/top/song?type=0`);
        if(data.data.length>3){
            data.data.length=3
        }
        this.setState({
            NewSongList:data.data
        })
      }  
       async componentDidMount(){
           this.state.index=0
            this.getNewDishList()
            this.getNewSongList()
       }
}