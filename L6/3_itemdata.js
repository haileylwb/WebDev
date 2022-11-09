function display(){
    mainImage.src = "images/" + itemList(currentItemIdx).itemImage;
    captionOutput.innerHTML = itemList[currentItemIdx].itemName;
    infoOutput.innerHTML = itemList[currentItemIdx].itemInfo;

    for(var i = 0; i < itemThumbs.length; i++)
        itemThumbs[i].src = "images/" + itemList[i + offset].itemImage;
}
function moveOffset(mod){
    offset += mod;

    if(offset < 0)
        offset = 0;
    
    if(offset >= itemList.length - 3)
        offset = itemList.length - 3;

    display();

}
function selectItem(idx){
    currentItemIdx = idx + offset;
    display();
}

pageTitle="Dragons";

itemList = [{itemName:"Rax", itemInfo:"Rax was a dragon scout who was betrayed by one of his own. Killed before his time, Rax returned as a skeleton to continue the fight.", itemImage:"rax copy.png"}, {itemName:"Ash", itemInfo:"Born in flame, Ash uses the heat of his body to wound his enemies.", itemImage:"ash copy.png"}, {itemName:"Barnabas", itemInfo:"Barnabus is the oldest and most respected of the dragons. He is wise beyond mortal years.", itemImage:"barnabas copy.png"}, {itemName:"Drake", itemInfo:"Master of the flame, Drake can fire a molten jet at distant enemies.", itemImage:"drake copy.png"}, {itemName:"Endisun", itemInfo:"With electricity coursing through his body at all times, Endisun is not only a deadly foe, but he can shoot into and out of the field of battle without his opponents even noticing.", itemImage:"endisun copy.png"}, {itemName:"Lunar", itemInfo:"Lunar's magical healing abilities makes her a formidable opponent.", itemImage:"lunar copy.png"}];
