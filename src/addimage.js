function addimage()
    {
    var imginfoarr1=JSON.parse(localStorage.getItem('gallery'));
    var temp=new Object();
    var a1=window.location.search;
    a1=a1.substring(1);
    var flag=0;
    var array=a1.split("&");
    var url1=array[0].substring(4);
    var name=array[1].substring(5);
    var info=array[2].substring(5);
    var uploaddate1=array[3].substring(11);

    var url=unescape(url1);
    var uploaddate=unescape(uploaddate1);
    temp["imageurl"]=url;
    temp["name"]=name;
    flag=1;
    var ud=new Date(uploaddate);
    var today=new Date();
    temp["information"]=info;
    temp["uploaddate"]=uploaddate;
    if(today>ud)
    {
    imginfoarr1.imginfo.push(temp);
    var jsonstring=JSON.stringify(imginfoarr1);
    localStorage.setItem('gallery',jsonstring);
    display();
    }
    else
    {alert("Enter a valid date");}
    }
    function display(){
    var imginfoarr2=JSON.parse(localStorage.getItem('gallery'));
    for(i in imginfoarr2.imginfo)
    {
            var s1=imginfoarr2.imginfo[i].imageurl;
            src=s1;
            img = document.createElement('img');
            img.src = src;
            img.style.height="250px";
            img.style.width="250px";
            document.body.appendChild(img);
    }
    }