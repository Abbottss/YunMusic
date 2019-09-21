import React from "react";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import Carousel from "./Discover/Carousel"//导入轮播图
import Menu from "./Discover/Menu"//导入菜单
import RecommendSongSheet from "./Discover/RecommendSongSheet"//导入推荐歌单
import NewDish__NewSong from "./Discover/NewDish__NewSong"//导入推荐歌单
import {Button,Layout} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
export default class Home extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//        banner:[]
//     }
// }
    render() {
        return (
          <div>
            <div style={{padding:'0.19rem'}}>
              <Carousel></Carousel>
            </div>
            <div style={{borderBottom:"0.06rem solid #7a8388"}}>
              <Menu></Menu>
            </div>
            <div style={{paddingTop:'0.5rem'}}>
              <RecommendSongSheet></RecommendSongSheet>
            </div>
            <div style={{paddingTop:'0.5rem'}}>
              <NewDish__NewSong></NewDish__NewSong>
            </div>
          </div>
         
        );
      }
    
    //   async getBannerList(){
    //     const {data} = await axios.get(`http://localhost:4000/banner?type=1`);
    //     this.setState({
    //         banner:data
    //     })
    //     // console.log(this.state.banner)
    // }
    
    async componentDidMount () {
    //轮播图
        var mySwiper = new Swiper('.swiper-container', {
          autoplay: true,
          loop: true,
          pagination : {
              el: '.swiper-pagination',
          }
        });

        // this.getBannerList()
  }
 
}