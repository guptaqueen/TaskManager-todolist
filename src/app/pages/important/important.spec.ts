import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Important } from './important';

describe('Important', () => {
  let component: Important;
  let fixture: ComponentFixture<Important>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Important]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Important);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
