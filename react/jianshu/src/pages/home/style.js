import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin:0 auto;
  overflow:hidden;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`
export const HomeLeft = styled.div`
  margin-left:15px;
  padding-top:30px;
  width: 625px;
  float:left;
`
export const HomeRight = styled.div`
  width: 280px;
  float:right;
`
export const TopicWrapper = styled.div`
  padding:20px 0 10px 0;
  overflow:hidden;
  margin-left:-18px;
`
export const TopicItem = styled.div`
  float:left;
  height: 32px;
  line-height:32px;
  background-color:#f7f7f7;
  font-size:14px;
  color:#000;
  border: 1px solid #dcdcdc;
  border-radius:4px;
  padding-right:10px;
  margin-left:18px;
  margin-bottom:18px;
  .topic-pic{
    width: 32px;
    height: 32px;
    display:block;
    float:left;
    margin-right:10px;
  }
`
export const ListItem = styled.div`
  display:flex;
  align-items:center;
  border-top: 1px solid #c0c0c0;
  padding-top:20px;
  height: 120px;
  margin-bottom:20px;
  img{
    width: 150px;
    height: 100px;
    margin-left:10px;
  }
`
export const ListContent = styled.div`
      overflow:hidden;
    a{
      text-decoration:none;
    }
    h3{
      color:rgb(46,46,46);
      font-size:18px;
      font-weight:600;
      margin-bottom:10px;
    }
    span{
      color:rgb(153,153,153);
      font-size:13px;
      
    }
`
export const ListMeta = styled.div`
  margin-top:10px;
  span{
    margin-right:10px;
  }
`
export const RecommendWrapper = styled.div`
  margin:30px 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background:url(${(props) => props.imgUrl});
  background-size:contain;
  margin-bottom:5px;
`


export const LoadMore = styled.div`
  font-size:15px;
  height:40px;
  line-height:40px;
  text-align: center;
  color:rgb(255,255,255);
  background-color:rgb(156,156,156);
  border-radius:20px;
  width: 625px;
  margin:30px 0;
  cursor:pointer;
`
export const Back = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #ccc;
  position:fixed;
  font-size:16px;
  right: 30px;
  bottom: 30px;
  line-height:60px;
  text-align: center;
`
export const DownloadWrapper = styled.div`
  width: 278px;
  height: 82px;
  border: 1px solid rgb(240,240,240);
  border-radius:6px;
  margin-bottom:25px;
  display:flex;
  align-items:center;
  justify-content:center;
  img{
    width: 50px;height:50px;
    margin-left:20px;
  }
  cursor: pointer;
`

export const DownContent = styled.div`
  span{
    display:inline-block;
    margin-bottom:5px;
    margin-left:10px;
  }
  .span1{
    font-size:15px;
    line-height:21.4px;
    color:rgb(51,51,51);
  }
  .span2{
    font-size:13px;
    line-height:18.5px;
    color:rgb(153,153,153)
  }
`

export const RqCode = styled.div`
  position: relative;
  background-color:#fff;
  width: 160px;height: 160px;
  border: 1px solid rgb(240,240,240);
  display:flex;
  align-items:center;
  justify-content:center;
  top:-280px;
  right:-55px;
  /* z-index:100; */
  box-shadow: 5px 5px 5px #888888;
  img{
    width:90%;
    height:90%;
  }
  &.Rqcode::before,
  &.Rqcode::after{
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-width: 10px 10px;
    border-style: solid;
    border-color: #3377aa transparent transparent;
    bottom: -20px;
    left: 50%;
    margin-left: -10px;
}
  &.Rqcode::after{
    border-color: #fff transparent transparent;
    bottom: -20px;
}
`
export const WriterWrapper = styled.div`
  width: 278px;
  /* border: 1px solid #dcdcdc; */
  border-radius:3px;
  height: 300px;
  /* line-height:300px; */
  /* text-align: center; */
`
export const WriteTitle = styled.div`
  position: relative;
  span{
    display:inline-block;
    font-size:14px;
    line-height:20px;
    color:rgb(150,150,150);
  }
  .span{
    position:absolute;
    right: 0;
  }
  
`

export const AuthorList = styled.div`
  width:100%;
  height:55px;
  display:flex;
  margin-top:20px;
  align-items:center;
  position: relative;
  img{
    width: 50px;height: 50px;
    border-radius:50%;
  }
  span{
    display:block;
  }
  span:nth-child(1){
    font-size:14px;
    line-height:20px;
    color:rgb(46,46,46);
  }
  span:nth-child(2){
    font-size:12px;
    line-height:20px;
    color:rgb(150,150,150);
  }
  span:nth-child(3){
    color:rgb(65,191,46);
    position:absolute;
    right: 0;
    bottom:50%;
    font-size:13px;
  }
  div{
    margin-left:10px
  }
`

