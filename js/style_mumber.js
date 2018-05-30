$(function () {
	
	$(".tuimg_top").click(function(){
		num=$(this).find("span").html()
        $(this).parent().find(".upload").click();  		
	})
	


//上传头像  

    $(".upload").change(function(){  
        var file = this.files[0] ? this.files[0] : null; //不晓得这里换成$(this)为什么不行  
        if(null == file){  
            return false;  
        }  
        var file_reader = new FileReader();  
        file_reader.onload = (function(){  
            var image_url = this.result;        // 这是图片的路径  
            var classty='.'+"js-portrait"+num;
            console.log(classty)
            $(classty).attr('src', image_url);  
        });
        file_reader.readAsDataURL(file);  
    }); 
    
    
    
});
