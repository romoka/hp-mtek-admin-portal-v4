import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableMfa } from './disable-mfa';

describe('DisableMfa', () => {
  let component: DisableMfa;
  let fixture: ComponentFixture<DisableMfa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisableMfa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisableMfa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
