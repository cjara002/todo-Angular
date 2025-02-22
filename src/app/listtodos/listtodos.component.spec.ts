import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtodosComponent } from './listtodos.component';

describe('ListtodosComponent', () => {
  let component: ListtodosComponent;
  let fixture: ComponentFixture<ListtodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListtodosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListtodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
