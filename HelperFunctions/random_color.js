// Generates a random hex color

function random_color()
{
   var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
   color = '#'  //this is what we'll return!
   for(var i = 0; i < 6; i++)
   {
	  x = Math.floor((Math.random()*16))
	  color += rgb[x];
   }
   return color;
}
