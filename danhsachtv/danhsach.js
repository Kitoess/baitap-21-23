function Danhsachtv() {
    const thanhvien = [
        { hovaten: "Nguyễn Nam Khánh", gioitinh: "Nam", Noisinh: "Hà Nội" },
        { hovaten: "Trần Đình Hưng Thịnh", gioitinh: "Nam", Noisinh: "Nghệ An" },
        { hovaten: "Trần Minh Long", gioitinh: "Nam", Noisinh: "Nam Định" },
        { hovaten: "Đào Thế Vũ", gioitinh: "Nam", Noisinh: "Hà Nội" },
        { hovaten: "Nguyễn Quang Huy", gioitinh: "Nam", Noisinh: "Hà Tĩnh" },
        { hovaten: "Nguyễn Công Mạnh", gioitinh: "Nam", Noisinh: "Hà Tĩnh" },
        { hovaten: "Nguyễn Việt Dương", gioitinh: "Nam", Noisinh: "Hà Nội" },
    ];
 
    const danhSach = document.getElementById("danhsachthanhvien");
 
    thanhvien.forEach((tv) => { 
        const div = document.createElement("div");
        div.className = "thanhvien";
        div.innerHTML = `
            <table>
                <tr>
                    <td>Họ và tên:</td>
                    <td>${tv.hovaten}</td>
                </tr>
                <tr>
                    <td>Giới tính:</td>
                    <td>${tv.gioitinh}</td>
                </tr>
                <tr>
                    <td>Nơi sinh:</td>
                    <td>${tv.Noisinh}</td>
                </tr>
            </table>
        `;
 
        div.style.margin = "20px";
        div.style.padding = "10px"; 
        div.style.background = "lightgray"; 
        danhSach.appendChild(div); 
    });
 }

 
Danhsachtv();
