function tinhTien() {
  let tenPhim = document.getElementById("name").value;
  let giaVeLon = +document.getElementById("adult").value;
  let soVeLon = +document.getElementById("adult__quantity").value;
  let giaVeNho = +document.getElementById("child").value;
  let soVeNho = +document.getElementById("child__quantity").value;
  let tuThien = +document.getElementById("charity").value;

  let tongVe = giaVeLon + giaVeNho;
  let tongSoVe = soVeLon + soVeNho;
  let tongDoanhThu = giaVeLon * soVeLon + giaVeNho * soVeNho;
  let tienTuThien = (tongDoanhThu * tuThien) / 100;
  let conLai = tongDoanhThu - tienTuThien;

  tongDoanhThu = tongDoanhThu.toLocaleString("en-US");
  tienTuThien = tienTuThien.toLocaleString("en-US");
  tienConLai = conLai.toLocaleString("en-US");

  //   const VND = new Intl.NumberFormat("vi-VN", {
  //     style: "currency",
  //     currency: "VND",
  //   });

  //   tienConLai = VND.format(conLai);
  //   tienTuThien = VND.format(tienTuThien);
  //   tongDoanhThu = VND.format(tongDoanhThu);

  document.getElementById("result1").innerHTML =
    "_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*";
  document.getElementById("result2").innerHTML =
    "Tên phim: " +
    "..........................................................." +
    tenPhim;
  document.getElementById("result3").innerHTML =
    "Số vé đã bán: " +
    "......................................................" +
    tongSoVe;
  document.getElementById("result4").innerHTML =
    "Doanh thu: " +
    ".........................................................." +
    tongDoanhThu +
    "đ";
  document.getElementById("result5").innerHTML =
    "Trích phần trăm từ thiện: " +
    "...................................." +
    tuThien +
    "%";
  document.getElementById("result6").innerHTML =
    "Tổng tiền trích từ thiện: " +
    "......................................" +
    tienTuThien +
    "đ";
  document.getElementById("result7").innerHTML =
    "Tổng thu được sau khi trừ: " +
    ".................................." +
    tienConLai +
    "đ";
  
    document.getElementById("result").className="out__put";
}
