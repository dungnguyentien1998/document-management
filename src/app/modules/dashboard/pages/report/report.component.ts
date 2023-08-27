import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
  NonNullableFormBuilder,
  FormControl,
} from "@angular/forms";
import { ReportForm } from "../../models/userRegistration";
import { CustomvalidationService } from "../../services/customvalidation.service";
import { UserNameValidationService } from "../../services/user-name-validation.service";
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../app-state';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as todoActions from '../../../../app-state/actions';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  protected reportForm!: FormGroup<ReportForm>;
  protected submitted = false;
  user: any;
  reports?: any[] = [];

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private router: Router, private readonly store: Store
  ) {
    this.store.select(fromRoot.getLoggedInUser).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => this.user = data.user);

    this.store.select(fromRoot.getReports).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => this.reports = data.reports);
  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.reportForm = this.formBuilder.group(
      {
        diaDiem: new FormControl("", Validators.required),
        ngay: new FormControl("", [Validators.required]),
        thang: new FormControl("", [Validators.required]),
        nam: new FormControl("", [Validators.required]),
        loaiBienBan: new FormControl("", [Validators.required]),
        tenBienBan: new FormControl("", [Validators.required]),
        goiThauSo: new FormControl("", [Validators.required]),
        tenGoiThau: new FormControl("", [Validators.required]),
        tenDuAn: new FormControl("", [Validators.required]),
        viTriMong: new FormControl("", [Validators.required]),
        tenLoaiMong: new FormControl("", [Validators.required]),
        tenKhoangNeo: new FormControl("", [Validators.required]),
        batDau: new FormControl("", [Validators.required]),
        ketThuc: new FormControl("", [Validators.required]),
        daiDienNhaThau: new FormControl("", [Validators.required]),
        danhGia: new FormControl("", [Validators.required]),
        ketLuan: new FormControl("", [Validators.required]),
        doiTruongThiCong: new FormControl("", [Validators.required]),
        tuvanGiamSat: new FormControl("", [Validators.required]),
        quanLyVanHanh: new FormControl("", [Validators.required]),
        chiHuyTruong: new FormControl("", [Validators.required]),
        kyThuatB: new FormControl("", [Validators.required]),
        giamSatThiCong: new FormControl("", [Validators.required]),
        hoSoTaiLieu: new FormControl("", [Validators.required]),
      },
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  protected get reportFormControl() {
    return this.reportForm.controls;
  }

  protected onSubmit(): void {
    this.submitted = true;

    if (this.reportForm.valid) {
      alert(
        "Form Submitted succesfully!!!\n Check the values in browser console."
      );
      console.table(this.reportForm.value);
    }
    console.log(this.reportForm.value);
    const report = {
      diaDiem: this.reportForm.value.diaDiem,
      ngay: this.reportForm.value.ngay,
      thang: this.reportForm.value.thang,
      nam: this.reportForm.value.nam,
      loaiBienBan: this.reportForm.value.loaiBienBan,
      tenBienBan: this.reportForm.value.tenBienBan,
      goiThauSo: this.reportForm.value.goiThauSo,
      tenGoiThau: this.reportForm.value.tenGoiThau,
      tenDuAn: this.reportForm.value.tenDuAn,
      viTriMong: this.reportForm.value.viTriMong,
      tenLoaiMong: this.reportForm.value.tenLoaiMong,
      tenKhoangNeo: this.reportForm.value.tenKhoangNeo,
      batDau: this.reportForm.value.batDau,
      ketThuc: this.reportForm.value.ketThuc,
      daiDienNhaThau: this.reportForm.value.daiDienNhaThau,
      danhGia: this.reportForm.value.danhGia,
      ketLuan: this.reportForm.value.ketLuan,
      doiTruongThiCong: this.reportForm.value.doiTruongThiCong,
      tuvanGiamSat: this.reportForm.value.tuvanGiamSat,
      quanLyVanHanh: this.reportForm.value.quanLyVanHanh,
      chiHuyTruong: this.reportForm.value.chiHuyTruong,
      kyThuatB: this.reportForm.value.kyThuatB,
      giamSatThiCong: this.reportForm.value.giamSatThiCong,
      hoSoTaiLieu: this.reportForm.value.hoSoTaiLieu,
    };
    this.store.dispatch(todoActions.createReport({report}));
  }

  protected resetForm(): void {
    this.reportForm.reset();
  }
}
