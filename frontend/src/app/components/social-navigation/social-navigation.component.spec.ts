import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNavigationComponent } from './social-navigation.component';

describe('SocialNavigationComponent', () => {
  let component: SocialNavigationComponent;
  let fixture: ComponentFixture<SocialNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
