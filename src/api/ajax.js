//ajax请求函数模块
//返回值是promise对象,异步返回的数据是 response.data



import axios from 'axios'   //导入ajax插件


export default function ajax(url,data={},type='GET') {


  return new Promise(function (resolve,reject) {

    //执行异步ajax请求
    var promise;


    //如果是get请求，需要把data拼接成连接
    if(type=='GET'){
      var dataStr='';
      Object.keys(data).forEach(key=>{

        dataStr+=key+'='+data[key]+'&'
        console.log("ajax.js 文件16行看看打印的是什么鬼：\t"+dataStr)


      })

      if (dataStr!==''){
        dataStr=dataStr.substring(0,dataStr.lastIndexOf('&'));
        url=url+'?'+dataStr

      }


      //发送get请求
      promise=axios.get(url);




    }else {

      //发送post请求
      console.log("ajax.js 41行  post请求看看打印的是什么鬼：\t"+dataStr)
      promise =axios.post(url,data);

    }

    console.log("ajax.js 47行"+promise)



    //成功了调用resolve()

    //请求成功
    promise.then(function (response) {

      console.log("ajax.js 55行  response看看打印的是什么鬼：\t"+response+"\t"+response.data);

      resolve(response.data);


      //失败调用reject()
    }).catch(function (error) {

      //如果失败了执行这个
      console.log("ajax.js 62行  response看看打印的是什么鬼：\t"+error);
      reject(error);

      })




  })










}











