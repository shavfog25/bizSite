 $(document).ready(function(){
    
	$("nav ul li").hover(function(){
		$(this).animate({'margin-left': '40px'}, 'slow');
     }, function(){
        $(this).animate({'margin-left': '0px'}, 'slow');
        
});
});