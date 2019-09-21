import React,{Fragment} from "react";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import "../../aseets/style/Discover/carousel.css";
import axios from "axios"
import {
  
} from "react-router-dom"
class Carousel extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
       banner:[]
    }
}
  render(){
    return(
      <Fragment>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            {
             (this.state.banner).map((item,i)=>(
              (
                <div key={i} className="swiper-slide"><img src={item.pic} style={{width:'100%'}}/></div>
               
              )
            
            ))
            }
          </div>
           
          <div class="swiper-pagination"></div>

        
            {/* <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> */}

           
          <div class="swiper-scrollbar">
          </div>
        </div>
      </Fragment>
    )
    
}
async getBannerList(){
  const {data} =await axios.get(`http://49.232.53.60:8080/banner?type=1`);
  this.setState({
      banner:data.banners
  })
  // console.log(this.state.banner)
}

 componentDidMount(){
    this.getBannerList()
    new Swiper('.swiper-container',{
      slidesPerView: 1,
 
        loop: true, // 循环模式选项
        autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          // clickable: true,
        },
    
        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
    
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
    });
    
}

}

export default Carousel;
