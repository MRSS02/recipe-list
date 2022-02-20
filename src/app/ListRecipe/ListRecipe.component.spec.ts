import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecipeComponent } from './ListRecipe.component';

describe('ListRecipeComponent', () => {
  let component: ListRecipeComponent;
  let fixture: ComponentFixture<ListRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
