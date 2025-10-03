import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMfaRecoveryPassword } from './set-mfa-recovery-password';

describe('SetMfaRecoveryPassword', () => {
  let component: SetMfaRecoveryPassword;
  let fixture: ComponentFixture<SetMfaRecoveryPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetMfaRecoveryPassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetMfaRecoveryPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
