//This file is for the header in the index or homepage



$('.head').addClass('original').clone().insertAfter('.head').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

//Init scrolling
//inPageNav();


let scrollIntervalID = setInterval(stickIt, 10);

var count = 0;
function stickIt() {

  let orgElementPos = $('.original').offset();
  let orgElementTop = orgElementPos.top;

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.
    let orgElement = $('.original'),
    coordsOrgElement = orgElement.offset(),
    leftOrgElement = coordsOrgElement.left,
    widthOrgElement = orgElement.css('width');
    
    while(count < 1){     
      console.log(count);
      count = count+1;
    $('.cloned .navbar-brand').append('<a href="' + "index.html" + '">' +'<h1> <i class="fas fa-syringe"></i> VaccinesTruth'+ '</a>');
    
    }
    // $('.cloned .navbar-brand').html('<h1> <i class="fas fa-syringe"></i> VaccinesTruth');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();

    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}


//Copyright (c) 2016 by Mark Senff (http://codepen.io/senff/pen/ayGvD)
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
