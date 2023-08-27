import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
  NonNullableFormBuilder,
  FormControl,
} from "@angular/forms";
import { LogForm } from "../../models/LogForm";
import { CustomvalidationService } from "../../services/customvalidation.service";
import { UserNameValidationService } from "../../services/user-name-validation.service";
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../app-state';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as todoActions from '../../../../app-state/actions';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  protected logForm!: FormGroup<LogForm>;
  protected submitted = false;
  user: any;
  logs?: any[] = [];

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private router: Router, private readonly store: Store
  ) {
    this.store.select(fromRoot.getLoggedInUser).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => this.user = data.user);

    this.store.select(fromRoot.getLogs).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => this.logs = data.logs);
  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.logForm = this.formBuilder.group(
      {
        diaDiem: new FormControl("", Validators.required),
        ngay: new FormControl("", [Validators.required]),
        thang: new FormControl("", [Validators.required]),
        nam: new FormControl("", [Validators.required]),
        kinhGui: new FormControl("", [Validators.required]),
        tenDuAn: new FormControl("", [Validators.required]),
        goiThauSo: new FormControl("", [Validators.required]),
        tenGoiThau: new FormControl("", [Validators.required]),
        hangMuc: new FormControl("", [Validators.required]),
        viTriMong: new FormControl("", [Validators.required]),
        loaiMong: new FormControl("", [Validators.required]),
        loaiTiepDia: new FormControl("", [Validators.required]),
        loaiBuLongNeo: new FormControl("", [Validators.required]),
        doiTuongNghiemThu: new FormControl("", [Validators.required]),
        ketQuaNghiemThuNB: new FormControl("", [Validators.required]),
        thoiGian: new FormControl("", [Validators.required]),
        diaDiemNghiemThu: new FormControl("", [Validators.required]),
        nguoiLienHe: new FormControl("", [Validators.required]),
        chucVu: new FormControl("", [Validators.required]),
        daiDien: new FormControl("", [Validators.required]),
      },
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  protected get logFormControl() {
    return this.logForm.controls;
  }

  protected onSubmit(): void {
    this.submitted = true;

    if (this.logForm.valid) {
      alert(
        "Form Submitted succesfully!!!\n Check the values in browser console."
      );
      console.table(this.logForm.value);
    }
    console.log(this.logForm.value);
    const log = {
      diaDiem: this.logForm.value.diaDiem,
      ngay: this.logForm.value.ngay,
      thang: this.logForm.value.thang,
      nam: this.logForm.value.nam,
      kinhGui: this.logForm.value.kinhGui,
      tenDuAn: this.logForm.value.tenDuAn,
      goiThauSo: this.logForm.value.goiThauSo,
      tenGoiThau: this.logForm.value.tenGoiThau,
      hangMuc: this.logForm.value.tenDuAn,
      viTriMong: this.logForm.value.viTriMong,
      loaiMong: this.logForm.value.loaiMong,
      loaiTiepDia: this.logForm.value.loaiTiepDia,
      loaiBuLongNeo: this.logForm.value.loaiBuLongNeo,
      doiTuongNghiemThu: this.logForm.value.doiTuongNghiemThu,
      ketQuaNghiemThuNB: this.logForm.value.ketQuaNghiemThuNB,
      thoiGian: this.logForm.value.thoiGian,
      diaDiemNghiemThu: this.logForm.value.diaDiemNghiemThu,
      nguoiLienHe: this.logForm.value.nguoiLienHe,
      chucVu: this.logForm.value.chucVu,
      daiDien: this.logForm.value.daiDien,
    };
    this.store.dispatch(todoActions.createLog({log}));
  }

  protected resetForm(): void {
    this.logForm.reset();
  }
}
