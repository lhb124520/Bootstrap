//new Vue({
//el: '#example',
// data: {
//  ip: 'Vue.js',
//  port : 'Vue.js',
//  username: 'Vue.js',
//  password: 'Vue.js'
//  
//},
//// 在 `methods` 对象中定义方法
//methods: {
//  onclick: function (event) {
//  	alert("aswds")
//    // `this` 在方法里指当前 Vue 实例
////    alert('Hello ' + this.username + '!')
////    // `event` 是原生 DOM 事件
////	  if (event) {
////		  alert(event.target.tagName)
////	  }
//  }
//}
//})

new Vue({
	el: '#example1',
	data: {
		ip: '',
		port: '',
		username: '',
		pwd: ''
	},
	methods: {
		onclick: function(event) {
			var url1 = $("#ip").val() + ":" + $("#port").val() + "/api/BDS//GetWhenNotLoginedIn";
			var url2 = $("#ip").val() + ":" + $("#port").val();
			var params = {
				"UserID": "",
				"list": [$("#username").val(), $("#pwd").val(), "HK", "android_dbs", "869775012153232",
					url2, "BDS", "1.64"
				],
				"label": "User_UserLoginWithCompanyID",
				"APIKey": "android_dbs",
				"CompanyID": "",
				"SessionKey": ""
			};
			alert("提交的数据：" + JSON.stringify(params));
			$.ajax({
				type: "POST",
				url: url1,
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify(params),
				dataType: "json",
				success: function(data) {
					var jsonarray = "";
					$.each(data, function(key, value) {
						jsonarray += key + "=" + value + ",";

					});
					if(navigator.userAgent.toLowerCase().match(/(android)/)) {
						MyObject.showDialog(jsonarray);
					} else {
						alert(jsonarray);
					}
					if(data.IsOK.toString() == "true") {
						if(navigator.userAgent.toLowerCase().match(/(android)/)) {
							MyObject.showDialog(data);
							$(location).attr('href', '/android');
						} else {
							alert("登录成功！");
						}
					} else {
						if(navigator.userAgent.toLowerCase().match(/(android)/)) {
							MyObject.showDialog(data.Msg);
						} else {
							alert(data.Msg);
						}
					}
				},
				error: function(data) {
					if(navigator.userAgent.toLowerCase().match(/(android)/)) {
						MyObject.showDialog("提交数据失败！");
					} else {
						alert("提交数据失败！");
					}
				}
			});

			MyObject
			// `this` 在方法里指当前 Vue 实例
			//    alert('Hello ' + this.username + '!')
			//    // `event` 是原生 DOM 事件
			//	  if (event) {
			//		  alert(event.target.tagName)
			//	  }
		}
	}
})