var text="SERVER MONKS"
var speed = 50
var i = 0;
var heading = ""
function movetext()
{
    if(i<text.length)
    {
        heading += text[i]
        $('#movingtext').html(heading)
        i++
        setTimeout(movetext,speed)
        
    }
    
}
movetext()


