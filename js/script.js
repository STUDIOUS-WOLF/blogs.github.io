
 function myFunction()
 {
	 document.getElementById("nav").classList.toggle("show");
 }
 window.onclick=function(event)
 {
	 if(!event.target.matches('.btn'))
	 {
		 var dropdowns = document.getElementsByClassName("navElements");
		 var i;
		 for(i=0;i<dropdowns.length;i++)
		 {
			 var openDropdown=dropdowns[i];
			 if(openDropdown.classList.contains('show'))
			 {
				 openDropdown.classList.remove('show');
			 }
		 }	 
	}
 }
 var swiper = new Swiper('.swiper-container', 
{
	pagination: 
	{
		el: '.swiper-pagination',
		    dynamicBullets: true,
	},
	autoplay: 
	{
		delay: 3400,
		speed: 300,
	},
});
