function openExp(classNm,tabClass, tabId,experience){
    var tab = document.getElementsByClassName(tabClass);
    for(let index=0; index< tab.length;index++ ){
        tab[index].style.backgroundColor='azure';
    }
    document.getElementById(tabId).style.backgroundColor='#ccfcf8';
   
    var details = document.getElementsByClassName(classNm);
    
    for(let index=0; index< details.length;index++ ){
        details[index].style.display='none';
    }
    var x = document.getElementById(experience);
    x.style.display='block';
}