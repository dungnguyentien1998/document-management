import { FormControl } from "@angular/forms";

export interface RequestForm {
  diaDiem: FormControl<string | null>;
  ngay: FormControl<string | null>;
  thang: FormControl<string | null>;
  nam: FormControl<string | null>;
  tenNhatKy: FormControl<string | null>;
  goiThauSo: FormControl<string | null>;
  tenGoiThau: FormControl<string | null>;
  tenDuAn: FormControl<string | null>;
  viTriMong: FormControl<string | null>;
  loaiMong: FormControl<string | null>;
  khoangNeo: FormControl<string | null>;
  banVeThiCongSo: FormControl<string | null>;
  batDau: FormControl<string | null>;
  ketThuc: FormControl<string | null>;
  danhGia: FormControl<string | null>;
  tuVanGiamSat: FormControl<string | null>;
  kyThuatB: FormControl<string | null>;
}
