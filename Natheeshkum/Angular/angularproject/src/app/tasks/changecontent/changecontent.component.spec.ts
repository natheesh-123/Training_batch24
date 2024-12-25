import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangecontentComponent } from './changecontent.component';

describe('ChangecontentComponent', () => {
  let component: ChangecontentComponent;
  let fixture: ComponentFixture<ChangecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangecontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
