import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamperModelsComponent } from './camper-models.component';

describe('CamperModelsComponent', () => {
  let component: CamperModelsComponent;
  let fixture: ComponentFixture<CamperModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamperModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamperModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
