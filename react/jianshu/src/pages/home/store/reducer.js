
import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      img: 'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
      id: 2,
      title: '手绘',
      img: 'https://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    }
  ]
})

export default (state = defaultState, action) => {

  return state
}