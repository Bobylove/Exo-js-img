var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};
function main(){
	$("button").click(function(){
		var dataAnimal = $(this).data('animal');
		var pet =  species[dataAnimal];
		$("img").attr('src', "img/" + pet);
	});
}
$(document).ready(function(){
	main();
});