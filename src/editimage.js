function editImage()
    {
    var a1=window.location.search;
    a1=a1.substring(1);
    var array=a1.split("&");
    var imgtoedit=array[0].substring(10);
    var url1=array[1].substring(4);
    var name=array[2].substring(5);
    var info=array[3].substring(5);
    var uploaddate=array[4].substring(11);
    url=unescape(url1);
    var uploaddate1=unescape(uploaddate);
    var ud=new Date(uploaddate1);
    var today=new Date();
    if(today>ud)
    {
    var imginfoarr3=JSON.parse(localStorage.getItem('gallery'));
    for(var i=0;i<imginfoarr3.imginfo.length;i++)
    {
    if((imginfoarr3.imginfo[i].name)===imgtoedit)
    {
    imginfoarr3.imginfo[i].imageurl=url;
    imginfoarr3.imginfo[i].name=name;
    imginfoarr3.imginfo[i].information=info;
    imginfoarr3.imginfo[i].uploaddate=uploaddate;
    }
    }
    localStorage.setItem('gallery',JSON.stringify(imginfoarr3));
    display();
    }
    else
    {alert("Enter a valid date");}
    }
    function display(){
    var imginfoarr1=JSON.parse(localStorage.getItem('gallery'));
    for(i in imginfoarr1.imginfo)
    {
            var s1=imginfoarr1.imginfo[i].imageurl;
            src=s1;
            img = document.createElement('img');
            img.src = src;
            img.style.height="250px";
            img.style.width="250px";
            document.body.appendChild(img);
    }}

