import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeimageComponent } from './changeimage.component';

describe('ChangeimageComponent', () => {
  let component: ChangeimageComponent;
  let fixture: ComponentFixture<ChangeimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeimageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
