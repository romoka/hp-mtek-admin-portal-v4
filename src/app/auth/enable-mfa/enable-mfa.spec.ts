import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableMfa } from './enable-mfa';

describe('EnableMfa', () => {
  let component: EnableMfa;
  let fixture: ComponentFixture<EnableMfa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnableMfa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnableMfa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
