function initialize(){
    outBox = document.getElementById("outbox");
    foodSelectionBox = document.getElementById("foodsel");
    duplicatesBox = document.getElementById("dupes");
    countBox = document.getElementById("count");

    foodList = ["Lettuce", "Cheese", "Bacon", "Salmon", "Tuna"];
    dupesList = [];
    dupesCount = 0;

    display();
}
function display(){
    outBox.innerHTML = "0: " + foodList[0];
    for (let i = 1; i < foodList.length; i++)
        outBox.innerHTML += "<br />" + i + ": " + foodList[i];
    
        duplicatesBox.innerHTML = dupesList;
        countBox.innerHTML = dupesCount;
}
function addFood(){
    if(!foodList.includes(foodSelectionBox.value)){
        foodList.push(foodSelectionBox.value);
        display();
    }
}
function countDuplicates(array, itm){
    let itmCount = 0;

    for (let i = 0; i < array.length; i++)
        if (itm === array[i])
            itmCount++;
    return itmCount;
}
function indexesOf(array, itm){
    let idxList = [];

    for (let i = 0; i < array.length; i++)
        if (itm === array[i])
            idxList.push(i);
    return idxList;
}
function deleteItem(){
    if(foodList.includes(foodSelectionBox.value)){
        foodList.splice(indexesOf(foodList, foodSelectionBox.value), 1);
        display();
    }
}
function array_moveUp(new_indexP) {
    let old_index = parseInt(foodSelectionBox.value);
    let new_index = old_index + parseInt(new_indexP);
    if(new_index < 0){
        return;
    }
    if(new_index > foodList.length-1){
        new_index--;
        return;
    }
    foodList.splice(new_index, 0, foodList.splice(old_index, 1)[0]);
    foodSelectionBox.value = new_index;
    display();
};
