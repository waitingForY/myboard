var redis=require('redis');
try{
	var client=redis.createClient('6379','127.0.0.1');
	client.on('error',function (error) {
		console.log(error);
	});
	client.on('ready',function  (){
		client.subscribe('NewYork');
		//client.subscribe('wangjiangbo_test2');
	});
	client.on('subscribe',function  (channel,count) {
		console.log("channel:"+channel+",count:"+count);
	});
	client.on('message',function  (channel,message) {
		console.log(JSON.parse(message));
	});
}
catch(error){
	console.log(error);
}