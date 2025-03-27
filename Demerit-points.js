CheckSpeed(200)

function CheckSpeed(speed){
    const speedlimit = 70;
    const KmPerPoint = 5;
    if (speed < speedlimit + KmPerPoint){
        console.log('Ok');
        return;
    }
    const point = Math.floor((speed - speedlimit) / KmPerPoint);
    if (point >= 12)
        console.log('License Suspended');
    else
        console.log('points:', point);
}