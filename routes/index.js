var express = require('express');
var router = express.Router();
const qs = require('qs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/post', async (req, res, next) => {
  
  
  const fields = {
    banner: '',
    TOC: 1,
    disableDarkMask: 0,
    contentLang: 0,
    useSerifFont: 0,
    enableMathJax: 0,
    enableFlowChat: 0,
    enableMermaid: 0,
    
  }
  const data = {
    title: '这是通过接口上传的文章',
    text: `/utils/store.js

//全局状态共享
class Store{
  constructor(options){
    this.state=options.state;//全局状态
    this.dep={};//状态依赖
  }
  //添加依赖
  addDep(page,state){
    for(let key in state){
      this.state[key]=state[key]
      if(!this.dep[key]){
        this.dep[key]={
          pages:[],
          pageIds:{}//不重复添加
        }
      }
      let pageId=page.__route__;
      if(!this.dep[key].pageIds[pageId]){
        this.dep[key].pageIds[page.__route__]=1;
        this.dep[key].pages.push(page)
      }
    }
    // console.log(option)
    page.setData(state);
  }
  //移除卸载的页面
  removeDep(page,state){
    for(let key in state){
      if(this.dep[key]){
        this.dep[key].pages=this.dep[key].pages.filter(item=>{
          if(item.__route__==page.__route__){
            this.dep[key].pageIds[page.__route__]=null;
          }
          return item.__route__!=page.__route__;
        })
      }
    }
  }
  //更新状态
  setStore(state){
     for(let key in state){
      this.state[key]=state[key];
      // console.log(key,this.state[key])
      this.dep[key].pages.forEach(page=>{
        page.setData(state)
        // console.log(page)
      })
     }
  }
}
//初始化全局状态
export function initStore(app,store){
  app.$store=new Store(store);
}
//page或者component调用
export function useStore(page,state){
  let store=getApp().$store;
  if(!state){//不定义自己要使用的状态，会应用全部状态
    state=store.state;
  }
  if(!page.$store){//状态初始化每个界面只调用一次，后续调用不生效
    page.$store=store;
    // console.log(page)
    //卸载页面时在页面中移除当前页面
    page.onUnload=function(){
        store.removeDep(page,state)
    }
    store.addDep(page,state)
  }
}
//在不应用全局状态的界面提供更新全局状态方法
export function setStore(state){
  let store=getApp().$store;
  store.setStore(state);
}
// store/index.js
class WxStore {
    state = {

    }

    init(_this) {
        initStore(_this, {
            state: this.state
        })
    }
}

const store = new WxStore()
export default store
使用：
\t1\t初始化， 在app.js中
onLanuch(){
    store.init(this)
}
\t2\t在组件中使用
onLoad() {
 //useStore如果不传第二个参数，会应用所有的全局状态到当前的页面或者组件，传了第二个参数则只会在当前页面
    //或者组件上添加指定的状态
    useStore(this,{
       message:'新状态'
    })
}
\t3\t调用过useStore应用全局状态的页面可以直接使用this.$store更新，无需引入setStore
this.$store.setStore({message:'新状态111'})

//直接使用setStore更新状态
import {setStore} from './utils/Store'
setStore({message:'新状态111'})`,
    fields,
    cid: '',
    do: 'publish',
    markdown: 1,
    date: '',
    category: [2],
    tags: '微信小程序',
    visibility: 'publish',
    allowComment: 1,
    allowPing: 1,
    allowFeed: 1,
    trackback: '',
    timezone: 28800
  }
  
  
  //
  const result = await fetch("https://liu-wb.com/index.php/action/contents-post-edit?_=9a7c2d049c18a65f83b904ad9a4e5ecb", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "cache-control": "max-age=0",
      "content-type": "application/x-www-form-urlencoded",
      "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Microsoft Edge\";v=\"103\", \"Chromium\";v=\"103\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "cookie": "e84e65af5fddec562bfaa3152ba92b65__typecho_uid=1; e84e65af5fddec562bfaa3152ba92b65__typecho_authCode=%24T%245q65OQaLG0140ccc2237e0872e77c10a05bb49f26; PHPSESSID=qq7f5ivsq47h630bo0opvh7000",
      "Referer": "https://liu-wb.com/admin/write-post.php",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": qs.stringify(data),
    "method": "POST"
  });
  
  const str = 'title=tete&text=tetet&fields%5Bbanner%5D=&fields%5BTOC%5D=0&fields%5BdisableDarkMask%5D=0&fields%5BcontentLang%5D=0&fields%5BuseSerifFont%5D=0&fields%5BenableMathJax%5D=0&fields%5BenableFlowChat%5D=0&fields%5BenableMermaid%5D=0&cid=&do=publish&markdown=1&date=&category%5B%5D=1&category%5B%5D=2&tags=&visibility=publish&password=&allowComment=1&allowPing=1&allowFeed=1&trackback=&timezone=28800'
  
  
  console.log(str)
  
  return res.json({
    data: decodeURI(str),
    // result,
  }) && process.exit(1)
})

module.exports = router;
