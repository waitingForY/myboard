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

var pushline={
	name:'New York',
	data:[-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5],
	categories:['一月', '二月', '三月', '四月', '五月', '六月' ,'七月', '八月', '九月', '十月', '十一月', '十二月']
	};
 var pushcolum={
    categories: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
    name: 'Population',
    data:[49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
 };
var pusharea={
        categories: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ],
        name: 'USA',
        data: [3, 4, 3, 5, 4, 10, 12]
};
var pushpie={
    name: 'Browser share',
    data: [
        ['Firefox', 45.0],
        ['IE', 26.8],
        {
            name: 'Chrome',
            y: 12.8,
            sliced: true,
            selected: true
        },
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7]
    ]
};
var pushbar={
    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
    series: [{ name: 'Year 1800', data: [107, 31, 635, 203, 2] }, { name: 'Year 1900', data: [133, 156, 947, 408, 6] }, { name: 'Year 2008', data: [973, 914, 4054, 732, 34] }]
};

var pushcolumn3d={
    name:"i don't know",
    categories:['一月', '二月', '三月', '四月', '五月', '六月' ,'七月', '八月', '九月', '十月', '十一月', '十二月'],
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
};


var pushhalfpie={
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                ['Chrome', 12.8],
                ['Safari',    8.5],
                ['Opera',     6.2],
                {
                    name: 'Others',
                    y: 0.7,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
};

client.on('ready',function  (error) {
	if (error) {
		console.log(error);
	}else{
		var interval=setInterval(function  () {
			client.publish('pushline_test',JSON.stringify(pushline));
			client.publish('pushcolumn_test',JSON.stringify(pushcolum));
			client.publish('pusharea_test',JSON.stringify(pusharea));
			client.publish('pushpie_test',JSON.stringify(pushpie));
                                       client.publish('pushbar_test',JSON.stringify(pushbar));
                                       client.publish('push3dcolumn_test',JSON.stringify(pushcolumn3d));
                                       client.publish('pushhalfpie_test',JSON.stringify(pushhalfpie));


		},2000);
//		setTimeout(function  () {
//			clearInterval(interval);
//			console.log("out of interval");
//			client.end();
//		},500000);
	}
});

