import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftDualCardComponent } from './nft-dual-card.component';

describe('NftDualCardComponent', () => {
  let component: NftDualCardComponent;
  let fixture: ComponentFixture<NftDualCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftDualCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftDualCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
