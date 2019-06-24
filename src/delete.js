function deleteImage()
    {
    var a1=window.location.search;
    a1=a1.substring(1);
    var array=a1.split("&");
    var imgtodel=array[0].substring(9);
    var imginfoarr3=JSON.parse(localStorage.getItem('gallery'));
    for(var i=0;i<imginfoarr3.imginfo.length;i++)
    {
    if((imginfoarr3.imginfo[i].name)===imgtodel)
    {
       var removed= imginfoarr3.imginfo.splice(i,1);

    }
    }
    localStorage.setItem('gallery',JSON.stringify(imginfoarr3));
    display();
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
