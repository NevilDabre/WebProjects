var slideimages = new Array();
var slidelinks = new Array();
slideshowimages("img/image1.jpg", "img/image2.jpg","img/image3.jpg","img/image4.jpg","img/image5.jpg","img/image6.jpg");
slideshowlinks("http://tremdocorcovado.rio/", "http://www.greatwall-of-china.com/","http://www.tickitaly.com/galleries/colosseum-rome-italy.php","http://www.machupicchu.gob.pe/","http://www.tajmahal.gov.in/","http://en.egypt.travel/attraction/index/giza-plateau");

function slideshowimages()
		{
			for (i=0; i < slideshowimages.arguments.length; i++)
			{
				slideimages[i]=new Image();
				slideimages[i].src=slideshowimages.arguments[i];
			}
		}
		
function slideshowlinks()
		{	
			for (i=0; i < slideshowlinks.arguments.length; i++)
			{
					slidelinks[i]=slideshowlinks.arguments[i];
			}
		}
function gotoshow()
		{
			if (!window.winslide||winslide.closed)
				winslide=window.open(slidelinks[whichlink]);
			else
				winslide.location=slidelinks[whichlink];
				winslide.focus();
		}

var slideshowspeed=3000;
var whichlink=0;
var whichimage=0;

function slideit()

		{
				if (!document.images)
					return;
					document.images.slide.src=slideimages[whichimage].src;
					whichlink=whichimage;
				if (whichimage < slideimages.length-1)
					whichimage++;
				else
					whichimage=0;
					setTimeout("slideit()",slideshowspeed);
		}
		