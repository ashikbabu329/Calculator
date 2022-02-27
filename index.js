

function insertNumber(number){

    var a=$('#result').val()
$('#result').val( a + number)
}


function clearResult(){
    $('#result').val('')
}
function calculate(){
    var result = eval($('#result').val())
    $('#result').val(result)
}

function deletNum(){
var b =$('#result').val();
if($('#result')!=('')){
    $('#result').val($('#result').val().slice(0,-1)) 
}
}