/*
  1.创建一个可读流
  2.创建一个可写流
  3.监听可读流的data事件,当事件发生的时候得到
    文件内容并写入到可写流里面
  4.监听可读流的end事件，当end事件发生的时候
    关闭可写流
  5. 如果可写流已经无法写入，要暂停读取可读流
  6.如果可写流排空了，可以恢复读取可读流
 */
function  copy(src,target){

}

copy('1.txt','2.txt');