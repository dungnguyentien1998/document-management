import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
  NonNullableFormBuilder,
  FormControl,
} from "@angular/forms";
import { RequestForm } from "../../models/requestForm";
import { CustomvalidationService } from "../../services/customvalidation.service";
import { UserNameValidationService } from "../../services/user-name-validation.service";
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../app-state';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as todoActions from '../../../../app-state/actions';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  protected requestForm!: FormGroup<RequestForm>;
  protected submitted = false;
  user: any;
  requests?: any[] = [];

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private router: Router, private readonly store: Store
  ) {
    this.store.select(fromRoot.getLoggedInUser).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => this.user = data.user);

    this.store.select(fromRoot.getRequests).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => this.requests = data.requests);
  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.requestForm = this.formBuilder.group(
      {
        diaDiem: new FormControl("", Validators.required),
        ngay: new FormControl("", [Validators.required]),
        thang: new FormControl("", [Validators.required]),
        nam: new FormControl("", [Validators.required]),
        tenNhatKy: new FormControl("", [Validators.required]),
        goiThauSo: new FormControl("", [Validators.required]),
        tenGoiThau: new FormControl("", [Validators.required]),
        tenDuAn: new FormControl("", [Validators.required]),
        viTriMong: new FormControl("", [Validators.required]),
        loaiMong: new FormControl("", [Validators.required]),
        khoangNeo: new FormControl("", [Validators.required]),
        banVeThiCongSo: new FormControl("", [Validators.required]),
        batDau: new FormControl("", [Validators.required]),
        ketThuc: new FormControl("", [Validators.required]),
        danhGia: new FormControl("", [Validators.required]),
        tuVanGiamSat: new FormControl("", [Validators.required]),
        kyThuatB: new FormControl("", [Validators.required]),
      },
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  protected get requestFormControl() {
    return this.requestForm.controls;
  }

  protected onSubmit(): void {
    this.submitted = true;

    if (this.requestForm.valid) {
      alert(
        "Form Submitted succesfully!!!\n Check the values in browser console."
      );
      console.table(this.requestForm.value);
    }
    console.log(this.requestForm.value);
    const request = {
      diaDiem: this.requestForm.value.diaDiem,
      ngay: this.requestForm.value.ngay,
      thang: this.requestForm.value.thang,
      nam: this.requestForm.value.nam,
      tenNhatKy: this.requestForm.value.tenNhatKy,

      goiThauSo: this.requestForm.value.goiThauSo,
      tenGoiThau: this.requestForm.value.tenGoiThau,
      tenDuAn: this.requestForm.value.tenDuAn,

      viTriMong: this.requestForm.value.viTriMong,
      loaiMong: this.requestForm.value.loaiMong,
      khoangNeo: this.requestForm.value.khoangNeo,
      banVeThiCongSo: this.requestForm.value.banVeThiCongSo,
      batDau: this.requestForm.value.batDau,
      ketThuc: this.requestForm.value.ketThuc,
      danhGia: this.requestForm.value.danhGia,
      tuVanGiamSat: this.requestForm.value.tuVanGiamSat,
      kyThuatB: this.requestForm.value.kyThuatB,

    };
    this.store.dispatch(todoActions.createRequest({request}));
  }

  protected resetForm(): void {
    this.requestForm.reset();
  }
}
