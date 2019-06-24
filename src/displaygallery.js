function display(){
    var imginfoarr1=JSON.parse(localStorage.getItem('gallery'));
    for(i in imginfoarr1.imginfo)
    {
            var s1=imginfoarr1.imginfo[i].imageurl;
            src=s1;
            img = document.createElement('img');
            img.src = src;
            document.body.appendChild(img);
    }}