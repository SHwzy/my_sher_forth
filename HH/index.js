      var div = document.querySelector('div');
      var ul = document.querySelector('ul');
      var list = document.querySelector("#list");
      var lis = list.querySelectorAll('li');
      var index = 0;

      function auto(){
        timer = setInterval(function(){
          index++;
          if(index>=lis.length){
            index = 0;
          }
          change(index);
        },2000);
      }
      auto();

      function change(curIndex){
        ul.style.marginTop =-300*curIndex + 'px';
        for(var i = 0; i< lis.length;i++)
        {
          lis[i].className=' ';
        }
        lis[curIndex].className = 'on';
      }

      div.onmouseover = function(){
        ul.style.cursor = 'pointer';
        clearInterval(timer)
      }
      
      div.onmouseout = auto;

      for(var i=0;i<=lis.length;i++)
      {
        lis[i].index=i;
        lis[i].onmouseover= function(){
          change(this.index);
        }
      }

