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

export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius:3px;
  height: 300px;
  line-height:300px;
  text-align: center;
`

