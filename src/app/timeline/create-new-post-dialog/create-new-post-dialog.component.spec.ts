import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPostDialogComponent } from './create-new-post-dialog.component';

describe('CreateNewPostDialogComponent', () => {
  let component: CreateNewPostDialogComponent;
  let fixture: ComponentFixture<CreateNewPostDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewPostDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewPostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
