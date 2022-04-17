import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoDescriptionComponent } from './video-description.component';

describe('DescriptionComponent', () => {
  let component: VideoDescriptionComponent;
  let fixture: ComponentFixture<VideoDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoDescriptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
