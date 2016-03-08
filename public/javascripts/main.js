
//main.js
var gridster;
    $(function(){
        gridster = $(".gridster ul").gridster({    //通过jquery选择DOM实现gridster
            widget_base_dimensions: [100, 120],    //模块的宽高 [宽,高]
            widget_margins: [5, 5],    //模块的间距 [上下,左右]
//            draggable: {
//                handle: '.con'    //模块内定义拖动的元素<header>，这里也支持jquery选择器，如"span.drag_handle"
//            }
            draggable:{
                start: function(event, ui){

                    console.log("start");
                },
                drag:function(event, ui){
                    console.log("drag");
                },
                stop: function(event, ui){
                    console.log("stop");
                }
            },
            resize: {
                enabled: true
                //handle_class: 'con'

            }
        }).data('gridster');
    });
    $("#save").click(function () {
        var sty={
            color:'#ffffff',
            fontSize:'15'
        };
        var title={text:document.getElementById("title").value,style:sty};
        var xAxis=document.getElementById('xAxis').value;
        var yAxis={text:document.getElementById('yAxis').value};
        var channel=document.getElementById('msgid').value;
        var li=gridster.add_widget('<li class="con"></li>', 4, 2);
        var div=$('<div></div>', {
            id: 'drawchart',
            margin:10+"px",
            width:"100%",
            height:"100%",
            background:"#adadad"
        }).appendTo($(li));
        var socket=io.connect('http://localhost:3000');

    var msg={};
    //msg.title=title;
    //msg.yAxis=yAxis;
    msg.channel=channel;
    //msg.xAxis=xAxis;
    socket.emit('chartmsg',msg);
    socket.on('pushData',function (data) {
        //console.log(JSON.stringify(data));
         var payload=data;
        //payload.className='chart';
         payload.title=title;
        if(payload.yAxis)
        {
            payload.yAxis.title=yAxis;
        }
        //payload.className='test';
        //var chart=li.highcharts(payload);
        $(div).highcharts(payload);

    });
});
