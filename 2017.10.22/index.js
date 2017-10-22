/**
 * index
 */
define(function(require) {
	var $ = require('jquery');
	var base = require('base');
	var com = require('./common');
  
  // 下拉
  // $('.lan_menu').hover(function(){
  //   $('.pageHeader .language').css(dis)
  // },function(){})
  
  function chang(){
    //改变类名
    this.data();
    this.fixTop('.pageHeader','fixed','.pageHeader .navs');
    this.touchMove('.part3_item','cur');
    this.drop('.part4_control','.part4_item');
  }
  chang.prototype = {
    data: function(){
      this.top = 0;
      this.flagn = true;
      this.flagp = true;
      console.log(this.top);
    },
    fixTop : function(sta,clas,tar){
      var that = this;
      $(window).scroll(function(){
        that.top = $(document).scrollTop();
        var height = $(sta).height();
        if(that.top>height){
          $(tar).addClass(clas);
        }else{
          $(tar).removeClass(clas);
        }
      })
    },
    touchMove: function(tar,cls){
      var obj = $(tar);
      obj.mouseenter(function(){
        $(this).siblings().removeClass(cls).end().addClass(cls);
      })
    },
    drop: function(tar,star){
      var tar = tar || '';
      var star = star || '';
      var that = this;
      if(base.getType() == 'Pc'){
        if(base.browser.ie>9){
          var height= $(star).height();
          var len = $(star).length;
          if(len>3){
            $(tar).css('display','block')
          }
          var offset = 0; 
          var obj = $(star).parent();
          var bottom = -(len - 3)*height;
          var current = 0;
          that.part4Jus(tar,current,bottom);
          $(tar).find('.part4_next').on('click',function(){
            
            if(that.flagn){
              offset+=height;
              that.part4Move(obj,offset);
              
            }
            //current = parseInt(obj.css('top'));
            //console.log(current)
            that.part4Jus(tar,offset,bottom);
          })
          $(tar).find('.part4_prev').on('click',function(){
           
            if(that.flagp){
              offset-=height;
              that.part4Move(obj,offset);
            }
            //current = parseInt(obj.css('top'));
            that.part4Jus(tar,offset,bottom);
          })
        }else{

        }
      }
    },
    part4Move: function(obj,distance){
      obj.animate({'top':'-'+distance+'px'})
    },
    part4Jus: function(tar,offset,bottom){
      if(-offset<=bottom){
        $(tar).find('.part4_next').addClass('none');
       this.flagn = false;
      }else{
        $(tar).find('.part4_next').removeClass('none');
        this.flagn = true;
      }
      console.log(offset);
      if (offset <= 0){
        $(tar).find('.part4_prev').addClass('none');
        this.flagp = false;
      }else{
        $(tar).find('.part4_prev').removeClass('none');
        this.flagp = true;
      }
    }
  }

  var chang = new chang();
  
//   require('superslide');
// if (base.getType() == 'Mobile') {
//        $(".p3").slider({
//         mainCell: ".p3_scroll ul",
//         autoPage: true,
//         effect: "left",
//         autoPlay: false,
//         scroll: 1,
//         vis: 1
//     });
//     } else if(base.getType() == 'Pc') {
//         $(".p3").slider({
//         mainCell: ".p3_scroll ul",
//         autoPage: true,
//         effect: "left",
//         autoPlay: false,
//         scroll: 4,
//         vis: 4
//     });
//     }else{
//         $(".p3").slider({
//         mainCell: ".p3_scroll ul",
//         autoPage: true,
//         effect: "left",
//         autoPlay: false,
//         scroll: 1,
//         vis: 3
//          });
//     }





})