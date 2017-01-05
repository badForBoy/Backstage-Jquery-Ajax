var lis = $(".sidebar > ul > li > a");

/*侧边栏点击-下拉列表显隐*/
lis.click(function(){
	//下拉列表显隐
	lis.next().stop(true);
	$(this).next().slideToggle(200);

	//下拉列表显隐
	if (!$(this).find("i.icon-icon05-copy-copy").hasClass("add")) {
		$(this).find("i.icon-icon05-copy-copy").removeClass("add_1");
		$(this).find("i.icon-icon05-copy-copy").toggleClass("add");
	} else {
		$(this).find("i.icon-icon05-copy-copy").removeClass("add");
		$(this).find("i.icon-icon05-copy-copy").toggleClass("add_1");
	}

});
