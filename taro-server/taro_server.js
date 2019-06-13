
var express = require('express');
var app = express();


app.post('/', function (req, res) {
	// 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/json
	res.status(200);
    res.set('Content-Type','application/json');
	var data = {"errorCode":0,"errorMsg":null,"data":[{"id":"54be1d27-5a23-477b-aa6d-24895f89b803","adName":"菲律宾洞穴发现新人类物种遗骸","adPositionId":"GGW_A_SYWZ","content":"据英国《卫报》和美国有线电视新闻网10日报道，2007年，研究人员在该洞穴中发现了一块足骨，可追溯到6.7万年前。当时研究人员不确定这些骨头来自哪个物种","adUrl":"article/article-info?id=6a25019f-6de0-4c83-b060-7c9f5f3198d8","adPicUrl":"","sort":1},{"id":"37b9d745-c5f0-42af-a254-8f5aca0ee8e6","adName":"把科幻做成科学","adPositionId":"GGW_A_SYWZ","content":"百年来，人类对地外星体的探索热情，从未熄灭过。刘红说她“时刻准备着，为进入外太空的人类提供足够的生命补给”。","adUrl":"article/article-info?id=0fd692dd-4928-421a-a82e-3bbd455d0526","adPicUrl":"","sort":2},{"id":"130f5b61-e2e5-484b-855b-5285310f672f","adName":"余承东再造华为终端","adPositionId":"GGW_A_SYWZ","content":"华为于4月11日在国内发布了其P30系列。在发布会后的采访中，华为消费者业务CEO余承东谈到了华为近两年在手机业务上的规划","adUrl":"article/article-info?id=e7793a55-b5a3-4b82-93ba-37fd0e6c7cd3","adPicUrl":"","sort":3}],"total":null,"status":1};
	
	res.send(JSON.stringify(data));
})
 
var server = app.listen(8888, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
