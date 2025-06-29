import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yourinfo } from './yourinfo';

describe('Yourinfo', () => {
  let component: Yourinfo;
  let fixture: ComponentFixture<Yourinfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Yourinfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Yourinfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
