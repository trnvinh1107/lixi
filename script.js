var count = 0;
document.getElementById("btn-cook").addEventListener("mouseover", function () {
  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");
  var btnOke = document.getElementById("btn-oke");
  var btnCook = document.getElementById("btn-cook");
  if (count != 0) {
    btnCook.style.transform += "translateX(-150px)";
    btnCook.style.transform += "translateY(-100px)";
    btnOke.style.transform = "translateX(130px)";
    // Lấy chiều cao hiện tại của button
    var currentHeight = btnOke.offsetHeight;
    var currentWidth = btnOke.offsetWidth;
    var currentTop = btnOke.offsetTop;
    // Tăng chiều cao thêm 30px
    btnOke.style.top = currentTop - 25 + "%";
    btnOke.style.height = currentHeight + 15 + "px";
    btnOke.style.width = currentWidth + 15 + "px";
    //btn-cook
    // Lấy chiều cao hiện tại của button
    var currentHeight_cook = btnCook.offsetHeight;
    var currentWidth_cook = btnCook.offsetWidth;
    // Tăng chiều cao thêm 30px
    btnCook.style.height = currentHeight_cook - 5 + "px";
    if (count > 1) btnCook.style.width = currentWidth_cook - 20 + "px";
    // else btnCook.style.width = currentWidth_cook - 20 + "px";
    var currentFontSize = parseFloat(window.getComputedStyle(this).fontSize); // Get the current font size as a number
    var newFontSize = currentFontSize - 5; // Decrease the font size by 10px
    btnCook.style.fontSize = newFontSize + "px";
  } else {
    var parentElement = btnOke.parentElement;
    var temp = document.createElement("div");
    parentElement.insertBefore(temp, btnOke);
    parentElement.insertBefore(btnCook, temp);
    parentElement.insertBefore(btnOke, btnCook);
    parentElement.removeChild(temp);
    btnCook.style.marginRight = "0";
    btnOke.style.marginRight = "150px";
  }
  count++;
  console.log(count);
});
document.getElementById("btn-oke").addEventListener("mouseover", function () {
  if (count != 1) {
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "block";
  }
});
document.getElementById("btn-oke").addEventListener("mouseout", function () {
  if (count != 1) {
    document.getElementById("img1").style.display = "block";
    document.getElementById("img2").style.display = "none";
  }
});
document.getElementById("btn-oke").addEventListener("click", function () {
  document.getElementById("myForm").style.display = "block";
  document.body.style.backgroundColor = "rgb(181, 20, 119)";
});
