const display=document.getElementById("display");
function addtodisplay(input)
{
display.value+=input;
}
function cleardisplay()
{
    display.value="";
}
function result()
{
    try
    {
    display.value=eval(display.value);
    }
    catch
    {
        display.value="error";
    }
}
function removetodisplay()
{
    display.value="";
}