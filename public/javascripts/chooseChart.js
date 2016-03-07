var newidname="pushcolumn";
    function choosePushcolumn(){
        var datatarget=document.getElementById("choosepushcolumn").getAttribute("data-target");
        var idname=datatarget.substring(1,datatarget.length);
        var imgsrc=document.getElementById("choosepushcolumn").getAttribute("src");
        document.getElementById("imgid").setAttribute("src",imgsrc);
        document.getElementById(newidname).setAttribute("id",idname);
        newidname=idname;
    }
    function choosePushcolumnmulti(){
        var datatarget=document.getElementById("choosepushcolumnmulti").getAttribute("data-target");
        var idname=datatarget.substring(1,datatarget.length);
        var imgsrc=document.getElementById("choosepushcolumnmulti").getAttribute("src");
        document.getElementById("imgid").setAttribute("src",imgsrc);
        document.getElementById(newidname).setAttribute("id",idname);
        newidname=idname;
    }
    function choosePushcolumnlog(){
        var datatarget=document.getElementById("choosepushcolumnlog").getAttribute("data-target");
        var idname=datatarget.substring(1,datatarget.length);
        var imgsrc=document.getElementById("choosepushcolumnlog").getAttribute("src");
        document.getElementById("imgid").setAttribute("src",imgsrc);
        document.getElementById(newidname).setAttribute("id",idname);
        newidname=idname;
    }
    function choosePushgauge(){
        var datatarget=document.getElementById("choosepushgauge").getAttribute("data-target");
        var idname=datatarget.substring(1,datatarget.length);
        var imgsrc=document.getElementById("choosepushgauge").getAttribute("src");
        document.getElementById("imgid").setAttribute("src",imgsrc);
        document.getElementById(newidname).setAttribute("id",idname);
        newidname=idname;
    }
    function choosePushline(){
        var datatarget=document.getElementById("choosepushline").getAttribute("data-target");
        var idname=datatarget.substring(1,datatarget.length);
        var imgsrc=document.getElementById("choosepushline").getAttribute("src");
        document.getElementById("imgid").setAttribute("src",imgsrc);
        document.getElementById(newidname).setAttribute("id",idname);
        newidname=idname;
    }
    function chooseArea(){
        var datatarget=document.getElementById("choosearea").getAttribute("data-target");
        var idname=datatarget.substring(1,datatarget.length);
        var imgsrc=document.getElementById("choosearea").getAttribute("src");
        document.getElementById("imgid").setAttribute("src",imgsrc);
        document.getElementById(newidname).setAttribute("id",idname);
        newidname=idname;
    }
    function chooseBar(){
        var datatarget=document.getElementById("choosebar").getAttribute("data-target");
        var idname=datatarget.substring(1,datatarget.length);
        var imgsrc=document.getElementById("choosebar").getAttribute("src");
        document.getElementById(newidname).setAttribute("id",idname);
        document.getElementById("imgid").setAttribute("src",imgsrc);
        newidname=idname;
    }
    function chooseColumn(){
        var datatarget=document.getElementById("choosecolumn").getAttribute("data-target");
        var idname=datatarget.substring(1,datatarget.length);
        var imgsrc=document.getElementById("choosecolumn").getAttribute("src");
        document.getElementById("imgid").setAttribute("src",imgsrc);
        document.getElementById(newidname).setAttribute("id",idname);
        newidname=idname;
    }
    function chooseLine(){
        var datatarget=document.getElementById("chooseline").getAttribute("data-target");
        var idname=datatarget.substring(1,datatarget.length);
        var imgsrc=document.getElementById("chooseline").getAttribute("src");
        document.getElementById("imgid").setAttribute("src",imgsrc);
        document.getElementById(newidname).setAttribute("id",idname);
        newidname=idname;
    }
    $("#pushcolumn").draggable();
    $("#component").draggable();