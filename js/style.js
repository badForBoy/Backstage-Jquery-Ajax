var lis = $(".sidebar > ul > li > a");

//console.log(lis)
lis.click(function(){
	lis.next().stop(true);
	$(this).next().slideToggle(200);



	$(this).find("i.icon-icon05-copy-copy").addClass("add") ? $(this).find("i.icon-icon05-copy-copy").addClass("add"): $(this).find("i.icon-icon05-copy-copy").addClass("add_1");
	//$(this).next("ul").css("display") == "none" ? $(this).next("ul").addClass("off") : $(this).next("ul").removeClass("off");
});
