$(document).ready(function() {
	$('head').append("<script src='https://cdn.jsdelivr.net/gh/hgmhcms/template/wp/copy.min.js' ></script>");


	var copyTxturlku = ['mhtg5.com', 'mhtg6.com', 'mhtg7.com'];
	var copyTxturlkuindex = Math.floor((Math.random() * copyTxturlku.length));
	var copyTxturl = copyTxturlku[copyTxturlkuindex];
	console.log(copyTxturl)



	var copyTxtgzh = "jdfq678"
	var copyimggzh = "https://open.weixin.qq.com/qr/code?username=" + copyTxtgzh


	var cssTxturl =
		'<style type="text/css">.layui-m-layer{position:relative;z-index:19891014;display:none;font-family:微软雅黑}.layui-m-layermain,.layui-m-layershade{position:fixed;top:0;left:0;width:100%;height:100%}.layui-m-layer *{box-sizing:content-box}.layui-m-layershade{background-color:rgba(0,0,0,.7);pointer-events:auto}.layui-m-layermain{display:table;font-family:Helvetica,arial,sans-serif;pointer-events:none}.layui-m-layermain .layui-m-layersection{display:table-cell;vertical-align:middle;text-align:center}.layui-m-layerchild{position:relative;display:inline-block;border-radius:5px;background-color:#fff;box-shadow:0 0 8px rgba(0,0,0,.1);text-align:left;font-size:14px;pointer-events:auto;-webkit-overflow-scrolling:touch;animation-fill-mode:both;animation-duration:.2s}.layui-m-anim-scale{animation-name:layui-m-anim-scale;-webkit-animation-name:layui-m-anim-scale}.layui-m-layer0 .layui-m-layerchild{width:90%;max-width:40pc}.layui-m-layerchild h3{margin:0;padding-top:15px;height:1pc;border-radius:5px 5px 0 0;text-align:center;font-weight:400;font-weight:700;font-size:1pc;font-family:微软雅黑;line-height:1pc}.layui-m-layerbtn span,.layui-m-layerchild h3{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.layui-m-layercont{padding:10px;text-align:center;font-family:微软雅黑;line-height:22px}.layui-m-layerbtn{display:box;display:-moz-box;display:-webkit-box;width:100%;height:50px;border-top:1px solid #d0d0d0;background-color:#f2f2f2;font-size:0;font-family:微软雅黑;line-height:50px}.layui-m-layerbtn,.layui-m-layerbtn span{position:relative;border-radius:0 0 5px 5px;text-align:center}.layui-m-layerbtn span{display:block;font-size:14px;cursor:pointer;-moz-box-flex:1;box-flex:1;-webkit-box-flex:1}.layui-m-layerbtn span[no]{border-right:1px solid #d0d0d0;border-radius:0 0 0 5px}.layui-m-layerbtn span[yes]{color:#40affe}.see-modal{overflow:hidden;margin:20px auto 0;padding:0 0 20px;background:#fff;background-size:100% auto}.see-modal h4{display:block;margin:5px auto 0;height:20px;color:#333;font-weight:700;font-size:20px;line-height:20px}.see-tip li{display:block;margin-top:15px;color:#999;font-size:14px;line-height:14px}.see-tip{margin:40px auto 0;width:280px}.img-box{position:relative;display:block;margin:30px auto 0;width:100%;max-width: 640px;}.img-box img{display:block;width:100%}.img-box:before{top:-5px;left:-5px;border-color:#111 transparent transparent #111;border-radius:5px 0 0 0}.img-box:after{right:-5px;bottom:-5px;border-color:transparent #111 #111 transparent;border-radius:0 0 5px 0}.img-box-tip{display:block;margin:20px auto 0;color:#999;text-align:center;font-size:9pt}.copy-txt{background:#f4f4f4;color:#333;font-weight:700;font-size:1pc}.copy-btn,.copy-txt{display:block;margin:20px auto 0;width:280px;height:36px;border-radius:5px;text-align:center;line-height:36px}.copy-btn{background:#18a16e;color:#fff;font-size:14px;cursor:pointer}.copy-btn:hover{background:#0f734e}</style>';
	var cssTxtgzh =
		'<style type="text/css">.layui-m-layer{position:relative;z-index:19891014;display:none;font-family:微软雅黑}.layui-m-layermain,.layui-m-layershade{position:fixed;top:0;left:0;width:100%;height:100%}.img-box:after,.img-box:before{position:absolute;width:18px;height:18px;border:2px solid #111;content:""}.layui-m-layer *{box-sizing:content-box}.layui-m-layershade{background-color:rgba(0,0,0,.7);pointer-events:auto}.layui-m-layermain{display:table;font-family:Helvetica,arial,sans-serif;pointer-events:none}.layui-m-layermain .layui-m-layersection{display:table-cell;vertical-align:middle;text-align:center}.layui-m-layerchild{position:relative;display:inline-block;border-radius:5px;background-color:#fff;box-shadow:0 0 8px rgba(0,0,0,.1);text-align:left;font-size:14px;pointer-events:auto;-webkit-overflow-scrolling:touch;animation-fill-mode:both;animation-duration:.2s}.layui-m-anim-scale{animation-name:layui-m-anim-scale;-webkit-animation-name:layui-m-anim-scale}.layui-m-layer0 .layui-m-layerchild{width:90%;max-width:40pc}.layui-m-layerchild h3{margin:0;padding-top:15px;height:1pc;border-radius:5px 5px 0 0;text-align:center;font-weight:400;font-weight:700;font-size:1pc;font-family:微软雅黑;line-height:1pc}.layui-m-layerbtn span,.layui-m-layerchild h3{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.layui-m-layercont{padding:10px;text-align:center;font-family:微软雅黑;line-height:22px}.layui-m-layerbtn{display:box;display:-moz-box;display:-webkit-box;width:100%;height:50px;border-top:1px solid #d0d0d0;background-color:#f2f2f2;font-size:0;font-family:微软雅黑;line-height:50px}.layui-m-layerbtn,.layui-m-layerbtn span{position:relative;border-radius:0 0 5px 5px;text-align:center}.layui-m-layerbtn span{display:block;font-size:14px;cursor:pointer;-moz-box-flex:1;box-flex:1;-webkit-box-flex:1}.layui-m-layerbtn span[no]{border-right:1px solid #d0d0d0;border-radius:0 0 0 5px}.layui-m-layerbtn span[yes]{color:#40affe}.see-modal{overflow:hidden;margin:20px auto 0;padding:0 0 20px;background:#fff;background-size:100% auto}.see-modal h4{display:block;margin:5px auto 0;height:20px;color:#333;text-align:center;font-weight:700;font-size:20px;line-height:20px}.see-tip li{display:block;margin-top:15px;color:#999;font-size:14px;line-height:14px}.see-tip{margin:40px auto 0;width:280px}.img-box{position:relative;display:block;margin:60px auto 0;width:10pc;height:10pc}.img-box img{display:block;width:100%}.img-box:before{top:-5px;left:-5px;border-color:#111 transparent transparent #111;border-radius:5px 0 0 0}.img-box:after{right:-5px;bottom:-5px;border-color:transparent #111 #111 transparent;border-radius:0 0 5px 0}.img-box-tip{display:block;margin:20px auto 0;color:#999;text-align:center;font-size:9pt}.copy-txt{background:#f4f4f4;color:#333;font-weight:700;font-size:1pc}.copy-btn,.copy-txt{display:block;margin:20px auto 0;width:280px;height:36px;border-radius:5px;text-align:center;line-height:36px}.copy-btn{background:#18a16e;color:#fff;font-size:14px;cursor:pointer}.copy-btn:hover{background:#0f734e}</style>';

	<!-- 导流微信链接 -->
	var htmlurl =
		'<div id="layui-m-layer0" class="layui-m-layer layui-m-layer0" index="0"><div class="layui-m-layershade"></div><div class="layui-m-layermain"><div class="layui-m-layersection"><div class="layui-m-layerchild  layui-m-anim-scale"><img src="http://www.shibenshu.com/wp-content/uploads/2020/10/2.gif" alt="" /><h3 style="">复制成功</h3><div class="layui-m-layercont">马上微信搜索关注！</div><div class="layui-m-layerbtn"><span no="" type="0" class="zhidaole">朕知道了</span><span yes="" type="1" class="dakaiweixin">打开微信搜索</span></div></div></div></div></div><div class="see-modal"><ul class="see-tip"><h4>完整版漫画阅读方法</h4><li>1、点击复制按钮，进入微信</li><li>2、搜索框粘贴复制的文字</li><li>3、点击搜索下方"访问网页"即可</li></ul><span data-clipboard-action="copy" data-clipboard-text="' +
		copyTxturl +
		'" class="copy-btn">一键复制</span><div class="img-box"><img src="https://cdn.jsdelivr.net/gh/hgmhcms/template/wp/1.gif" alt="" /></div></div>';
	<!-- 导流微信链接 -->

	<!-- 导流公众号 -->
	var htmlgzh =
		'<div id="layui-m-layer0" class="layui-m-layer layui-m-layer0" index="0"><div class="layui-m-layershade"></div><div class="layui-m-layermain"><div class="layui-m-layersection"><div class="layui-m-layerchild  layui-m-anim-scale"><h3 style="">复制成功</h3><div class="layui-m-layercont">马上微信搜索关注！</div><div class="layui-m-layerbtn"><span no="" type="0" class="zhidaole">朕知道了</span><span yes="" type="1" class="dakaiweixin">打开微信搜索</span></div></div></div></div></div><div class="see-modal"><h4>完整版漫画阅读方法</h4><ul class="see-tip"><li>1、点击复制按钮，进入微信</li><li>2、搜索框粘贴复制的文字进入公众号</li><li>3、搜索你想看的漫画名称既可阅读完整版了</li></ul><div class="img-box"><img src="' +
		copyimggzh + '" alt="" /></div><span class="img-box-tip">扫码关注微信公众号</span><span class="copy-txt">' + copyTxtgzh +
		'</span><span data-clipboard-action="copy" data-clipboard-text="' + copyTxtgzh +
		'" class="copy-btn">复制</span></div>';
	<!-- 导流公众号 -->

	<!-- 免费站点导流 -->
	var mfyd =
		'<a style="display: block; padding: 10px; text-align: center; background: #FF4A00; color: #fff; border-radius: 5px;margin-bottom: 20px;" href="https://m.cqmyz.com/" tite="啵乐屋">→→点击这里马上开始阅读←←</a><p style="color: #ff0000;">免费耽美漫画网，看漫画请收藏起来，看漫画不迷路！！！商务合作请联系QQ：201540494</p>';
	<!-- 免费站点导流 -->


	<!-- 金桔平台 -->
	var appxz1 =
		'<a style="display: block; padding: 10px; text-align: center; background: #FF4A00; color: #fff; border-radius: 5px;margin-bottom: 20px;" href="http://t386403240110043136.awpkqrb.cn/#/" rel="nofollow">→→点击这里马上开始阅读←←</a><p style="color: #ff0000;">收藏网址看漫画，妈妈再也不用担心我的书币丢失了~ 网页版不用再担心丢失，看漫画更稳定！</p>';
	<!-- 金桔平台 -->


	<!-- 导流微信链接 -->
	$('head').append(cssTxturl);
	$('.rights').after(htmlurl);
	$('.fo-detail-pages').before(htmlurl);
	<!-- 导流微信链接 -->

	<!-- 导流公众号 -->
	//$('head').append(cssTxtgzh);
	//$('.rights').after(htmlgzh);
	//$('.fo-detail-pages').before(htmlgzh);
	<!-- 导流公众号 -->

	<!-- 免费站点导流 -->
	//$('.rights').before(mfyd);
	//$('.fo-detail-pages').before(mfyd);
	//<!-- 免费站点导流 -->

	<!-- APP下载 -->
	//$('.rights').before(appxz1);
	//$('.fo-detail-pages').before(appxz1);
	<!-- APP下载 -->

	$('.copy-btn').click(function() {
		new ClipboardJS('.copy-btn');
		$(".layui-m-layer").show();
	})
	$('.zhidaole').click(function() {
		$(".layui-m-layer").hide();
	})
	$('.dakaiweixin').click(function() {
		window.location.href = 'weixin://';
	})


	function is_weixn() {
		var ua = navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == "micromessenger") {
			return true;
		} else {
			return false;
		}
	}

	if (is_weixn()) {
		//document.write("微信浏览器")
		//@media screen and (max-width:700px){.ying .img-box,.ying .img-box-tip {display:none}}
		//$('.rights').before(appxz2);
		//$('.fo-detail-pages').before(appxz2);

	} else {

		// document.write("其他浏览器")。
		//$(".see-modal").addClass("ying")
		//$(".img-box,.img-box-tip").hide()
		// $('.rights').before(appxz2);
		//$('.fo-detail-pages').before(appxz2);

	}







});
