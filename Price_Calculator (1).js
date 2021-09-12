    
        function SetCookie(name,value)
        {
            var Days = 30; 
            var exp  = new Date();
            exp.setTime(exp.getTime() + 100000000);
            document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
        }
        
        function getCookie(name)  
        {
            var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
             if(arr != null) return unescape(arr[2]); return null;
        }
        
        var gfid        =   "123456789"
        var gencode     =   getCookie("Price_Calculator")
        if (gencode == null)
        {
            gencode = ""
        }
        
        var fstl =  gencode.split("#")
        
function commitFood()
        {
            
            var total = 0
            var fns   = new Array()
            var nums  = new Array()
            var encode= ""
            var totalPrice = 0        
            for (idx in foods)
            {
                
                var ff = document.getElementById(foods[idx].tag)
                var num = parseInt(ff.value)
                var num2 = parseInt(ff.value*foods[idx].price)
                
                total+=num;
                totalPrice+=num2;
                 console.log(foods[idx].tag,ff.value*foods[idx].price,total)
                if (num > 0)
                {
                    fns.push(foods[idx].en)
                    nums.push(num)
                    total   =   total + num
                    totalPrice = totalPrice + num2
                    
                    encode  =   encode + foods[idx].tag + "#" + num + "#"
                }
                
            }

            var mult=document.getElementById("mult").value;
            var dis="";

            
            

    for (idx in fns)
    {      
        dis = dis +  "1/" + ratioArray[idx] + " " +fns[idx] + " = " + nums[idx] + "\n";        
    }
    var x = dis;
var totalBems= 0
var list = x.split("\n");
list.pop();
    for( i=0; i<list.length;i++){
        console.log(list[i]);
        totalBems = totalBems + calculate(list[i]);
        }


    dis = dis + "Total Foods= " + total/2 + "\n";
    dis = dis + "Total Bems Required= " + totalBems;
    document.getElementById("display").innerHTML = dis;
    
    SetCookie("Price_Calculator", encode)
    document.write(encode)        

            
            
            var fid     =   document.getElementById("fid")
            fid.value   =   gfid
            var fid     =   document.getElementById("fencode")
            fencode.value   =   encode
            
            var form     =   document.getElementById("foodForm")
            form.submit()
            
           document.write("<body style=" + "background-image:url('https://www.transparenttextures.com/patterns/45-degree-fabric-dark.png');" + ">")
           document.write("<div class=" + "container" + ">")
            for (idx in fns)
            {
               dis = dis + " &#9679; " +  fns[idx] + " = " + nums[idx] + "\n";   
               document.write("<h4 style= " + "padding-top:1px;padding-left:48px;" + ">" +fns[idx] + " = " + nums[idx] + "</h4>")
            }

            dis = dis + " \n";
            dis = dis + "Total Foods = " + total/2 + "\n";
            dis = dis + "Total Price = " + totalPrice/2 + "\n";
            dis = dis + "Total Price * " + mult + " = " + (totalPrice/2)*mult + "\n";
            dis = dis + "Total Blankets Required = " + ((totalPrice*mult/2)/1098).toFixed(2)+ "\n";
            dis = dis + "Total Rings Required = " + ((totalPrice*mult/2)/824).toFixed(2)+ "\n";
            document.getElementById("display").innerHTML = dis;
            SetCookie("Price_Calculator", encode)
            document.write(encode)
        }
        
        
        function resetFood()
        {
            for (idx in foods)
            {
                var ff = document.getElementById(foods[idx].tag)
                ff.value    =   "0"
            }
            document.getElementById("display").innerHTML = "";
            onFoodChange()
        }
        
        var foods   =   new Array
    
            function Food(en, lvl, price, fn, imgid)
            {
                this.fn     =   fn
                this.en     =   en
                this.lvl    =   lvl
                this.price  =   price
                this.imgid  =   imgid
                this.tag    =   en.replace(/ /g , "");
                this.bc     =   ""
                        for (var i = 1; i <= (22 - this.en.length); i++) 
                {
                    this.bc =   this.bc + "&nbsp;"
                }
            }          
                                    
            function onFoodChange(id)
            {
                var total = 0
                for (idx in foods)
                {
                    
                    var ff = document.getElementById(foods[idx].tag)
                    document.write(foods[idx].tag)
                    document.write(ff.value)
                    total   =   total + parseInt(ff.value)
                }
                
                var t = document.getElementById("total")
                t.innerHTML="Total Food Number: " + total;
                
                var last_fn = ""
                for (idx in foods)
                {
                    if (idx == 0)
                    {
                         var t = document.getElementById(foods[idx].fn)
                        t.innerHTML    =    foods[idx].fn + "(Total:" + total + ")"
                        last_fn  = foods[idx].fn
                    }
                    else
                    {
                        if (last_fn != foods[idx].fn)
                        {
                            var t = document.getElementById(foods[idx].fn)
                            t.innerHTML    =    foods[idx].fn + "(Total:" + total + ")"
                            last_fn  = foods[idx].fn
                        }
                    }
                }
            }
            
            function getDefaultFoodValue(foodTag)
            {
                for (var idx = 0; idx < fstl.length; idx++)
                {
                    if (fstl[idx] == foodTag)
                    {
                        return parseInt(fstl[idx + 1])
                    }
                }
                
                return 0
            }
            
            var last_fn = ""
        
            

            for (idx in foods) 
            {
                if (idx == 0)
                {
                    console.log(foods[idx].fn);
                    document.write("<div class=" + "col-12"  + ">");
                    document.write("<h3 class=\"machineHeading\"> " + foods[idx].fn + "</h3>")
                    document.write("<ul type=\"" + foods[idx].fn + "\">")
                document.write("</div>");

                    document.write("<div class=\"col-5 heading\">");
                        document.write( "<h4>Name</h4>");
                    document.write("</div>");
                //     document.write("<div class=\"col-1 heading\">");
                //     document.write("<h4></h4>");
                // document.write("</div>");
                    document.write("<div class=\"col-2 heading\">");
                        document.write("<h4>Level</h4> ");
                    document.write("</div>");
                    document.write("<div class=\"col-2 heading\">");
                        document.write("<h4>Price</h4>" );
                    document.write("</div>");
                    document.write("<div class=\"col-3 heading\">");
                        document.write("<h4>Quantity</h4>");
                    document.write("</div>");
                   
                    last_fn  = foods[idx].fn
                }
                else
                {
                    if (last_fn != foods[idx].fn)
                    {   
                        document.write("<hr>");
                        document.write("<div class=" + "col-12 " + ">");
                            document.write("<h3 id=\"" + foods[idx].fn + "\"  + class=\"machineHeading\" >" + foods[idx].fn + "</h3>")
                            document.write("<ul type=\"" + foods[idx].fn + "\">")
                        document.write("</div>"); 
                        document.write("<div class=\"col-5 heading\">");
                        document.write( "<h4>Name</h4>");
                    document.write("</div>");
                    document.write("<div class=\"col-3 heading\">");
                        document.write("<h4></h4>");
                    document.write("</div>");            
                        document.write("<div class=\"col-2 heading\">");
                        document.write("<h4>Level</h4> ");
                    document.write("</div>");
                    document.write("<div class=\"col-2 heading\">");
                        document.write("<h4>Price</h4>" );
                    document.write("</div>");
                    document.write("<div class=\"col-2 heading\">");
                        document.write("<h4>Quantity</h4>");
                    document.write("</div>");
                    
                        last_fn  = foods[idx].fn
                    }
                }
                
                document.write("<div class=\"col-3 foodName\">");
                          document.write( foods[idx].en);
                        document.write("</div>");
                        document.write("<div class=\"col-2 foodPic\">");
                            document.write("<img class=\"foodPicSize\" src=\"../HD_Foods/"+ foods[idx].imgid +".png\">");
                        document.write("</div>");
                        document.write("<div class=\"col-2 foodLevel\">");
                            document.write( foods[idx].lvl );
                        document.write("</div>");
                        document.write("<div class=\"col-2 foodPrice\">");
                            document.write( foods[idx].price );
                        document.write("</div>");
                        document.write("<div class=\"col-3 quantityInput\">");
                            document.write("<input class=" + "numinp" + " type=\"number\" id=\"" + foods[idx].tag + "\" step=\"1\" min=\"0\" value=\"" + getDefaultFoodValue(foods[idx].tag) + "\" onchange=\"onFoodChange(this.id)\">" );
                        document.write("</div>");
                        
                        
            }
            
            onFoodChange()

            

  function copyToClipboard(element) {
    var $temp = $("<textarea>");
    var brRegex = /<br\s*[\/]?>/gi;
    $("body").append($temp);
    $temp.val($(element).html().replace(brRegex, "\r\n")).select();
    document.execCommand("copy");
    $temp.remove();
  }
