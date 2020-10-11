function personality()
{
	const name=document.getElementById('nameid').value;
	document.getElementById('imgid').src="https://joeschmoe.io/api/v1/"+name;
}

function reset()
{
	document.getElementById('nameid').value="";
	document.getElementById('imgid').src="img.gif"
}