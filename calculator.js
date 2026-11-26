const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
let historyDisplay = document.querySelector(".history");

// Hàm xử lý tính toán dựa trên nút được bấm
const calculate = (btnValue) => {
    display.focus(); // Đã thêm dấu ()

    if (btnValue === "=" && output !== "") {
        historyDisplay.innerHTML = output;
        // Chuyển sang chuỗi trước khi replace để tránh lỗi khi bấm = nhiều lần
        output = eval(output.toString().replace(/%/g, "/100"));
    } else if (btnValue === "AC") {
        output = "";
        historyDisplay.innerHTML = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        // Không cho nhập phép tính ngay từ đầu khi màn hình đang trống
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }

    // Cập nhật kết quả lên màn hình hiển thị
    display.value = output;
};

// Gắn sự kiện click cho toàn bộ các nút bấm
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});