today = new Date();
document.write(today);

switch(today.getSeconds() % 4){
    
    case 0: document.bgColor = "blue";
        break;

    case 1: document.bgColor = "red";
        break;

    case 2: document.bgColor = "yellow";
        break;

    default:
        document.bgColor = "black";
}