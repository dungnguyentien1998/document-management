import { FormControl } from "@angular/forms";

export interface ReportForm {
  diaDiem: FormControl<string | null>;
  ngay: FormControl<string | null>;
  thang: FormControl<string | null>;
  nam: FormControl<string | null>;
  loaiBienBan: FormControl<string | null>;

  tenBienBan: FormControl<string | null>;
  goiThauSo: FormControl<string | null>;
  tenGoiThau: FormControl<string | null>;
  tenDuAn: FormControl<string | null>;
  viTriMong: FormControl<string | null>;
  tenLoaiMong: FormControl<string | null>;
  tenKhoangNeo: FormControl<string | null>;
  batDau: FormControl<string | null>;
  ketThuc: FormControl<string | null>;
  daiDienNhaThau: FormControl<string | null>;
  danhGia: FormControl<string | null>;
  ketLuan: FormControl<string | null>;
  doiTruongThiCong: FormControl<string | null>;
  tuvanGiamSat: FormControl<string | null>;
  quanLyVanHanh: FormControl<string | null>;
  chiHuyTruong: FormControl<string | null>;
  kyThuatB: FormControl<string | null>;
  giamSatThiCong: FormControl<string | null>;
  hoSoTaiLieu: FormControl<string | null>;
}
