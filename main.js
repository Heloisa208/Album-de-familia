var  image =
["download (9).jpg","download (10).jpg", "bebe.png","download (11).jpg"]
 
var names = ["Carla Rodrigues","Roberto Rodrigues","Eduardo Rodrigues","Ana Rodrigues"]

var i = 0;
function update()
{
    i++;
    var numbersOffFamilyMemberInArray = 4
     if(i > numbersOffFamilyMemberInArray)
     {
        i = 0;
     }
     var updateImage = image[i];
     var updatedName = names[i]
     document.getElementById("imagem").src = updateImage;
    document.getElementById("familyMemberName").innerHTML = updatedName;
}