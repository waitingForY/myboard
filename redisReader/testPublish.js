var redis=require('redis');
var client=redis.createClient('6379','127.0.0.1');
client.on('error',function(error){
	console.log(error);
});
//set
// client.select('15',function(error){
// 	if(error){
// 		console.log(error);
// 	}else{
// 		client.set('str_key_0','0',function(error,res){
// 			if(error){
// 				console.log(error);
// 			}else{
// 				console.log(res);
// 			}
// 			client.end();
// 		});
// 	}
// });
//get
// client.select('15',function(error){
// 	if(error){
// 		console.log(error);
// 	}else{
// 		client.get('str_key_0',function(error,res){
// 			if(error){
// 				console.log(error);
// 			}else{
// 				console.log(res);
// 			}
// 			client.end();
// 		});
// 	}
// });
//publish.js

var NewYork={
	name:'New York',
	data:[-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5],
	categories:['一月', '二月', '三月', '四月', '五月', '六月' ,'七月', '八月', '九月', '十月', '十一月', '十二月']
	};
var Berlin={
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6,17.9, 14.3, 9.0, 3.9, 1.0],
            categories:['一月', '二月', '三月', '四月', '五月', '六月' ,'七月', '八月', '九月', '十月', '十一月', '十二月']
        };
var London={
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0,16.6, 14.2, 10.3, 6.6, 4.8],
            categories:['一月', '二月', '三月', '四月', '五月', '六月' ,'七月', '八月', '九月', '十月', '十一月', '十二月']
        };
 var pushcolum={
 	name: 'Population',
             data: [
                ['Shanghai', 23.7],
                ['Lagos', 16.1],
                ['Instanbul', 14.2],
                ['Karachi', 14.0],
                ['Mumbai', 12.5],
                ['Moscow', 12.1],
                ['São Paulo', 11.8],
                ['Beijing', 11.7],
                ['Guangzhou', 11.1],
                ['Delhi', 11.1],
                ['Shenzhen', 10.5],
                ['Seoul', 10.4]
            ]
 }
var pusharea={
        name: 'USA',
        data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
            1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
            27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
            26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
            22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
            10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
}
var pushpie={
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Microsoft Internet Explorer',
            y: 56.33
        }, {
            name: 'Chrome',
            y: 24.03,
            sliced: true,
            selected: true
        }, {
            name: 'Firefox',
            y: 10.38
        }, {
            name: 'Safari',
            y: 4.77
        }, {
            name: 'Opera',
            y: 0.91
        }, {
            name: 'Proprietary or Undetectable',
            y: 0.2
        }]
}
client.on('ready',function  (error) {
	if (error) {
		console.log(error);
	}else{
		var interval=setInterval(function  () {
			client.publish('pushline_NewYork',JSON.stringify(NewYork));
			client.publish('pushline_Berlin',JSON.stringify(Berlin));
			client.publish('pushline_London',JSON.stringify(London));
			client.publish('pushcolumn_test',JSON.stringify(pushcolum));
			client.publish('pusharea_test',JSON.stringify(pusharea));
			client.publish('pushpie_test',JSON.stringify(pushpie));
		},2000);
//		setTimeout(function  () {
//			clearInterval(interval);
//			console.log("out of interval");
//			client.end();
//		},500000);
	}
});

