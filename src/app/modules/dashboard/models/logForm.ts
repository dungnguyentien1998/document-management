import { FormControl } from "@angular/forms";

export interface LogForm {
  diaDiem: FormControl<string | null>;
  ngay: FormControl<string | null>;
  thang: FormControl<string | null>;
  nam: FormControl<string | null>;
  kinhGui: FormControl<string | null>;
  tenDuAn: FormControl<string | null>;
  goiThauSo: FormControl<string | null>;
  tenGoiThau: FormControl<string | null>;
  hangMuc: FormControl<string | null>;
  viTriMong: FormControl<string | null>;
  loaiMong: FormControl<string | null>;
  loaiTiepDia: FormControl<string | null>;
  loaiBuLongNeo: FormControl<string | null>;
  doiTuongNghiemThu: FormControl<string | null>;
  ketQuaNghiemThuNB: FormControl<string | null>;
  thoiGian: FormControl<string | null>;
  diaDiemNghiemThu: FormControl<string | null>;
  nguoiLienHe: FormControl<string | null>;
  chucVu: FormControl<string | null>;
  daiDien: FormControl<string | null>;
}
