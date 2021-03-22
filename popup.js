let modalHeading = document.getElementById('modalHeading');
let vI = document.getElementById('version-id');
let cursorBool = true;
let cursor = document.getElementById('cursor');

let arr = "Cyborg Navigation".split('');
let i = 0;

function blink() {
    if (i == arr.length - 1) {
        clearInterval(intervalID);
    }
    if (cursorBool) {
        let cursor = document.getElementById('cursor');
        cursor.style.opacity = '0.0';
        cursorBool = false;
    } else {
        let cursor = document.getElementById('cursor');
        cursor.style.opacity = '1';
        cursorBool = true;
    }

    modalHeading.append(arr[i]);
    i++;
}



let intervalID = setInterval(blink, 200);

let arrV = "(1.0.0)".split("");
setTimeout(versionInterval, 3500);

let versionIntervalId;

function versionInterval() {
    versionIntervalId = setInterval(versionSet, 200);
}
let k = 0;

function versionSet() {
    if (k == arrV.length - 1) {
        clearInterval(versionIntervalId);
    }
    vI.append(arrV[k]);
    k++;
}