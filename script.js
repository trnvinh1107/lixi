var count = 0;
document.getElementById("btn-cook").addEventListener("mouseover", function () {
  if (count != 0) {
    document.getElementById("img2").style.display = "none";
    document.getElementById("img1").style.display = "block";
    document.getElementById("btn-cook").style.transform += "translateX(-90px)";
    document.getElementById("btn-cook").style.transform += "translateY(-50px)";
    document.getElementById("btn-oke").style.transform = "translateX(130px)";
    var btnOke = document.getElementById("btn-oke");
    // Lấy chiều cao hiện tại của button
    var currentHeight = btnOke.offsetHeight;
    var currentWidth = btnOke.offsetWidth;
    var currentTop = btnOke.offsetTop;
    // Tăng chiều cao thêm 30px
    btnOke.style.top = currentTop - 25 + "%";
    btnOke.style.height = currentHeight + 20 + "px";
    btnOke.style.width = currentWidth + 20 + "px";
  } else {
    var btnOke = document.getElementById("btn-oke");
    var btnCook = document.getElementById("btn-cook");
    var parentElement = btnOke.parentElement;

    // Lưu trữ vị trí của btnCook1 trong parentElement
    var temp = document.createElement("div");
    parentElement.insertBefore(temp, btnOke);

    // Di chuyển btnCook2 đến vị trí của btnCook1
    parentElement.insertBefore(btnCook, temp);

    // Di chuyển btnCook1 đến vị trí của btnCook2
    parentElement.insertBefore(btnOke, btnCook);

    // Xóa phần tử tạm thời
    parentElement.removeChild(temp);
    btnCook.style.marginRight = "0";
    btnOke.style.marginRight = "35%";
  }
  count++;
});
document.getElementById("btn-oke").addEventListener("mouseover", function () {
  if (count != 1) {
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "block";
  }
});
document.getElementById("btn-oke").addEventListener("click", function () {
  document.getElementById("myForm").style.display = "block";
  document.body.style.backgroundColor = "rgb(181, 20, 119)";
});
