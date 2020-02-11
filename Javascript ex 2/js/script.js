var listItemArray = document.getElementsByTagName("li");

listItemArray[0].innerHTML = listItemArray[0].innerHTML + " " + add_two_numbers(5, 7);

listItemArray[1].innerHTML = listItemArray[1].innerHTML + " " + mul_three_numbers(5, 8, 7);
// etc.



//Write you function declarations below this line
function add_two_numbers(n1, n2) {
    return n1 + n2;
}
// etc.