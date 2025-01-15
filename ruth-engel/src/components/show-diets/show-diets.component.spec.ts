import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDietsComponent } from './show-diets.component';

describe('ShowDietsComponent', () => {
  let component: ShowDietsComponent;
  let fixture: ComponentFixture<ShowDietsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowDietsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDietsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
