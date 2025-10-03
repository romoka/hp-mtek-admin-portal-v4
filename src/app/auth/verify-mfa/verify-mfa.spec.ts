import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyMfa } from './verify-mfa';

describe('VerifyMfa', () => {
  let component: VerifyMfa;
  let fixture: ComponentFixture<VerifyMfa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyMfa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyMfa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
