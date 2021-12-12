Name_of_students=[];

function Es(){
    var display_Array=[];
    for (var counterio =1;counterio<=5;counterio++){
        var displaynameio =document.getElementById("displaynameio"+counterio).value;
      console.log(displaynameio);
      Name_of_students.push(displaynameio);
    }
    console.log(Name_of_students);
    
    var L_O_A=Name_of_students.length;
    console.log(L_O_A);
    for (var i = 1;i<=5;i++){
        display_Array.push("<h4>Name- "+Name_of_students[i] +"</h4>");
        console.log(display_Array);
    }
    console.log(display_Array);
    document.getElementById("show").innerHTML=display_Array;

    var takeaway=display_Array.join("  ");
    console.log(takeaway);
    document.getElementById("remove_c").innerHTML=takeaway;
}

function Ar(){
    Name_of_students.sort();
    document.getElementById("show").innerHTML=Name_of_students;
    
}
