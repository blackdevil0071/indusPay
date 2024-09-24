import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialComponentComponent } from './testimonial-component.component';

describe('TestimonialComponentComponent', () => {
  let component: TestimonialComponentComponent;
  let fixture: ComponentFixture<TestimonialComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
