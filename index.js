// Code your solution in this file!
function distanceFromHqInBlocks(pickuplocation){
    let x = pickuplocation - 42;
    return Math.abs(x)

}
console.log(distanceFromHqInBlocks(50))

function distanceFromHqInFeet(blocksfromhq){
    return distanceFromHqInBlocks(blocksfromhq) * 264
    
}
console.log(distanceFromHqInFeet(43))

function distanceTravelledInFeet(start, destination){
    let x = (destination - start) * 264;
    return Math.abs(x)
    
}
console.log(distanceTravelledInFeet(34, 38))

function calculatesFarePrice(start, destination){
    let x = distanceTravelledInFeet(start, destination)
    let y = x - 400
    //y to represent the distance over 400 feet
    if (x > 2500){
        return 'cannot travel that far';
    }
     if(y > 400 || y <= 2000){
        return y * 0.02
    }
     if(x > 2000 && x <=2500){
        return 25
    }
     if(x >= 0 && x < 400){
        return 0
    }

    
}
console.log(calculatesFarePrice(50,58))