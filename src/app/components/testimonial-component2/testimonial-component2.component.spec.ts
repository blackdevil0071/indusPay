import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialComponent2Component } from './testimonial-component2.component';

describe('TestimonialComponent2Component', () => {
  let component: TestimonialComponent2Component;
  let fixture: ComponentFixture<TestimonialComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialComponent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
